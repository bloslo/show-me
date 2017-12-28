import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

class DashboardCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="div-dashboard-cell">
          <div className="div-dashboard-video-holder">
            <div className="div-dashboard-video">
              <Link to="/SingleStream">
                <Player url="http://40.68.124.79:1776/hls/stream.m3u8" w={320} h={170} />
              </Link>
            </div>
            <div className="dashboard-description">
              <div className="dashboard-title">
                <span className="dashboard-title-font">
                        Our First Stream!
                </span>
                <br />
                <span className="dashboard-author-font">
                      NinjaCoders
                </span>
              </div>
              <div className="dashboard-streamer">
                <span className="dashboard-title-font">
                      1 Viewer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardCell;

