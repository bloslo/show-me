import React, { Component } from 'react';
import Player from './Player';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          Dashboard
        </div>
        <div className="col-md-4">
          <Player url="http://40.68.124.79:1776/hls/stream.m3u8" />
        </div>
        <div className="col-md-4">
          Test
        </div>
        <div className="col-md-4">
          Test
        </div>
      </div>
    );
  }
}

export default Dashboard;
