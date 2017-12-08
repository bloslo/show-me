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
        <ReactPlayer
          url={this.props.url}
          controls={this.props.ctrl}
          width={this.props.w}
          height={this.props.h}
        />
      </div>
    );
  }
}
export default Player;

