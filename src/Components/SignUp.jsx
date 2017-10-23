import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { sendMessage } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="form-inline" style={{ margin: '5%' }}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            style={{ marginRight: '5px' }}
            onChange={event => this.setState({ username: event.target.value })}
          />
          <input
            className="form-control"
            type="text"
            placeholder="E-Mail"
            style={{ marginRight: '5px' }}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            style={{ marginRight: '5px' }}
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={
              () => this.props.signUp(this.state.username, this.state.email, this.state.password)}
          >
            Sign Up
          </button>
        </div>
        <div><Link to="/signin">Sign In!</Link></div>
        <div className={this.props.error === '' ? '' : 'alert alert-info'}>{this.props.error}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.registerError,
});

const mapDispatchToProps = dispatch => ({
  signUp: (name, email, pass) => {
    dispatch(sendMessage('register', { name, email, pass }));
  },
});

export default connect(mapStateToProps,
  mapDispatchToProps)(SignUp);
