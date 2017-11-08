import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const MyNavBar = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <span>Flussi Bancari</span>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={3} title="Gestione MAV" id="basic-nav-dropdown" >
          <MenuItem eventKey={3.1}>Carica File Excel</MenuItem>
          <MenuItem eventKey={3.2}>Verifica i movimenti</MenuItem>
          <MenuItem eventKey={3.3}>Scarica il tracciato CBI</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem eventKey={1}>Entra</NavItem>
        </LinkContainer>
        <LinkContainer to="/registration">
          <NavItem eventKey={2}>Registrati</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNavBar;
