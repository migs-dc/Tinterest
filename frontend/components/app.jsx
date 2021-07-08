import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PinsIndexContainer from './pin/pins_index_container';
import PinShowContainer from './pin/pin_show_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>    

    <header className="top-nav">
      <Link to="/" className="header-link">
        <img src='https://i.imgur.com/DLuTVLr.png' alt="logo" className="logo"/>
        <p>Tinterest</p>
      </Link>
      <GreetingContainer />
    </header>
    
    <Switch>
      <Route exact path="/pins/:pinId" component={PinShowContainer} />
      <PinsIndexContainer />
    </Switch>
  </div>
);

export default App;