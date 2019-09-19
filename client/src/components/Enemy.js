import React, {Component} from 'react';

const renderEnemy = (enemy) => (
  <div 
    className="enemy"
    style={enemy.position}
  > 
  </div>
)

class Enemy extends Component {

  state = {
    enemy: {
      position: {
        top: 0,
        left: 0,
      }
    }
  }


  render() {

    return renderEnemy(this.state.enemy)
  }
}

export default Enemy;