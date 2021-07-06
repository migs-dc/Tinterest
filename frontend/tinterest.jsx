import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  ReactDOM.render(<Root />, root);
  // ReactDOM.render(<h1>hello</h1>, root);
})