import React, { Component } from 'react';
import Player from './components/Player';
import Enemy from './components/Enemy'
import './App.css';
import PlayerMissile from './components/PlayerMissile';

class App extends Component {

  render() {
    return(
      <div className="container">
        <Player />
        <Enemy />
        <PlayerMissile />
      </div>
    )
  }
}

export default App;
