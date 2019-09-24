import React, { Component } from 'react';


class GameData extends Component {

    state = {
        newGame: {
            color: '',
            level: 1
        }
    }

    handleGameInput = (evnt) => {
        //copy from state
        let newGame = { ...this.state.newGame }

        //modify state
        newGame[evnt.target.color] = evnt.target.value

        //set state
        this.setState({ newGame })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.saveGame(this.state.newGame)
    }

    render() {
        return (
            <div className="gameData">
                <form onSubmit={this.handleSubmit}>

                    <input type="text" onChange={this.handleGameInput}
                        name="color" placeholder="red" />
                    <input type="text" onChange={this.handleGameInput}
                        name="level" placeholder="3" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default GameData;