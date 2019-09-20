import React, {Component} from 'react';

const renderPlayer = (player,missile) => (
    <div>
        <div 
      className="player"
      style={player.position}
    > 
    </div>
    <div 
      className="missile"
      style={missile.position}
    > 
        
    </div>
    </div>
    
  )
  


  class Player extends Component {
  //set the position of the player
    state = {
      player: {
        position: {
          top: 650,
          left: 350,
        }
      },
      missiles: [],
      missile: {
        position: {
            top: 500,
            left: 500,
          }
      }
    }
  
    movePlayer (dx, dy) {
      let player = {...this.state.player};
  //move the player in the appropriate direction
      player.position = {
        top:  dy+player.position.top,
        left: dx+player.position.left
      };
  
      this.setState({ player })
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress)
    }
  
    

    speed = 30
  
    handleKeyPress = (evnt) => {
      //move the player in the proper direction by 30px
        switch(evnt.code){
            case "ArrowLeft":
              this.movePlayer(-1*this.speed, 0)
              break;
      
            case "ArrowUp":
              this.movePlayer(0, -1*this.speed)
              break;
      
            case "ArrowRight":
              this.movePlayer(this.speed, 0)
              break;
      
            case "ArrowDown":
              this.movePlayer(0, this.speed)
              break;
            case "Space":
                this.state.missiles.push({
                    top:  this.state.player.position.top,
                    left: 30+this.state.player.position.left
                })
                console.log("Shooting", this.state.missiles)
              break;
          }
    

    }
  
    render() {
  
      return (
          renderPlayer(this.state.player, this.state.missile)
          
      )
    }
  }

export default Player;