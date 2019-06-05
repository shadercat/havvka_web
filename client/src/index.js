import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App.js'
import * as serviceWorker from './serviceWorker';
import {DishProvider} from './context'


ReactDOM.render(
  <DishProvider>
  <App />
  </DishProvider>,
   document.getElementById('root'));


serviceWorker.unregister();
