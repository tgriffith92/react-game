import React, {Component} from 'react';

//Set the canvas style
const canvasStyle = {
    width: 1024,
    height: 576,
    background: 'black'
}

class Stage extends Component {

    render() {
        return (
            //Give canvas the specified style
            <canvas style={canvasStyle}></canvas>
        )
    }

}

export default Stage;