import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import packageJson from '../package.json';

export default function App({ children }) {

  const history = createBrowserHistory({
    basename: packageJson.basename
  });

  return (
    <Router basename={packageJson.basename} history={ history }>
      <div className="App">
        <Navigation/>
        <Layout children={ children }>
          <Switch>
            <Route exact path={ '/'} render={ () => <Redirect to={'/works'}/> }/>
            <Route path={ '/works' } component={ props => <WorksPage {...props}/> }/>
            <Route path={ '/contact' } component={ props => <ContactPage {...props} /> }/>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}