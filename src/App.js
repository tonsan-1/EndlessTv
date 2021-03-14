import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './services/Auth'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Layout}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
