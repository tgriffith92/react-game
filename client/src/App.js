import React, { Component } from 'react';
import './App.css';

const renderPlayer = (player, handleKeyPress) => (
  <div 
    className="player"
    style={player.position}
  > 
  </div>
)

const renderEnemy = (enemy) => {

}

class App extends Component {

  state = {
    player: {
      position: {
        top: 0,
        left: 0,
      }
    }
  }

  movePlayer (dx, dy) {
    let player = {...this.state.player};

    player.position = {
      top:  dy+player.position.top,
      left: dx+player.position.left
    };

    this.setState({ player })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  speed = 30

  handleKeyPress = (evnt) => {
    console.log('foo', evnt.key)
    switch(evnt.key){
      case "ArrowLeft":
        this.movePlayer(-1*this.speed, 0)
        break;

      case "ArrowUp":
        this.movePlayer(0, -1*this.speed)
        break;

      case "ArrowRight":
        this.movePlayer(this.speed, 0)
        break;

      case "ArrowDown":
        this.movePlayer(0, this.speed)
        break;
    }
  }

  render() {

    return renderPlayer(this.state.player)
  }
}

export default App;
