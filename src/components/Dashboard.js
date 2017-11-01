import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          <Link to="/SingleStream">Watch Now!</Link>
        </div>
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          Test
        </div>
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          Test
        </div>
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          Test
        </div>
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          Test
        </div>
        <div className="col-md-4" style={{ marginBottom: '10px', align: 'center', border: '3px solid green' }}>
          Test
        </div>
      </div>
    );
  }
}

export default Dashboard;
