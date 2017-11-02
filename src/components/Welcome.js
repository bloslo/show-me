import React, { Component } from 'react';
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
        <div>
          Hey <Link to="/signin">Sign in!</Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
