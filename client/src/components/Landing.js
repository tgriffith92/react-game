import React, {Component} from 'react';

class Landing extends Component {

    render() {
        return (
            <div>
                <h1 className="container title">Invaders of Space</h1>
               
                <input type="text" name="name" placeholder="Username"/>

                <input type="submit" value="Submit"/>
            </div>
        )
    }

}

export default Landing;