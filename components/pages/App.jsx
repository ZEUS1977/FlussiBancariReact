import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import MyNavBar from './MyNavBar.jsx';
import Body from './Body.jsx';

class App extends React.Component {

   render() {
      return (
         <div>
           <MyNavBar></MyNavBar>
           <Body></Body>
         </div>
      )
   }
}


export default App
