import React, { Component } from 'react';
import Player from './components/Player';
import { GameEngine } from 'react-game-engine';
import './App.css';


class App extends Component {

  render() {
    return(
        <div className="container">
          <Player />
        </div>
      
    )
  }
}

export default App;
