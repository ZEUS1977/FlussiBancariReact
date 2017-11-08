import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Auth from '../../utils/Auth.js';

export default class Dashboard extends React.Component {
  render() {

    if(Auth.isUserAuthenticated()){
      return (

      <div>
        <Jumbotron>
          <Grid>
            <h1>Benvenuto!</h1>
            <p>Flussi bancari nasce dall'esigenza di tutti coloro che hanno bisogno di emettere delle MAV a partire da file Excel.</p>

          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={4}>
              <h2>Compila il file Excel</h2>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Carica il file nella pagina dedicata</h2>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Scarica il file prodotto pronto per la tua banca</h2>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
    }else{
      return(
      <div>
          <h1>Per accedere alla DashBoard devi prima entrare con le tue credenziali!</h1>
      </div>

    )
    }
  }
}
