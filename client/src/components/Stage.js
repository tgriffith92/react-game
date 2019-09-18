import React, {Component} from 'react';
import Player from './Player';

//Set the canvas style
const divStyle = {
    width: 1024,
    height: 576,
    background: 'black'
}

class Stage extends Component {

    render() {
        return (
            //Give canvas the specified style
            <div style={divStyle}>
                <Player />
            </div>
        )
    }

}

export default Stage;