import React, { Component } from 'react';


//set the position of the player and missile
const renderPlayer = (player) => (
    <div>
        <div
            className="player"
            style={player.position}
        >
        </div>
        {/* <div 
            className="missile"
            style={missile.position}
        > 
            
        </div> */}
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
        //   missile: {
        //     position: {
        //         top: 500,
        //         left: 500,
        //       }
        //   }
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
    }

    

    shootMissiles = () => {
        
    }

    speed = 30

    handleKeyPress = (evnt) => {
        //move the player in the proper direction by 30px
        switch (evnt.code) {
            case "ArrowLeft":
                this.movePlayer(-1 * this.speed, 0)
                break;

            case "ArrowUp":
                this.movePlayer(0, -1 * this.speed)
                break;

            case "ArrowRight":
                this.movePlayer(this.speed, 0)
                break;

            case "ArrowDown":
                this.movePlayer(0, this.speed)
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
            </>
        )
    }
}

export default Player;