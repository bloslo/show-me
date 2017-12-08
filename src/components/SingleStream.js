import React, { Component } from 'react';
import Map from 'react-cartographer/lib/components/Map';
import { connect } from 'react-redux';
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
              <Map
                provider="bing"
                providerKey="Amj7pSZWD5oZnNFwW-texm2udFXbwW--DheMlmgbdUUxgh0zJtLQ8X6iGfe4c0bS"
                mapId="bing_map"
                latitude={this.props.lat}
                longitude={this.props.long}
                zoom={17}
                height={270}
                width={580}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lat: state.stream.location.lat,
  long: state.stream.location.long,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStream);
