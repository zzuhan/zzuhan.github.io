// import global vars for a whole app
const resolve = dir => path.join(__dirname, dir);

require('./globals');

const path = require('path');
// const browserSync = require('browser-sync');
// const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const debug = require('debug')('app:webpack:config');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const rules = [
    // {
    //     enforce: 'pre',
    //     test: /\.(js|jsx)?$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'eslint-loader',
    //     options: {
    //         quiet: true
    //     }
    // },
    {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'tslint-loader',
        options: {
          quiet: true,
          tsConfigFile: './tsconfig.json'
        }
    },
    {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
    },
    {
        test: /\.(js|jsx|ts|tsx)?$/,
        // exclude: /(node_modules|bower_components)/,
        include: [
          path.resolve(__dirname, 'src'),
          // link命令有很大的问题哇，使用
          path.resolve(__dirname, 'node_modules/qa'),
          path.resolve(__dirname, '../zsui/qa')        
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            'presets': [
              '@babel/env',
              '@babel/react',
              '@babel/typescript'
            ],
            'plugins': [
              '@babel/plugin-transform-object-assign',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }]
       
    },
    {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
        test: /.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            // __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
            {
                // 
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]_[local]__[hash:base64:5]',
                    camelCase: true
                }
            },
            // 'postcss-loader',
            'sass-loader'
        ]
    },
      // FILE/IMAGES
    {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
];

// ------------------------------------
// BUNDLES OPTIMIZATION
// ------------------------------------
const optimization = {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minChunks: 2,
        cacheGroups: {
          "vendor": {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            minChunks: 1,
            reuseExistingChunk: true
          },
          "utils": {
            name: "utils",
            test: /[\\/]node_modules[\\/](moment)[\\/]/,
            priority: 2,
            minChunks: 1,
            reuseExistingChunk: true
          },
          "use-twice": {
            name: 'use-twice',
            // test: /[\\/]node_modules[\\/]/,
            // TODO 这是什么含义？
            chunks: 'all',
            priority: 2,
            minChunks: 2,
            reuseExistingChunk: true
          },
          // "zsui": {
          //   name: 'zsui',
          //   test: (module) => {
          //     return /qa/.test(module.context);
          //   },
          //   chunks: 'initial',
          //   minChunks: 1,
          //   priority: 10,
          // }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              unused: true,
              dead_code: true,
              warnings: false
            }
          },
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    performance: {
      hints: false
    }
  };

// ------------------------------------
// STAGE PLUGINS INJECTION! [DEVELOPMENT, PRODUCTION, TESTING]
// ------------------------------------
const stagePlugins = {
  test: [new BundleAnalyzerPlugin()],
  development: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: false,
      chunksSortMode: 'auto',
      chunks: ['app', 'use-twice', 'vendor', 'utils']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./dist/dll/react.dll.manifest.json')
    }),
    new AddAssetHtmlPlugin([{ // 往html中注入dll js
      // TODO 这个/是webpack config public path
      // publicPath: '/' + 'dll/',  // 注入到html中的路径
      // outputPath: 'dll', // 最终输出的目录
      filepath: resolve('./dist/dll/*.js'),
      includeSourcemap: false,
      typeOfAsset: 'js' // options js、css; default js
    }])
  ],
  production: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      },
      chunksSortMode: 'auto'
    })
  ]
};

// // ========================================================
// // WEBPACK MIDDLEWARE CONFIGURATION
// // ========================================================
// const devMiddlewareOptions = {
//     publicPath: webpackConfig.output.publicPath,
//     hot: true,
//     headers: { 'Access-Control-Allow-Origin': '*' }
// };

// // ========================================================
// // Server Configuration
// // ========================================================
// browserSync({
//     open: false,
//     ghostMode: {
//       clicks: false,
//       forms: false,
//       scroll: true
//     },
//     server: {
//       baseDir: path.resolve(__dirname, '../src'),
//       middleware: [
//         historyApiFallback(),
//         webpackDevMiddleware(bundler, devMiddlewareOptions),
//         webpackHotMiddleware(bundler)
//       ]
//     },
//     files: [
//       'src/../*.tsx',
//       'src/../*.ts',
//       'src/../*.jsx',
//       'src/../*.js',
//       'src/../*.json',
//       'src/../*.scss',
//       'src/../*.html'
//     ]
//   });

// ------------------------------------
// STAGE CONFIGURATION INJECTION! [DEVELOPMENT, PRODUCTION]
// ------------------------------------
const stageConfig = {
  test: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  },
  development: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  },
  production: {
    devtool: 'source-map',
    stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  }
};

const createConfig = () => {
    debug('Creating configuration.');
    debug(`Enabling devtools for '${__NODE_ENV__} Mode!'`);
  
    const webpackConfig = {
      mode: __DEV__ ? 'development' : 'production',
      name: 'client',
      target: 'web',
      devtool: stageConfig[__NODE_ENV__].devtool,
      stats: stageConfig[__NODE_ENV__].stats,
      module: {
        rules: [...rules]
      },
      ...optimization,
      resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@': resolve('src')
        }
      }
    };

    // ------------------------------------
    // Entry Points
    // ------------------------------------
    webpackConfig.entry = {
      app: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')].concat(
        'webpack-hot-middleware/client?path=/__webpack_hmr'
      ),
      app2: ['babel-polyfill', path.resolve(__dirname, 'src/index2.js')].concat(
        'webpack-hot-middleware/client?path=/__webpack_hmr'
      )
    }
  
    // ------------------------------------
    // Bundle externals
    // ------------------------------------
    // webpackConfig.externals = {
    //   react: 'React',
    //   'react-dom': 'ReactDOM'
    // };
  
    // ------------------------------------
    // Bundle Output
    // ------------------------------------
    webpackConfig.output = {
      filename: __DEV__ ? '[name].[hash].js': '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    };
  
    // ------------------------------------
    // Plugins
    // ------------------------------------
    debug(`Enable plugins for '${__NODE_ENV__} Mode!'`);
    webpackConfig.plugins = [
      new webpack.DefinePlugin({
        __DEV__,
        __PROD__,
        __TEST__
      }),
      ...stagePlugins[__NODE_ENV__]
    ];
  
    // ------------------------------------
    // Finishing the Webpack configuration!
    // ------------------------------------
    debug(`Webpack Bundles is Ready for '${__NODE_ENV__} Mode!'`);
    return webpackConfig;
  };
  
  module.exports = createConfig();