import React from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { createBrowserHistory } from 'history';
import AudioFeaturePage from "../pages/AudioFeaturePage";
import ContactPage from "../pages/ContactPage";

export default class Navigation extends React.Component {
  render() {
    const history = createBrowserHistory();

    return (
      <Router history={ history }>
        <div>
          <Switch>
            <Route path={ `/feature` } component={ AudioFeaturePage }/>
            <Route path={ `/contact` } component={ ContactPage }/>
            <Route path={ `/` } render={ () => <Redirect to={ `/feature` }/> }/>
          </Switch>

          <Navbar id="Navigation" collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={ `/feature` }>Michelle Akanji</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to={ `/feature` }>
                  <NavItem eventKey={ 0 }>Audio</NavItem>
                </LinkContainer>
                <LinkContainer to={ `/contact` }>
                  <NavItem eventKey={ 1 }>Kontakt</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Router>
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
