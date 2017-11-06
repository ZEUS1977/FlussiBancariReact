import React from 'react';
import {FormGroup, ControlLabel, FormControl, Form, Button} from 'react-bootstrap/lib/';
import userClient from '../../src/clients/UserClient.js';
import jsonUtils from '../../src/utils/JsonUtils.js';

class Registration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      nome: '',
      cognome: '',
      ragioneSociale: '',
      settoreAzienda: '',
      fatturazioneElettronica: '',
      indirizzoFatturazione: '',
      civicoFatturazione: '',
      CAPFatturazione: '',
      comuneFatturazione: '',
      siglaProvinciaFatturazione: '',
      email: '',
      password: ''
    };
    this.textInput ='';
  };

getValidationState(){

  if (this.state.userName===null || this.state.userName==='' || this.state.userName == undefined) { return null; }
  else if(this.state.userName.length < 8)
    return "error";
  else
    return 'success';

 }

  validateForm() {
    if (this.state.userName.length > 0 &&
      this.state.nome.length > 0 &&
      this.state.cognome.length > 0 &&
      this.state.ragioneSociale.length > 0 &&
      this.state.settoreAzienda.length > 0 &&
      this.state.fatturazioneElettronica.length > 0 &&
      this.state.indirizzoFatturazione.length > 0 &&
      this.state.civicoFatturazione.length > 0 &&
      this.state.CAPFatturazione.length > 0 &&
      this.state.comuneFatturazione.length > 0 &&
      this.state.siglaProvinciaFatturazione.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
      )
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

  getValidationStatePassword(){
    if(this.state.password === null || this.state.password === '' || this.state.password === undefined)
      return null;
    else if(this.textInput.value != this.state.password)
      return 'error';
    else
      return 'success';
  }

  handleSubmit(event){
    if (this.getValidationStatePassword() == 'success'){
      var json = jsonUtils.objToJson(this.state);
      alert(json);
      userClient.register(json);
      alert('called server with: ' + json);
    }else{
      alert('Controlla i dati inseriti');
    }
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="userName" bsSize="sm" validationState={this.getValidationState()}>
          <ControlLabel>Nome Utente</ControlLabel>
          <FormControl bsSize="sm" autoFocus type="formBasicText" value={this.state.userName} onChange={this.handleChange}/>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="email" bsSize="sm">
          <ControlLabel>Email</ControlLabel>
          <FormControl bsSize="sm" type="email" value={this.state.email} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="password" bsSize="sm">
          <ControlLabel>Password</ControlLabel>
          <FormControl bsSize="sm" value={this.state.password} onChange={this.handleChange} type="password"/>
        </FormGroup>
        <FormGroup controlId="checkPassword" bsSize="sm" validationState={this.getValidationStatePassword()} >
          <ControlLabel>Ripeti Password</ControlLabel>
          <FormControl bsSize="sm" onChange={this.handleChange} type="password" inputRef={input => this.textInput = input} />
        </FormGroup>
        <Button block bsSize="sm" type="button" onClick={this.handleSubmit.bind(this)}>
          Registrati
        </Button>

      </Form>
    );
  }
}

export default Registration
