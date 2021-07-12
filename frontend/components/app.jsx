import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PinsIndexContainer from './pin/pins_index_container';
import PinShowContainer from './pin/pin_show_container';
import CreatePinContainer from './pin/create_pin_form_container'
import EditPinContainer from './pin/edit_pin_form_container'

import { AuthRoute } from '../util/route_util';
import { AuthRoute2 } from '../util/route2_util';
import { AuthRoute3 } from '../util/route3_util';

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
      <AuthRoute2 exact path="/create-pin" component={CreatePinContainer} />
      <AuthRoute2 exact path="/pins/:pinId" component={PinShowContainer} />
      <AuthRoute3 exact path="/pins/:pinId/edit" component={EditPinContainer} />
      <PinsIndexContainer />
    </Switch>

  </div>
);

export default App;