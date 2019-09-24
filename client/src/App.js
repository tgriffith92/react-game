import React, { Component } from 'react';
import Player from './components/Player';
import PlayerInfo from './components/PlayerInfo';
import GameData from './components/GameData';
import './App.css';

const sendNewPlayerToServer = (newPlayer) =>
  fetch('/api/players',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer)
    })
    .then(res => res.json())

const sendGameDataToServer = (newGame) =>
  fetch('/api/players',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame)
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
        {Number(player.score)}
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

  componentDidMount() {

    this.timerId = setInterval(() => this.onTick(), 5000)
  }

  state = {
    player: { name: "N/A", score: 0 },
    game: { color: 'Red', level: 3 }
  }

  addToScore = () => {
    let player = this.state.player

    player.score += 100;

    this.setState({ player })
  }

  onTick() {
    this.addToScore()
  }

  savePlayer = (newPlayer) => {
    sendNewPlayerToServer(newPlayer)
      .then(player => this.setState({ player }))
  }

  saveGame = (newGame) => {
    sendGameDataToServer(newGame)
      .then(game => this.setState({ game }))
  }

  render() {
    return (
      <div>
        <h1 className="title">Invaders of Space</h1>
        <div>
          <h2>Player</h2>
          {playerInfo(this.state.player)}
          <h2>Game Info</h2>
          {gameInfo(this.state.game)}
        </div>

        <PlayerInfo savePlayer={this.savePlayer} />
        <GameData saveGame={this.saveGame} />
        <div className="container">

          <Player />

        </div>
      </div>
    )
  }
}

export default App;
