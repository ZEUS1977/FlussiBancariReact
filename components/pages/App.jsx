import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import MyNavBar from './MyNavBar.jsx';

class App extends React.Component {

   render() {
      return (
         <div>
           <MyNavBar></MyNavBar>
         	<h1>Benvenuto</h1>
            <ul>
               <li><Link to = "/home">Home</Link></li>
               <li><Link to = "/registration"> Registration</Link></li>
               <li><Link to = "/login">Login</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
            </ul>

           {this.props.children}
         </div>
      )
   }
}


export default App
