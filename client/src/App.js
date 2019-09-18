import React, {Component} from 'react';
import Loop from './components/Loop';
import Player from './components/Player'

class App extends Component {

  render() {
    return (
      <div>
        
         <Loop />
        <Player />
      </div>
      
    );
  }
}

export default App;
