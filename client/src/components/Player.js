import React, { Component } from 'react';

//set the position of the player, enemy, and missile
const renderPlayer = (player) => (
    <div
        className="player"
        style={player.position}
    >
    </div>

)

const renderEnemy = (enemy) => (
    <div
        className="enemy"
        style={enemy.position}>
    </div>
)

const multipleEnemies = (enemy) => {
    document.getElementsByClassName('enemy').innerHTML = ""
    for (let i = 0; i < enemy.length; i++) {
        document.getElementsByClassName('enemy').innerHTML +=
            `<div class='enemy' style='left:${enemy[i].left}px; 
        top:${enemy[i].top}px'></div>`
    }
}

// const renderEnemy = (enemy) => (
//     <div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//         <div
//             className="enemy"
//             style={enemy.position}
//         >
//         </div>
//     </div>
// )

const renderMissile = (missile) => (
    <div
        className="missile"
        style={missile}
    >
    </div>
)

const renderMany = (render) => (xs) => xs.map(render)

const renderMissiles = renderMany(renderMissile)

const makeNewMissile = (missiles, player) => {
    missiles.push({
        top: player.position.top,
        left: 30 + player.position.left
    })

    return missiles
}

class Player extends Component {
    //set the position of the player
    state = {
        player: {
            position: {
                top: 650,
                left: 350,
            }
        },
        missiles: [],

        enemy: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy2: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy3: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy4: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy5: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy6: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy7: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy8: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy9: {
            position: {
                top: 0,
                left: 0
            }
        },
        enemy10: {
            position: {
                top: 0,
                left: 0
            }
        }
    }

    movePlayer(dx, dy) {
        let player = { ...this.state.player };
        //move the player in the appropriate direction
        player.position = {
            top: dy + player.position.top,
            left: dx + player.position.left
        };

        this.setState({ player })
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        this.timerId = setInterval(() => this.onTick(), 100)
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerId)
    // }

    stopGame() {
        clearInterval(this.timerId)
    }

    playerSpeed = 30
    missleSpeed = 10
    enemySpeed = 5

    moveMissiles() {
        const missiles = this.state.missiles.map(({ top, left }) => ({ left, top: top - this.missleSpeed }))
        this.setState({ missiles })
        console.log(missiles)
    }

    moveEnemies() {
        const enemies = this.state.enemies.map(({ top, left }) => ({ left, top: top + this.enemySpeed }))
        this.setState({ enemies })
    }

    onTick() {
        this.moveMissiles()
    }

    // collision(enemy, missile) {
    //     return !(
    //         ((enemy.top + enemy.height) < missile.top) ||
    //         (enemy.top > (missile.top + missile.height)) ||
    //         ((enemy.left + enemy.width) < missile.left) ||
    //         (enemy.left > (missile.left + missile.width))
    //     )
    // }

    handleKeyPress = (evnt) => {
        //move the player in the proper direction by 30px
        switch (evnt.code) {
            case "ArrowLeft":
                this.movePlayer(-1 * this.playerSpeed, 0)
                break;

            case "ArrowUp":
                this.movePlayer(0, -1 * this.playerSpeed)
                break;

            case "ArrowRight":
                this.movePlayer(this.playerSpeed, 0)
                break;

            case "ArrowDown":
                this.movePlayer(0, this.playerSpeed)
                break;
            case "Space":
                this.setState({
                    missiles: makeNewMissile([...this.state.missiles], this.state.player)
                })
                break;
        }

    }

    render() {

        return (
            <>
                {renderPlayer(this.state.player)}
                {renderMissiles(this.state.missiles)}
                {renderEnemy(this.state.enemy)}
            </>
        )
    }
}

export default Player;