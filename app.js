"use strict"
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/pages/Home.jsx';
import Registration from './components/pages/Registration.jsx';
import Login from './components/pages/Login.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "registration" component = {Registration} />
         <Route path = "login" component = {Login} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
     </Route>
   </Router>

), document.getElementById('app'));
