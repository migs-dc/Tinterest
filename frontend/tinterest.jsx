import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { sigup, login, logout } from './util/session_api_util'

window.signup = sigup;
window.login = login;
window.logout = logout;

const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root />, root);
})