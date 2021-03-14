import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { AuthProvider } from './services/Auth'
import PrivateRoute from './services/PrivateRoute'


function App() {
  return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
