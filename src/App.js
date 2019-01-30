import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";

export default function App({ children }) {
    return (
      <div className="App">
        <Navigation/>
        <Layout children={children} />
      </div>
    );
}