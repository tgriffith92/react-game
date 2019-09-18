import React, {Component} from 'react';
import Game from './components/Game';

class App extends Component {

  render() {
    return (
      <div>
        <Loop>
          <Game />
        </Loop>
      </div>
      
    );
  }
}

export default App;
