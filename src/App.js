import React from 'react'
import { AuthProvider } from './services/Auth'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Details from './components/Details/Details'
import Catalog from './components/Catalog/Catalog'
import Category from './components/Category/Category'
import ScrollToTop from './components/ScrollToTop'
import PrivateRoute from './components/Auth/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <PrivateRoute exact path="/categories/:genreId/:genreName/:currentPage" component={Category} />
          <PrivateRoute exact path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
