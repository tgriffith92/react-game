import React, { Component } from 'react';

const renderEnemy = (enemy) => (
  <div>
    <div
      className="enemy"
      style={enemy[0].position}
    >
    </div>
    <div
      className="enemy"
      style={enemy[1].position}
    >
    </div>
    <div
      className="enemy"
      style={enemy[2].position}
    >
    </div>
    <div
      className="enemy"
      style={enemy[3].position}
    >
    </div>
    <div
      className="enemy"
      style={enemy[4].position}
    >
    </div>
    <div
      className="enemy"
      style={enemy[5].position}
    >
    </div>
  </div>


)

class Enemy extends Component {

  state = {
    enemy: [
      {
        position: {
          top: 0,
          left: 100
        }
      },
      {
        position: {
          top: 0,
          left: 200
        }
      },
      {
        position: {
          top: 0,
          left: 300
        }
      },
      {
        position: {
          top: 0,
          left: 400
        }
      },
      {
        position: {
          top: 0,
          left: 500
        }
      },
      {
        position: {
          top: 0,
          left: 600
        }
      }
    ]
  }

  enemySpeed = 5;

  moveEnemies() {
    const enemy = this.state.enemy.map(({top, left}) => ({left, top: top+this.enemySpeed}))
    this.setState({enemy})
}

  render() {

    return renderEnemy(this.state.enemy)
  }
}

export default Enemy;