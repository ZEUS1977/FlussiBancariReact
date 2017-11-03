import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           Email: 'ewfew',
           Password: ''
        }
     };

    handleLogin(ev) {
        ev.preventDefault();
        this.setState({
            Email: this.refs.email.value,
            Password:this.refs.password.value}
        );
    };
   render() {
      return (
        <div>
          <form>
                Benvenuto {this.state.Email}
		            <h1>Login...</h1>
		            <ul>
		                <li>
		                    <h2>Accedi...</h2>
		                </li>
		            </ul>
                <div >
                  <label >EMail:< i className = "fa fa-user" > </i> < /label>
  		            <input
  		                    ref="email"
  		                    type="text"
  		                    defaultValue={this.state.Email}
  		                    onChange={this.handleLogin.bind(this)}
  		                     />
                </div>
                <div >
  		            <label  >Password:<i className="fa fa-user"></i> </label>
  		            <input
  		                    ref="password"
  		                    type="password"
  		                    defaultValue={this.state.Password}
  		                    onChange={this.handleLogin.bind(this)}
  		                     />
                </div>
		            <button onClick={this.handleLogin.bind(this)}> Avanti  </button>
              </form>
       </div>
      )
   }
}


export default Login;
