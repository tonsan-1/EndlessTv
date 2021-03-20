import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/Auth/PrivateRoute'
import { AuthProvider } from './services/Auth'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Category from './components/Category/Category'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <PrivateRoute exact path="/categories/:title/:currentPage" component={Category} />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
