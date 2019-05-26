import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'

import logo from './logo.svg';
import './App.css';

class App extends Component {
render(){
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <div className="container">
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>

      </div>
      </div>
    </Router>
  );
}
}

export default App;
