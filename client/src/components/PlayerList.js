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
        players: []
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

                <h1>Player List</h1>
                {this.state.players
                    .map(players => {
                        playerInfo(players)
                    })}
                {/* <h1 className="container title">Invaders of Space</h1>

                <input type="text" name="name" placeholder="Username" />

                <input type="submit" value="Submit" /> */}
            </div>
        )
    }

}

export default PlayerList;