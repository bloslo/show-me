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
      <div>
        Single Stream
      <ReactPlayer url={this.props.url} controls />
      </div>
    );
  }
}
export default Player;

