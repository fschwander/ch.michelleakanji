import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";

export default function App({ children }) {
  const history = createBrowserHistory();

  return (
    <Router history={ history }>
      <div className="App">
        <Navigation/>
        <Layout children={ children }>
          <Switch>
            <Route exact path={ `/` } component={ HomePage }/>
            <Route path={ `/works` } component={ WorksPage }/>
            <Route path={ `/contact` } component={ ContactPage }/>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}