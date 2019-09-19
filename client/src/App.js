import React, {Component} from 'react';
import Loop from './components/Loop';
import PlayerInput from './components/PlayerInput';
import './App.css';

const width = 800;
const height = window.innerHeight;
const ratio = window.devicePixelRatio || 1;

const game = {
  start: 0,
  play: 1,
  end: 2
}

class App extends Component {

  constructor() {
    super(); 
      this.state = {
        input: new PlayerInput(), 
         screen: {
           width: width,
           height: height,
           ratio: ratio
         },
         game: game.start
       }
  }

  componentDidMount() {
    this.state.input.bindKeys();
  }

  componentWillUnmount() {
    this.state.input.unbindKeys();
  }

  render() {
    return (
      <div>
        { this.state.game === game.start && <Loop />}
        
        <canvas ref="canvas" 
          width={this.state.screen.width * this.state.screen.ratio} 
          height={this.state.screen.height * this.state.screen.ratio}>

        </canvas>
      </div>
      
    );
  }
}

export default App;
