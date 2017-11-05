import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import MyNavBar from './MyNavBar.jsx';
import Body from './Body.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';

class App extends React.Component {

   render() {
      return (
         <div>
           <MyNavBar></MyNavBar>
           <Switch>
            <Route exact path='/'  component={Body} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/registration' component={Registration}/>
          </Switch>
         </div>
      )
   }
}


export default App
