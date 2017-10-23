import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>Hey <Link to="/signin">Sign in!</Link></div>
    );
  }
}

export default Welcome;
