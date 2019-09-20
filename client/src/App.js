import React, { Component } from 'react';
import Player from './components/Player';
import Enemy from './components/Enemy';
import {Loop} from 'react-game-kit';
import './App.css';


class App extends Component {

  render() {
    return(
      <Loop>
        <div className="container">
          <Player />
          <Enemy />
        </div>
      </Loop>
      
    )
  }
}

export default App;
