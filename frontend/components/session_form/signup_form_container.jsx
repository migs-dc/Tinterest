import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    navLink: 
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SignupForm);