import React, { Component } from 'react';


class Dashboard extends Component {
  signOut() {
    this.a = 1;
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default Dashboard;
