import React, {Component} from 'react';

//Set the canvas style
const canvasStyle = {
    width: 3200,
    height: 400,
    background: 'black'
}

class Stage extends Component {

    render() {
        return (
            //Give canvas the specified style
            <canvas ref="canvas" style={canvasStyle}></canvas>
        )
    }

}

export default Stage;