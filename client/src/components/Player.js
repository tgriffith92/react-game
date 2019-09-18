import React, {Component} from 'react';

const canvas = document.getElementById('screen');

let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0,0, 20, 20);

class Player extends Component {
    render() {
        return (
            <div>
        
            </div>
        )
    }
}

export default Player;