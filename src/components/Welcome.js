import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';
import '../CSS/Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="background">
          <div className="nav">
            <div className="navright">
              <Link to="/signin">
                <button type="button" className="btn btn-warning btnsignin">Sign In</button>
              </Link>
            </div>
          </div>
          <div className="maintext">
            <Typist className="fonttyping">
              <span className="font1">Are You a</span>
              <span className="font2"> Traveller?</span>
              <Typist.Backspace count={10} delay={1000} />
              <span className="font2"> Backpacker?</span>
              <Typist.Backspace count={11} delay={1000} />
              <span className="font2"> Photographer?</span>
              <Typist.Backspace count={13} delay={1000} />
              <span className="font2"> Sky Diver?</span>
              <Typist.Backspace count={10} delay={1000} />
              <span className="font2"> Parkour?</span>
              <Typist.Backspace count={8} delay={1000} />
              <span className="font2"> Climber?</span>
            </Typist>
            <span className="font3">Share Your Experience with People!</span>
            <br /><br />
            <Link to="/signup">
              <button type="button" className="btn btn-warning btn-lg">Share Now!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
