import React, { Component } from 'react';

const playerInfo = (player) => {
    return (
        <div>
            <h3>
                {player.name}
            </h3>
            <ul>
                <li>
                    {player.score}
                </li>
            </ul>
        </div>
    )
}

class PlayerList extends Component {

    state = {
        players: [],
        newPlayer: {
            name: '',
            score: 0
        }
    }

    componentDidMount() {
        this.getAllPlayers()
    }

    getAllPlayers = () => {
        fetch('/api/players')
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({ players: res })
            })
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

        this.savePlayer(this.state.newPlayer)
    }

    savePlayer = (newPlayer) =>
        fetch('/api/players',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPlayer)
            })

    render() {
        return (
            <div>

                <h1 className="title">Invaders of Space</h1>
                {this.state.players
                    .map(players => {
                        playerInfo(players)
                    })}
                <h2>Player List</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Username" />

                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }

}

export default PlayerList;