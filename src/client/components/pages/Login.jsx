import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Button,   HelpBlock,
  Grid,
  Row,
  Col} from 'react-bootstrap/lib/';
import userClient from '../../nodeclient/UserClient.js';
import Auth from '../../utils/Auth.js';
var promise = require("es6-promise");
var axios = require('axios');
var resourceUrl = "http://localhost:7777";
var register = "/auth/signup";
var login = "/auth/login";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      success: '',
      message: '',
      email: '',
      password: '',
      user: ''
    };
  }
  getValidationEmail() {
    if (this.state.email === null || this.state.email === '' || this.state.email === undefined)
      return null;
    else if (this.state.email.toString().length < 8)
      return 'error';
    else
      return 'success';
    }
  getValidationStatePassword() {
    if (this.state.password === null || this.state.password === '' || this.state.password === undefined)
      return null;
    else if (this.state.password.toString().length < 8)
      return 'error';
    else
      return 'success';
    }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    if (this.getValidationStatePassword() == 'success' && this.getValidationEmail() == 'success') {
      const email = encodeURIComponent(this.state.email);
      const password = encodeURIComponent(this.state.password);
      const formData = `email=${email}&password=${password}`;
      alert(formData)

      axios.post(resourceUrl+login, formData)
            .then(response => {
              this.setState({success: response.data.success});
              this.setState({message: response.data.message});

              if(this.state.success){
                this.setState({user: response.data.user.name});
                // save the token
                Auth.authenticateUser(response.data.token);
              }
              this.setState({
                errors: {}
              });



              // change the current URL to /
              this.props.history.push('/DashBoard');
            })
    } else {
      alert('Controlla i dati inseriti');
    }
  }

  render() {
    return (
        <div>
      <Grid>
        <Row>
          <Col md={4}>
            <h3>
              <p>Entra con la mail e la password fornite in fase di registrazione.</p>
            </h3>
          </Col>
          <Col md={4}>
            <Form >
              <FormGroup controlId="email" bsSize="sm" validationState={this.getValidationEmail()}>
                <ControlLabel>Email</ControlLabel>
                <FormControl bsSize="sm" autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup controlId="password" bsSize="sm" validationState={this.getValidationStatePassword()}>
                <ControlLabel>Password</ControlLabel>
                <FormControl bsSize="sm" value={this.state.password} onChange={this.handleChange} type="password"/>
              </FormGroup>
              <Button  block bsSize="sm" type='button' onClick={this.handleSubmit.bind(this)}>
                Entra
              </Button>
            </Form>
          </Col>
          <Col md={4}>
              <h1>{this.state.message}</h1>
          </Col>
        </Row>
      </Grid>

      </div>
      );
    }
}

export default Login;
