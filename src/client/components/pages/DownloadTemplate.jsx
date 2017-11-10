
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


class DownloadTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {

  }

  render() {
    return (
        <div>
      <Grid>
        <Row>
          <Col md={4}>
            <h3>
              <p>Devi utlizzare lo stesso formato del template in xlsx affichè le mav vengano elaborate correttamente!</p>
            </h3>
          </Col>
          <Col md={4}>
            <Form >
              <Button href="http://localhost:3000/templateMAV.xlsx">Scarica il Template</Button>
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

export default DownloadTemplate;
