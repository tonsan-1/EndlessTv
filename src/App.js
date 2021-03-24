import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/Auth/PrivateRoute'
import ScrollToTop from './components/ScrollToTop'
import { AuthProvider } from './services/Auth'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Category from './components/Category/Category'
import Details from './components/Details/Details'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop/>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <PrivateRoute exact path="/categories/:genreId/:genreName/:currentPage" component={Category} />
          <PrivateRoute exact path="/details/:id" component={Details} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
