import React, {Component} from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import UserSets from './components/UserSets'
import Register from './components/Register'
import Landing from './components/Landing'
import Footer from './components/Footer'
import OrganizationLogin from './components/OrganizationLogin'
import OrganizationRegister from './components/OrganizationRegister'
import Cart from './components/Cart'
import DishesTop from './components/DishesTop'
import FavouriteDishes from './components/FavouriteDishes'
import Menu from './components/Menu'
import Details from './components/Details'
import UserOrders from './components/UserOrders'
import './App.css';


class App extends Component {
render(){
  return (
    <Router>
      <div className="App">
      <Header/>

      <Switch>
      <Route exact path="/details" component={Details}/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/userorders" component={UserOrders}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/usersets" component={UserSets}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/orgadm" component={OrganizationLogin}/>
      <Route exact path="/orgadm/register" component={OrganizationRegister}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/dishestop" component={DishesTop}/>
      <Route exact path="/FavouriteDishes" component={FavouriteDishes}/>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
