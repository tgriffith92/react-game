import React, {Component} from 'react';

const renderPlayer = (player) => (
  <div 
    className="player"
    style={player.position}
  > 
  </div>
)

class Enemy extends Component {

  state = {
    player: {
      position: {
        top: 0,
        left: 0,
      }
    }
  }


  render() {

    return renderPlayer(this.state.player)
  }
}

export default Enemy;