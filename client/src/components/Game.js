import React, {Component} from 'react';

let gamePlayer;

const begin = () => {
    gameContainer.start()
    gamePlayer = new component(20, 20, 'green', 0, 0)
}

let game = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.interval = setInterval(updateGame, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

let component = (width, height, color, x, y) => {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = gameContainer.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

let updateGame = () => {
    game.clear();
    gamePlayer.update();
}

export default Game;