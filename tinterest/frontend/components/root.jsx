import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// import App from './app';

// NB: this file is complete - you do not to write/edit anything!

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      {/* <App /> */}
      <h1>welcome to tinterest</h1>
    </HashRouter>
  </Provider>
);

export default Root;
