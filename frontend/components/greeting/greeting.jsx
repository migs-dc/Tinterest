import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup">
      <button><Link to="/login">Log in</Link></button>
      <button><Link to="/signup">Sign up</Link></button>
    </div>     
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link> {/* maybe link to profile? */}
        <h3 className="header-name">{currentUser.username}</h3>
      </Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;