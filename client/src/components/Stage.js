import React, {Component} from 'react';

//Set the canvas style
const canvasStyle = {
    width: 640,
    height: 800
}




class Stage extends Component {

    componentDidMount() {
        //create a 2d canvas
        const ctx = canvas.getContext('2d');
        ctx.fillRect(0,0,100,100);
    }

    render() {
        return (
            //Give canvas the specified style
            <canvas ref="canvas" style={canvasStyle}></canvas>
        )
    }

}

export default Stage;