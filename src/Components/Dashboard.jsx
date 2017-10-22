import React, { Component } from 'react';

import { firebaseApp } from '../firebase';

class Dashboard extends Component {
  signOut() {
    firebaseApp.auth().signOut();
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
