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
        <LinkContainer to="/dashboard">
          <NavItem eventKey={3}>DashBoard</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem eventKey={1}>Entra</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem eventKey={2}>Esci</NavItem>
        </LinkContainer>
        <LinkContainer to="/registration">
          <NavItem eventKey={3}>Registrati</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNavBar;
