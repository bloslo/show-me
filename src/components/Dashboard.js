import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Player from './Player';
import '../CSS/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="background-dashboard">
          <div className="div-dashboard-nav">
            Navigation
          </div>
          <div className="div-dashboard-content">
            <div className="div-dashboard-row">
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
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=UKvnoCmGdEY" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      3am in Jakarta
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Dean Narendra
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      2 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      Chilled Serenity
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Coen Stange
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      5 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=cPE9nfdasSs" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      Pink Room
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Tao Hua
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
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=i6dQU5_dKN0" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                        Tara Basro
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Nikola Chobanov
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      7 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Kb24RrHIbFk" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      1-800-273-8255
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Bilger Yahov
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      3 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=8R7M1KB0kJQ" width={320} height={170} ctrl={false} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      021
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Ariel Nayaka
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
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Kp7eSUU9oy8" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      Redbone
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Childish Gambino
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      3 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-dashboard-row">
              <div className="div-dashboard-video-holder">
                <div className="div-dashboard-video">
                  <ReactPlayer url="https://www.youtube.com/watch?v=adDD43CvrUc" width={320} height={170} />
                </div>
                <div className="dashboard-description">
                  <div className="dashboard-title">
                    <span className="dashboard-title-font">
                      Glow Like That
                    </span>
                    <br />
                    <span className="dashboard-author-font">
                      Rich Chigga
                    </span>
                  </div>
                  <div className="dashboard-streamer">
                    <span className="dashboard-title-font">
                      13 Viewer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
