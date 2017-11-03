import React from 'react';
import ReactDOM from 'react-dom';
import userClient from '../../src/clients/UserClient.js';
import jsonUtils from '../../src/utils/JsonUtils.js';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           UserName: '',
           Nome: '',
           Cognome: '',
           RagioneSociale: '',
           SettoreAzienda: '',
           FatturazioneElettronica: '',
           IndirizzoFatturazione: '',
           CivicoFatturazione: '',
           CAPFatturazione: '',
           ComuneFatturazione: '',
           SiglaProvinciaFatturazione: '',
           Email: '',
           Password: '',
        };

     };

    handleLogin(ev) {
        ev.preventDefault();
        var datas = {
            UserName: this.refs.user.value,
            Nome: this.refs.nome.value,
            Cognome: this.refs.cognome.value,
            RagioneSociale: this.refs.ragionesociale.value,
            SettoreAzienda:  this.refs.settoreAzienda.value,
            FatturazioneElettronica: this.refs.fatturazioneElettronica.value,
            IndirizzoFatturazione: this.refs.indirizzoFatturazione.value,
            CivicoFatturazione: this.refs.civicoFatturazione.value,
            CAPFatturazione: this.refs.CAPFatturazione.value,
            ComuneFatturazione: this.refs.comuneFatturazione.value,
            SiglaProvinciaFatturazione: this.refs.siglaProvinciaFatturazione.value,
            Email: this.refs.email.value,
            Password:this.refs.password.value,

            };
        this.setState(datas);
        var json =  jsonUtils.objToJson(this.state);
        alert(json);
        userClient.register(json);
        alert('called server with: '+ json);
    };

    validation(ev) {
        const errors = {};
        const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
        if (!emailPattern.test(this.refs.email.value)) {
          errors.email = 'L\'email inserita non é valida!';
        }
      }

   render() {
      return (
        <div>
            <form className="form-horizontal">
            Benvenuto {this.state.User}
            <h1>Registrazione...</h1>
            <ul>
                <li>
                    <h2>Inserisci i tuoi dati...</h2>
                </li>
            </ul>
            <br/>
            <div >
            <label  >Nome Utente:
                <input
                        ref="user"
                        type="text"
                        defaultValue={this.state.User}

                         />
               </label>
             </div>
             <div >
           <label  >Nome:
               <input
                       ref="nome"
                       type="text"
                       defaultValue={this.state.Nome}
                        />
             </label>
           </div>
           <div >
         <label  >Cognome:
               <input
                       ref="cognome"
                       type="text"
                       defaultValue={this.state.Cognome}
                        />
             </label>
           </div>
           <div >
           <label  >Ragione Sociale:
               <input
                       ref="ragionesociale"
                       type="text"
                       defaultValue={this.state.RagioneSociale}
                        />
             </label>
           </div>
           <div >
           <label  >Settore Azienda:
               <input
                       ref="settoreAzienda"
                       type="text"
                       defaultValue={this.state.SettoreAzienda}
                        />
             </label>
           </div>
           <div >
           <label  >Fatturazione Elettronca:
               <input
                       ref="fatturazioneElettronica"
                       type="text"
                       defaultValue={this.state.FatturazioneElettronica}
                        />
             </label>
           </div>
           <div >
           <label  >Indirizzo Fatturazione:
               <input
                       ref="indirizzoFatturazione"
                       type="text"
                       defaultValue={this.state.IndirizzoFatturazione}
                        />
             </label>
           </div>
           <div >
           <label  >Civico Fatturazione:
               <input
                       ref="civicoFatturazione"
                       type="text"
                       defaultValue={this.state.CivicoFatturazione}
                        />
             </label>
           </div>
           <div >
           <label  >CAP Fatturazione:
               <input
                       ref="CAPFatturazione"
                       type="text"
                       defaultValue={this.state.CAPFatturazione}
                        />
             </label>
           </div>
           <div >
           <label  >Comune Fatturazione:
               <input
                       ref="comuneFatturazione"
                       type="text"
                       defaultValue={this.state.ComuneFatturazione}
                        />
             </label>
           </div>
         <div >
         <label  >Sigla Provincia Fatturazione:
             <input
                     ref="siglaProvinciaFatturazione"
                     type="text"
                     defaultValue={this.state.SiglaProvinciaFatturazione}
                      />
           </label>
         </div>
           <div >
           <label  >EMail:
           <input
                    ref="email"
                    type="text"
                    defaultValue= {this.state.Email}
                    onBlur = {this.validation.bind(this)}
                     />
              </label>
            </div>
            <div >
            <label  >Password:
            <input
                    ref="password"
                    type="password"
                    defaultValue={this.state.Password}

                     />
              </label>
            </div>
            <div >
            <label  >Ripeti la Password:
                <input
                    ref="checkpassword"
                    type="password"
                    defaultValue={this.state.CheckPassword}
                     />
               </label>
             </div>
             <div >
            <button onClick={(this.handleLogin.bind(this))}> Avanti  </button>
            </div>
        </form>
       </div>
      )
   }
}



export default Registration;
