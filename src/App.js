import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import packageJson from '../package.json';
import VaterlandPage from "./works/VaterlandPage";
import HeimatSchreiben from "./works/HeimatSchreiben";
import DerWertDerWahrheit from "./works/DerWertDerWahrheit";
import ProtestSelfie from "./works/ProtestSelfie";
import SchlimmstenfallsEineUtopie from "./works/SchlimmstenfallsEineUtopie";

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

            <Route path={ '/der-wert-der-wahrheit' } component={ props => <DerWertDerWahrheit {...props} /> }/>
            <Route path={ '/heimat-schreiben' } component={ props => <HeimatSchreiben {...props} /> }/>
            <Route path={ '/protest-selfie' } component={ props => <ProtestSelfie {...props} /> }/>
            <Route path={ '/schlimmstenfalls-eine-utopie' } component={ props => <SchlimmstenfallsEineUtopie {...props} /> }/>
            <Route path={ '/vaterland' } component={ props => <VaterlandPage {...props} /> }/>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}