import React from 'react';
import './styles/Shared.scss';
import Navigation from "./components/Navigation";

export default function App({ children }) {
    return (
      <div className="App">
        <Navigation/>
        <div>{children}</div>
      </div>
    );
}