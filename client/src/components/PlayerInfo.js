import React, { Component } from 'react';


class PlayerInfo extends Component {

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

    handleSubmit = (evnt) => {
        evnt.preventDefault();

        this.props.savePlayer(this.state.newPlayer)
    }

    render() {
        return (
            <div className="gameData">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handlePlayerInput}
                        name="name" placeholder="Username" />
                    <input type="text" onChange={this.handlePlayerInput}
                        name="score" placeholder="0" readOnly />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default PlayerInfo;