import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signin, login, logout } from './util/session_api_util'

window.signin = signin;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root />, root);
})