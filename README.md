# 探究的几个内容

* 如何把所有的css最后都做到一个bundle里面？一个loader和一个plugin

# 构建问题

* npm link问题
    * include配置，需要加上文件的相对路径
* css如何优化，为何和js的hash一致
* stats.json有错误，但是调用webpack()编译时callback未有错误信息，react-icons的版本未编译过，是

# 优化

* 路径优化 $
* 组件打包优化，按需打包

# 技术的特色

* 使用cli进行开发启动(有了可把控的入口)

本地运行时

* html模板同服务端同步的
* live-reload，HMR
* 数据的mock
* 调试线上组件

webpack

* 编译性能提升 happy pack, cache
* config
    * output hash
    * entry babel-polyfill ? , file, HMR
* externals 
    * react, react-dom
* loader 
    * eslint, tslint
    * html-loader?
    * js -> babel-loader
    * css -> 
        * sass-loader 变成普通的sass loader
        * css-loader 对css可做变形转义，只是手动加各种参数，root路径，module模块化 在js中使用，localIdentName定制化class名，minimize压缩，camelCase，借鉴，https://juejin.im/entry/5826e755c4c9710054313d6e
        * style-loader css最终插入到html中为`<style>${cssContent}</style>`这样标签
        * MiniCssExtractPlugin.loader ? extract是什么意思？抽取，即把所有的css抽取到一起吧. 可以做longTermCache，根据entry不同输出不同file，
    * png -> url-loader
* plugin 
    * HtmlWebpackPlugin
    * MiniCssExtractPlugin
    * DefinePlugin?
* optimization(TODO)

server

* browserSync?
* historyApiFallback ?
* webpackDevMiddleware
* webpackHotMiddleware

cli 

* better-npm-run ? 

其它配置

* .babelrc
* .eslintrc

webpack server?

* 

es6 babel优化

* runtime 优化？

框架选型

* React
* 状态管理？Redux ? Hooks ? Mobx ?
* React-Router
* immutable?

代码规范

* git提交规范
* eslint, tslint

检测

* 包大小检测
* 依赖关系展示
* 重复包风险等检测

自动部署和回退

* jekins
* 如何回退记录
* html如何发布？以及动态的变量合并
* 

组件库建设

* 组件的版本，升级等规范
* 通用的common less
* 如何管理和使用的？
* 如何组织，如何使用
* 业务中常用的组件库管理
* 生成组件的文档
* JEST单元测试
* 组件库更新通知

打包

* bundle
* long term cache
* 组件库按需bundle
* 删除无用代码

其它建设

* playground 快速的演示