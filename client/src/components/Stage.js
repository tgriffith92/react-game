import React, {Component} from 'react';

//Set the canvas style
const canvasStyle = {
    width: 640,
    height: 800
}

//create a 2d canvas
const canvasContext = canvas.getContext('2d');


class Stage extends Component {

    canvasColor() {
        canvasContext.fillRect(0,0,100,100)
    }

    render() {
        return (
            //Give canvas the specified style
            <canvas style={canvasStyle}></canvas>
        )
    }

}

export default Stage;