import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Player extends Component {
  render() {
    return (
      <ReactPlayer url={this.props.url} />
    )
  }
}

export default Player;
