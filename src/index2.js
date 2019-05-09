import React from 'react';
import ReactDOM from 'react-dom';

import QA from 'qa';


const ENTRY_POINT = document.querySelector('#react-app-root');

const render = () => {
  ReactDOM.render(<QA />, ENTRY_POINT);
  // <AppContainer store={store} history={history} />, ENTRY_POINT);
};

render();