import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  loginDemoUser(demoUser) {
    return e => {
      e.preventDefault()
      this.props.loginForm(demoUser);
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render() {
    const demoUser = {
      email: "demo@email.com",
      password: "password"
    }
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-box">
          <input type="hidden" 
          name="authenticity_token" 
          value="<%= form_authenticity_token %>"/>
          
          <div className="close-button">
            <Link to="/">X</Link>
          </div>
          
          <img src='https://i.imgur.com/DLuTVLr.png' alt="logo" className="logo"/>
          <br/> 
          <p>Welcome to Tinterest</p>
          {this.renderErrors()}
          
          <div className="login-form">
            <input type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <br />
            <input type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
            />  
            <br />
            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />  
            <br />
            <input className="session-submit" type="submit" value='Sign up' />
            
            <br /> or
            <br /> {this.props.navLink}
            <br /> 
            <button type="button" onClick={this.loginDemoUser(demoUser)}>
              Demo User
            </button>    
          </div> 
        </form>       
      </div>
    );
  }
}

export default SignupForm;