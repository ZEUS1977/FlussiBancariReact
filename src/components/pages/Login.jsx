import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Button,   HelpBlock,
  Grid,
  Row,
  Col} from 'react-bootstrap/lib/';
  import userClient from '../../clients/UserClient.js';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
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
      //var json = jsonUtils.objToJson(this.state);
      //alert(json);
      userClient.login(this.state);
      //alert('called server with: ' + json);
    } else {
      alert('Controlla i dati inseriti');
    }
  }

  render() {
    return (
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
          <Col md={4}></Col>
        </Row>
      </Grid>
      );
    }
}

export default Login;
