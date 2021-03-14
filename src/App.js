import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './services/Auth'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PrivateRoute from './services/PrivateRoute'


function App() {
  return (
        <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
      </AuthProvider>
        </Router>
  );
}

export default App;
