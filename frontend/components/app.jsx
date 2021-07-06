import React from 'react';
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <header>
      <h1>Tinterest</h1>
      <p>hi</p>
      <GreetingContainer />
      <p>hello</p>
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;