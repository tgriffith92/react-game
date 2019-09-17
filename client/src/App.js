import React from 'react';
import { Loop, Stage } from 'react-game-kit';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loop>
        <Stage>
          <World>
            <Body>
              
            </Body>
          </World>
        </Stage>
      </Loop>  
    </div>
  );
}

export default App;
