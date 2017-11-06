import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Button} from 'react-bootstrap/lib/';

class Login extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: ""
      }
    }

    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
    }

  render() {
    return (
    <Form  > 
      <FormGroup controlId="email" bsSize="sm">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  bsSize="sm"
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="sm">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  bsSize="sm"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="sm"
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
      </Form>
    );
  }
}

export default Login
