import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default class Navigation extends React.Component {

  render() {
    return (
      <Navbar id="Navigation" expand='sm'>
        <Navbar.Brand href={'/works'}>Michelle Akanji</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle'>
          <span className='icon-bar'/>
          <span className='icon-bar'/>
          <span className='icon-bar'/>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/works'}><Nav.Link>Arbeiten</Nav.Link></LinkContainer>
            <LinkContainer to={'/contact'}><Nav.Link>Kontakt</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
