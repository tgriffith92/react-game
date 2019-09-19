import React, {Component} from 'react';


const playerMissile = (missile) => (
    <div 
      className="missile"
      style={missile.position}
    > 
    </div>
  )
  
  class PlayerMissile extends Component {
  
    state = {
      missile: {
        position: {
          top: 500,
          left: 500,
        }
      }
    }
  
  
    render() {
  
      return playerMissile(this.state.missile)
    }
  }

export default PlayerMissile;