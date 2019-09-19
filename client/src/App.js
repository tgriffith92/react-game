import React, {Component} from 'react';
import Landing from './components/Landing';
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
         gameState: game.start
       }
  }

  update() {
    const keys = this.state.input.pressed;

    if(this.state.gameState === game.start && keys.enter) {
      this.start();
    }

    requestAnimationFrame(()=> {this.update()});
  }

  start(){
    this.setState({
      gameState: game.play
    })
  }

  componentDidMount() {
    this.state.input.bindKeys();
    requestAnimationFrame(()=> {this.update()});
  }

  componentWillUnmount() {
    this.state.input.unbindKeys();
  }

  render() {
    return (
      <div>
        { this.state.gameState === game.start && <Landing />}
        
        <canvas ref="canvas" 
          width={this.state.screen.width * this.state.screen.ratio} 
          height={this.state.screen.height * this.state.screen.ratio}>

        </canvas>
      </div>
      
    );
  }
}

export default App;
