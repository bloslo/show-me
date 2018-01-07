import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendMessage } from '../actions';
import Map from './Map';
import Player from './Player';
import '../CSS/SingleStream.css';

class Stream extends Component {
  constructor(props) {
    super(props);
    if (!this.props.loggedIn) {
      this.props.history.replace('/signin');
    }
    this.state = {
      streamer: '',
      message: '',
    };
    this.props.joinRoom(this.props.match.params.uuid);
    const currentStreamer =
      this.props.streams.find(streamer => streamer.uuid === this.props.match.params.uuid);
    if (currentStreamer) {
      this.state = { ...this.state, streamer: currentStreamer.username };
    }
  }

  render() {
    const isSubscribed = this.props.subscribed.some(x => x.username === this.state.streamer)
      || this.state.streamer === this.props.username;

    const renderStream = (
      <div>
        <div className="backgrounds">
          <div className="div-content">
            <div className="div-content-video">
              <div className="div-content-player">
                <div className="div-player">
                  <Player url={`http://showmedocker.zapto.org:1776/hls/${this.props.match.params.uuid}.m3u8`} w={640} h={340} ctrl />
                </div>
              </div>
              <div className="div-content-description">
                <div className="div-title">
                  <span className="title">
                  Our First Stream!
                  </span>
                  <br />
                  <span className="streamer">
                    {this.state.streamer}
                  </span>
                </div>
                <div className="div-viewers">
                  <span className="streaming">
                  1 Viewer
                  <div>
                    <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input type="hidden" name="hosted_button_id" value="Y9PZVSAX79PNN" />
                      <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                      <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="div-content-chat">
              <div>
                {this.props.chatMsg.map((msg, index) => (
                <div className="message" key={index}>{msg.user}: {msg.msg}</div> // eslint-disable-line
              ))}
              </div>
              <div>
                <form>
                  <input
                    autoComplete="off"
                    onChange={event => this.setState({ message: event.target.value })}
                  />
                  <button onClick={() => this.props.sendChatMsg(this.state.message)}>Send</button>
                </form>
              </div>
              <Map lat={this.props.lat} long={this.props.long} />
            </div>
          </div>
        </div>
      </div>);

    const renderPay = (
      <div>
        <h3>Get subscribed!</h3>
        <p>Subscribe now and enjoy the great content from {this.state.streamer}.</p>
        <button
          className="btn btn-default"
          type="button"
          onClick={
            () => this.props.pay(this.state.streamer)}
        >
          Pay
        </button>
      </div>);

    return (
      <div>
        <div className="nav">
          <Link to="/dashboard">
            <button type="button" className="btn btn-warning">Dashboard</button>
          </Link>
        </div>
        { isSubscribed ? renderStream : renderPay }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lat: state.stream.location.lat,
  long: state.stream.location.long,
  chatMsg: state.chat.chatMsg,
  loggedIn: state.user.loggedIn,
  streams: state.streamlist.streams,
  subscribed: state.streamlist.subscribed,
  username: state.user.username,
});

const mapDispatchToProps = dispatch => ({
  joinRoom: (uuid) => {
    dispatch(sendMessage('joinRoom', uuid));
  },
  sendChatMsg: (msg) => {
    dispatch(sendMessage('chatMessage', msg));
  },
  pay: (subscribeTo) => {
    dispatch(sendMessage('pay', { subscribeTo }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
