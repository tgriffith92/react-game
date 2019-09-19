import React, {Component} from 'react';
import Loop from './components/Loop';
import './App.css';

const width = 800;
const height = window.innerHeight;
const ratio = window.devicePixelRatio || 1;

class App extends Component {

  state = {
    screen: {
      width: width,
      height: height,
      ratio: ratio
    }
  }

  render() {
    return (
      <div className="App">
        <Loop />
        <canvas ref="canvas" 
          width={this.state.screen.width * this.state.screen.ratio} 
          height={this.state.screen.height * this.state.screen.ratio}>

        </canvas>
      </div>
      
    );
  }
}

export default App;
