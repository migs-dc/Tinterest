import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup">
      <Link to="/login"><button>Log in</button></Link>
      <Link to="/signup"><button>Sign up</button></Link>
    </div>     
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h3 className="header-name">{currentUser.username}</h3>
      <Link to='/create-pin'><button className="pb">Create Pin</button></Link>
      <Link to='/create-board'><button className="pb">Create Board</button></Link>
      <Link to='/'>
        <button className="header-button" onClick={logout}>Log out</button>
      </Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;