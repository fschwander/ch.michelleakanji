import React, { Component } from 'react';
import './styles/Shared.scss';
import PodcastPage from "./pages/PodcastPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PodcastPage/>
      </div>
    );
  }
}

export default App;
