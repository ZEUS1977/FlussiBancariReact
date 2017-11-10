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

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
      Auth.deauthenticateUser();
      this.props.history.push('/');
  }

  render() {
    return (
        <div>
      <Grid>
        <Row>
          <Col md={4}>
            <h3>
              <p>Grazie per aver usufruito del nostro servizio!</p>
            </h3>
          </Col>
          <Col md={4}>
            <Form >
              <Button  block bsSize="sm" type='button' onClick={this.handleSubmit.bind(this)}>
                Esci
              </Button>
            </Form>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Grid>

      </div>
      );
    }
}

export default Logout;
