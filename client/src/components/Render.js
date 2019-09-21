import React, { PureComponent } from 'react';

class Finger extends PureComponent {
    render() {
        const x = this.props.position[0] - RADIUS / 2;
        const y = this.props.position[1] - RADIUS / 2;
        return(
            <div style={{position: "absolute", width: 20, height: 20,
                        backgroundColor: "red", left: x, top: y}}>

            </div>
        )
    }
}

export { Finger };