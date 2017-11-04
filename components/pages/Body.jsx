import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Body extends React.Component {
  render() {
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
              <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Carica il file nella pagina dedicata</h2>
              <p>Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.</p>
              <p><Button>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Scarica il file prodotto pronto per la tua banca</h2>
              <p>Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.</p>
              <p><Button>View details »</Button></p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
