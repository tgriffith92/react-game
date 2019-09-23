import React, { Component } from 'react';

class AddPlayer extends Component {

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
               
                <h2>Player List</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handlePlayerInput}
                        name="name" placeholder="Username" />
                    <input type="text" onChange={this.handlePlayerInput}
                        name="score" placeholder="0"  readOnly/>

                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }

}

export default AddPlayer;