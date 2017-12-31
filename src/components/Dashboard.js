import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CSS/Dashboard.css';
import DashboardCell from './DashboardCell';
import { sendMessage } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    setTimeout(() => this.props.getStreamersList(), 500);
  }

  render() {
    return (
      <div>
        <div className="background-dashboard">
          <div className="div-dashboard-nav">
            Navigation
          </div>
          <div className="div-dashboard-content">
            <DashboardCell />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  getStreamersList: () => {
    dispatch(sendMessage('getStreamers', null));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
