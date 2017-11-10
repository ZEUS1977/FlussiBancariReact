import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import MyNavBar from './MyNavBar.jsx';
import Body from './Body.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Registration from './Registration.jsx';
import DashBoard from './DashBoard.jsx';
import Auth from '../../utils/Auth.js';
import DownloadTemplate from './DownloadTemplate.jsx'

const authenticate = (nextState, replace) => {
  if (!Auth.isUserAuthenticated()) {
    this.props.history.push('/login');
  }
};

class App extends React.Component {


   render() {
      return (
         <div>
           <MyNavBar></MyNavBar>
           <Switch>
            <Route exact path='/'  component={Body}/>
            <Route exact path='/dashboard'  component={DashBoard} onEnter={authenticate}/>
            <Route exact path='/downloadtemplate' component={DownloadTemplate}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={Logout}/>
            <Route exact path='/registration' component={Registration}/>
          </Switch>
         </div>
      )
   }
}


export default App
