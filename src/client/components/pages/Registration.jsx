import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button,
  HelpBlock,
  Grid,
  Row,
  Col
} from 'react-bootstrap/lib/';
import userClient from '../../nodeclient/UserClient.js';
import jsonUtils from '../../utils/JsonUtils.js';

class Registration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      password: ''
    };
    this.textInput = '';
  };

  getValidationUserState() {

    if (this.state.userName === null || this.state.userName === '' || this.state.userName == undefined) {
      return null;
    } else if (this.state.userName.length < 8)
      return "error";
    else
      return 'success';

    }

  validateForm() {
    if (this.state.userName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0)
      return true;
    else
      return false;
    }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    //alert('handleChange');
    //alert(jsonUtils.objToJson(this.state));
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

  getValidationStateCheckPassword() {
    if (this.textInput === null || this.textInput === '' || this.textInput === undefined)
      return null;
    else if (this.textInput.value != this.state.password)
      return 'error';
    else
      return 'success';
    }

  handleSubmit(event) {
    if (this.getValidationUserState() == 'success' && this.getValidationStatePassword() == 'success' && this.getValidationStateCheckPassword() == 'success' && this.getValidationEmail() == 'success') {
      //var json = jsonUtils.objToJson(this.state);
      //alert(json);
      userClient.register(this.state);
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
              <p>Registrati per una prova gratuita del nostro servizio di generazione di un tracciato MAV in formato CBI a partire da un file Excel opportunamente compilato, caricabile sul tuo sito di Home Banking.</p>
              <p>Il servizio è gratutito per Excel sino a 5 MAV per file, per poter convertire file con più di 5 MAV è  necessario sottoscrivere un abbonamento.</p>
            </h3>
          </Col>
          <Col md={4}>
            <Form>
              <FormGroup controlId="userName" bsSize="sm" validationState={this.getValidationUserState()}>
                <ControlLabel>Nome Utente</ControlLabel>
                <FormControl bsSize="sm" autoFocus type="formBasicText" value={this.state.userName} onChange={this.handleChange}/>
                <FormControl.Feedback/>
                <HelpBlock>Il nome utente deve almeno di 8 caratteri.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="email" bsSize="sm" validationState={this.getValidationEmail()}>
                <ControlLabel>Email</ControlLabel>
                <FormControl bsSize="sm" type="email" value={this.state.email} onChange={this.handleChange}/>
                <FormControl.Feedback/>
                <HelpBlock>Inserisici una mail valida.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="password" bsSize="sm" validationState={this.getValidationStatePassword()}>
                <ControlLabel>Password</ControlLabel>
                <FormControl bsSize="sm" value={this.state.password} onChange={this.handleChange} type="password"/>
                <FormControl.Feedback/>
                <HelpBlock>La password deve avere almeno 8 caratteri di cui uno diverso da una lettera o un numero.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="checkPassword" bsSize="sm" validationState={this.getValidationStateCheckPassword()}>
                <ControlLabel>Ripeti Password</ControlLabel>
                <FormControl bsSize="sm" onChange={this.handleChange} type="password" inputRef={input => this.textInput = input}/>
                <FormControl.Feedback/>
                <HelpBlock>Deve essere identica al valore inserito nel campo Password.</HelpBlock>
              </FormGroup>
              <Button block bsSize="sm" type="button" onClick={this.handleSubmit.bind(this)}>
                Registrati
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <h3>Codice Sia</h3>
            <p>Per poter caricare il file in banca devi richiedere il codice SIA alla tua banca. Il codice SIA identifica l'azienda che vuole scambiare flussi dispositivi, informativi con le proprie banche tesoriere nel rispetto delle regole del servizio CBI. E' composto da una lettera e 4 numeri, come ad esempio: A4321. Per ottenere il codice SIA è necessario recarsi presso la propria banca e sottoscrivere il contratto di Corporate Banking Interbancario (CBI). Successivamente al richiedente sarà consegnata una busta contenente il codice utente e la password. Infine, sarà comunicato il codice SIA, univoco per ogni azienda.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Registration
