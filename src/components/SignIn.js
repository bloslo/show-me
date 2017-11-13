import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { sendMessage } from '../actions';

const styles = {
  formInline: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="form-inline" style={styles.formInline}>
        <h2>Sign In</h2>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-user" />
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            onChange={event => this.setState({ username: event.target.value })}
          />
        </div>
        <br />
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock" />
          </span>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="button"
          onClick={
              () => this.props.signIn(this.state.username, this.state.password)}
          style={{ marginBottom: '10px' }}
        >
          Sign In
        </button>

        <div><Link to="/signup">Register Now!</Link></div>

        <div className={this.props.error === '' ? '' : 'alert alert-info'}>{this.props.error}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.user.loginError,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  signIn: (name, pass) => {
    dispatch(sendMessage('login', { name, pass }));
  },
});

export default connect(mapStateToProps,
  mapDispatchToProps)(SignIn);
