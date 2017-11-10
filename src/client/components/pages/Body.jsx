import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

export default class Body extends React.Component {

  constructor(props) {
    super(props);
  }

templateHandle(event){
    this.props.history.push('/downloadtemplate');
}

  render() {
    return (<div>
      <Jumbotron>
        <Grid>
          <h1>Benvenuto!</h1>
          <p>Flussi bancari nasce dall'esigenza di tutti coloro che hanno bisogno di emettere delle MAV a partire da file Excel.</p>

        </Grid>
      </Jumbotron>
      <Grid>
        <Row>
          <Col md={4}>
            <Well>
              <h2>Compila il file Excel</h2>
              <p>Le colonne devono rispettare il formato del template fornito!</p>
              <p>
                <Button onClick={this.templateHandle.bind(this)}>Puoi scaricare qui il template xlsx »</Button>
              </p>
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <h2>Carica il file nella pagina dedicata</h2>
              <p>Il file verrà elaborato e potrai esportate il tracciato in formato CBI pronto per il passo sucessivo.</p>
              <p>
                <Button>Carica »</Button>
              </p>
            </Well>
          </Col>
          <Col md={4}>
            <Well>
              <h2>Scarica il file prodotto pronto per la tua banca</h2>
              <p>Lo potrai caricare sul tuo sito di Home Banking per richiedere l'emissione delle MAV.</p>
              <p>
                <Button>View details »</Button>
              </p>
            </Well>
          </Col>
        </Row>
      </Grid>
    </div>);
  }
}
