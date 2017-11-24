import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Player from './Player';
import '../CSS/SingleStream.css';

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
        <div className="backgrounds">
          <div className="div-content">
            <div className="div-content-video">
              <div className="div-content-player">
                <div className="div-player">
                  <Player url="http://40.68.124.79:1776/hls/stream.m3u8" />
                </div>
              </div>
              <div className="div-content-description">
                <div className="div-title">
                  <span className="title">
                    Our First Stream!
                  </span>
                  <br />
                  <span className="streamer">
                  Ninja Coders
                  </span>
                </div>
                <div className="div-viewers">
                  <span className="streaming">
                    1 Viewer
                  </span>
                </div>
              </div>
            </div>
            <div className="div-content-chat">
              Chat
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStream;

