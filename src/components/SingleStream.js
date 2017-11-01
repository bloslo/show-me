import React, { Component } from 'react';
import Player from './Player';

class SingleStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <Player url="http://40.68.124.79:1776/hls/stream.m3u8" />
      </div>
    );
  }
}

export default SingleStream;

