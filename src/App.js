import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
