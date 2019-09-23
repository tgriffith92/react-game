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
    <div className="enemyContainer">
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
        <div
            className="enemy"
            style={enemy[6].position}
        >
        </div>
        <div
            className="enemy"
            style={enemy[7].position}
        >
        </div>
        <div
            className="enemy"
            style={enemy[8].position}
        >
        </div>
        <div
            className="enemy"
            style={enemy[9].position}
        >
        </div>
        <div
            className="enemy"
            style={enemy[10].position}
        >
        </div>
        <div
            className="enemy"
            style={enemy[11].position}
        >
        </div>
    </div>
)

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

// const collisionDetection = () => {

//    for(let collision = 0; collision < enemy.length; collision++) {
//     for(let missile = 0; missile < missiles.length; missile++) {
//         if(
//             missiles[missile].left >= collision[enemy].left &&
//             missiles[missile].left <= collision[enemy]
//         ) {

//         }
//     }
//    }
// return !(
//     ((enemy.top + enemy.height) < missile.top) ||
//     (enemy.top > (missile.top + missile.height)) ||
//     ((enemy.left + enemy.width) < missile.left) ||
//     (enemy.left > (missile.left + missile.width))
// )
// }

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

        enemy: [
            {
                position: {
                    top: 50,
                    left: 100
                }
            },
            {
                position: {
                    top: 50,
                    left: 200
                }
            },
            {
                position: {
                    top: 50,
                    left: 300
                }
            },
            {
                position: {
                    top: 50,
                    left: 400
                }
            },
            {
                position: {
                    top: 50,
                    left: 500
                }
            },
            {
                position: {
                    top: 50,
                    left: 600
                }
            },
            {
                position: {
                    top: 150,
                    left: 100
                }
            },
            {
                position: {
                    top: 150,
                    left: 200
                }
            },
            {
                position: {
                    top: 150,
                    left: 300
                }
            },
            {
                position: {
                    top: 150,
                    left: 400
                }
            },
            {
                position: {
                    top: 150,
                    left: 500
                }
            },
            {
                position: {
                    top: 150,
                    left: 600
                }
            }
        ]
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

    // moveEnemies() {
    //     let enemy = { ...this.state.enemy }
    //     // for (let i = 0; i < enemy.length; i++) {
    //     //     enemy[i].position = {
    //     //         top: 5 + enemy[i].position.top 
    //     //     }
    //     // }

        

    //     this.setState({ enemy })
    // }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
        this.timerId = setInterval(() => this.onTick(), 100)
    }

    getAllPlayers = () =>
        fetch('/api/players')
            .then(res => res.json())

    savePlayer = (newPlayer) =>
        fetch('/api/players',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPlayer)
            })

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
    }

    moveEnemies() {
        const enemy = this.state.enemy.map(({ top, left }) => ({ left, top: top + this.enemySpeed }))
        this.setState({ enemy })
        console.log(enemy)
    }

    onTick() {
        this.moveEnemies()
    }

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