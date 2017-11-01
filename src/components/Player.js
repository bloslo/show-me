import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ReactPlayer url={this.props.url} controls height="360" width="640" />
    );
  }
}
export default Player;

