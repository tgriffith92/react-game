import React, { Component } from 'react';
import Player from './components/Player';
import GameData from './components/GameData';
import './App.css';

const getGameById = (gameId) => {
  fetch(`/api/players/${gameId}`)
  .then(res => res.json())
  .catch(() => [])
}

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

const gameInfo = (game) => {
  return (
    <h3>
      {game.color} -
      {game.level}
    </h3>
  )
}

class App extends Component {

  state = {
    player: { name: "N/A", score: 0 },
    game: {color: 'black', level: 3}
  }

  savePlayer = (newPlayer) => {
    sendNewPlayerToServer(newPlayer)
      .then(player => this.setState({ player }))
  }

  render() {
    return (
      <div>
        <h1 className="title">Invaders of Space</h1>
        <h2>Player</h2>
        {playerInfo(this.state.player)}
        <h2>Game level</h2>
        {gameInfo(this.state.game)}
        <GameData savePlayer={this.savePlayer} />
        <div className="container">

          <Player />

        </div>
      </div>
    )
  }
}

export default App;
