import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
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

  demoUser(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <img src='https://i.imgur.com/DLuTVLr.png' alt="logo" className="logo"/>
          <br/> 
          <p>Welcome to Tinterest</p>
          {this.renderErrors()}
          
          <div className="login-form">
            <br/>
            <label>Email: <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Password: <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value='Log in' />

            <br/> or
            <br/> <button>Sign up</button> <br/> 
            <button onClick={this.demoUser}>
              Demo User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;