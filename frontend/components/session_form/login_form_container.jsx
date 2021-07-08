import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    navLink: 
      <Link to="/signup">
        <button type="button">Sign up</button>
      </Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(LoginForm);