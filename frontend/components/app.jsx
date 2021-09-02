import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";

import { AuthRoute } from '../util/route_util';
import { AuthRoute2 } from '../util/route2_util';
import { AuthRoute3 } from '../util/route3_util';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import PinsIndexContainer from './pin/pins_index_container';
import PinShowContainer from './pin/pin_show_container';
import CreatePinContainer from './pin/create_pin_form_container'
import EditPinContainer from './pin/edit_pin_form_container'

import BoardsIndexContainer from './board/boards_index_container'
import BoardShowContainer from './board/board_show_container'
import CreateBoardContainer from './board/create_board_form_container'
import EditBoardContainer from './board/edit_board_form_container'

const App = () => (
  <div className="name">
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <PinsIndexContainer /> */}
      {/* <Route exact path="/pins" component={PinsIndexContainer} /> */}
    </Switch>    

    <header className="top-nav">
      <Link to="/" className="header-link">
        <img src='https://i.imgur.com/DLuTVLr.png' alt="logo" className="logo"/>
        <p>Tinterest</p>
      </Link>
      <div className="search-bar">
        <input placeholder="Search" type="text" />
        {/* <button><i class="fas fa-search"></i></button> */}
      </div>
      <GreetingContainer />
    </header>
  
    <Switch>
      <Route exact path="/" component={PinsIndexContainer} />
      <AuthRoute2 exact path="/create-pin" component={CreatePinContainer} />
      <AuthRoute2 exact path="/pins/:pinId" component={PinShowContainer} />
      {/* <AuthRoute3 exact path="/pins/:pinId/edit" component={EditPinContainer} /> */}
    {/* </Switch>
    <Switch> */}
      <AuthRoute2 exact path='/boards' component={BoardsIndexContainer} />      
      <AuthRoute2 exact path="/create-board" component={CreateBoardContainer} />
      <AuthRoute2 exact path="/boards/:boardId" component={BoardShowContainer} />
      {/* <AuthRoute3 exact path="/boards/:boardId/edit" component={EditBoardContainer} /> */}
    
      <PinsIndexContainer />
    </Switch>
  </div>
);

export default App;