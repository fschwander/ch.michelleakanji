import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import Vaterland from "./works/Vaterland";
import HeimatSchreiben from "./works/HeimatSchreiben";
import DerWertDerWahrheit from "./works/DerWertDerWahrheit";
import ProtestSelfie from "./works/ProtestSelfie";
import SchlimmstenfallsEineUtopie from "./works/SchlimmstenfallsEineUtopie";
import SpurenImSand from "./works/SpurenImSand";
import CriticalWhiteness from "./works/CriticalWhiteness";
import Solange from "./works/Solange";
import Negritude from "./works/Negritude";

export default function App({ children }) {

  const history = createBrowserHistory();

  return (
    <Router history={ history }>
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
            <Route path={ '/vaterland' } component={ props => <Vaterland {...props} /> }/>
            <Route path={ '/spuren-im-sand' } component={ props => <SpurenImSand {...props} /> }/>
            <Route path={ '/critical-whiteness' } component={ props => <CriticalWhiteness {...props} /> }/>
            <Route path={ '/solange' } component={ props => <Solange {...props} /> }/>
            <Route path={ '/w-wie-negritude' } component={ props => <Negritude {...props} /> }/>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}