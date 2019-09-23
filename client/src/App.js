import React, { Component } from 'react';
import Player from './components/Player';
import PlayerList from './components/PlayerList';
import './App.css';



const sendNewPlayerToServer = (newPlayer) =>
  fetch('/api/players',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer)
    })
    .then(res => res.json())

const getAllPlayers = () => {
  fetch('/api/players')
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      this.setState({ players: res })
    })
}

const playerInfo = (player) => {
  return (
      <h3>
        {player.name} - 
        {player.score}
    </h3>
  )
}

class App extends Component {

  state = {
    player: { name: "N/A", score: 0 }
  }

  savePlayer = (newPlayer) => {
    sendNewPlayerToServer(newPlayer)
      .then(player => this.setState({ player }))
  }

  render() {
    return (
      <div>
        <h1 className="title">Invaders of Space</h1>
        {playerInfo(this.state.player)}
        <PlayerList savePlayer={this.savePlayer} />
        <div className="container">

          <Player />

        </div>
      </div>
    )
  }
}

export default App;
