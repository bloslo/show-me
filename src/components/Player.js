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
        <ReactPlayer url={this.props.url} controls width={640} height={340} />
      </div>
    );
  }
}
export default Player;

