import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import { createHashHistory } from "history";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
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

  const history = createHashHistory();

  return (
    <HashRouter history={ history }>
      <div className="App">
        <Navigation/>
        <Layout children={ children }>

          <Switch>
            <Route path='/works' component={ WorksPage }/>
            <Route path='/contact' component={ ContactPage }/>

            <Route path='/vaterland' component={ Vaterland }/>
            <Route path='/der-wert-der-wahrheit' component={ DerWertDerWahrheit }/>
            <Route path='/heimat-schreiben' component={ HeimatSchreiben }/>
            <Route path='/protest-selfie' component={ ProtestSelfie }/>
            <Route path='/schlimmstenfalls-eine-utopie' component={ SchlimmstenfallsEineUtopie }/>
            <Route path='/spuren-im-sand' component={ SpurenImSand }/>
            <Route path='/critical-whiteness' component={ CriticalWhiteness }/>
            <Route path='/solange' component={ Solange }/>
            <Route path='/w-wie-negritude' component={ Negritude }/>

            <Redirect from='/' to='/works'/>
          </Switch>

        </Layout>
      </div>
    </HashRouter>
  );
}