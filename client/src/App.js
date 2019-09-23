import React, { Component } from 'react';
import Player from './components/Player';
import PlayerList from './components/PlayerList';
import './App.css';




class App extends Component {

  render() {
    return(
        <div className="container">
          <Player />
          <div className="score"></div>
        </div>
      
    )
  }
}

export default App;
