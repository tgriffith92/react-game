import React, { Component } from 'react';


class PlayerList extends Component {

    state = {
        newPlayer: {
            name: '',
            score: 0
        }
    }

    handlePlayerInput = (evnt) => {
        //copy from state
        let newPlayer = { ...this.state.newPlayer }

        //modify state
        newPlayer[evnt.target.name] = evnt.target.value

        //set state
        this.setState({ newPlayer })
    }

    handleGameInput = (evnt) => {
        //copy from state
        let newGame = { ...this.state.newGame }

        //modify state
        newGame[evnt.target.name] = evnt.target.value

        //set state
        this.setState({ newGame })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.savePlayer(this.state.newPlayer)
    }

    handleGameSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.saveGame(this.state.newGame)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handlePlayerInput}
                        name="name" placeholder="Username" />
                    <input type="text" onChange={this.handlePlayerInput}
                        name="score" placeholder="0" readOnly />

                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.handleGame}>
                    <input type="text" onChange={this.handleGameInput}
                        name="name" placeholder="Username" />
                    <input type="text" onChange={this.handleGameInput}
                        name="score" placeholder="0" readOnly />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default PlayerList;