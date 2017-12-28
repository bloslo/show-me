import React, { Component } from 'react';
import '../CSS/Dashboard.css';
import DashboardCell from './DashboardCell';

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
            <DashboardCell />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
