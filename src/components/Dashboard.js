import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CSS/Dashboard.css';
import DashboardCell from './DashboardCell';
import { sendMessage } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    if (!this.props.loggedIn) {
      this.props.history.replace('/signin');
    }
    this.state = {
    };
    this.props.getStreamersList();
  }

  render() {
    return (
      <div>
        <div className="background-dashboard">
          <div className="div-dashboard-nav">
            Navigation
          </div>
          <div className="div-dashboard-content">
            <h2>Online</h2>
            <div>
              {
                this.props.streams.map(x => (<DashboardCell key={x.uuid} stream={x} />))
              }
            </div>
            <br style={{ clear: 'both' }} />
            <h2>Subscribed</h2>
            <div>
              {
                this.props.subscribed
                  .map(x => this.props.streams.find(y => y.username === x.username) || { username: x.username, uuid: '' })
                  .map(x => (<DashboardCell key={x.uuid} stream={x} />))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: state.streamlist.streams,
  subscribed: state.streamlist.subscribed,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  getStreamersList: () => {
    dispatch(sendMessage('getStreamers', null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
