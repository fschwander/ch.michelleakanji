import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends React.Component {

  render() {
    return (
      <Navbar id="Navigation" collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={ '/works' }>
              <h1>Michelle Akanji</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={ '/works' }>
              <NavItem eventKey={ 0 }>Werke</NavItem>
            </LinkContainer>
            <LinkContainer to={ '/contact' }>
              <NavItem eventKey={ 1 }>Kontakt</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  componentDidMount() {
    this.addWindowScrolledListener();
  }

  addWindowScrolledListener() {
    window.addEventListener('scroll', () => {
      let startHeight = 50;

      if (document.body.scrollTop > startHeight || document.documentElement.scrollTop > startHeight) {
        document.getElementById('Navigation').classList.add('scrolled');
      } else {
        document.getElementById('Navigation').classList.remove('scrolled');
      }
    });
  }
}
