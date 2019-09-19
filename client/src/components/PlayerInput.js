import React, {Component} from 'react';


//Set keycodes
const KEY = {
    LEFT: 37,
    RIGHT: 39,
    A: 65,
    D: 68,
    SPACE: 32,
    ENTER: 13
}

class PlayerInput extends Component {
    constructor(props){
        super(props);
        this.pressed = { left: 0, right: 0, space: 0, enter: 0 }
    }

    bindKeys() {
        window.addEventListener('keyup', this.handleKeys.bind(this.false))
        window.addEventListener('keydown', this.handleKeys.bind(this.true))
    }

    unbindKeys() {
        window.removeEventListener('keyup', this.handleKeys)
        window.removeEventListener('keydown', this.handleKeys)
    }

    handleKeys(value, evnt){
        let keys = this.pressed;
        switch(evnt.keyCode) {
            case KEY.LEFT:
            case KEY.A:
                keys.left = value;
                break;
            case KEY.RIGHT:
            case KEY.D:
                keys.right = value;
                break;
            case KEY.SPACE:
                keys.space = value;
                break;
            case KEY.ENTER:
                keys.enter = value;   
                break; 
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}

export default PlayerInput;