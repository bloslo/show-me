import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendMessage } from '../actions';
import '../CSS/SignIn.css';

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
      <div>
        <div className="background">
          <div className="navright">
            <Link to="/signup">
              <button type="button" className="btn btn-warning btn-signup">Sign Up</button>
            </Link>
          </div>
          <div className="formholder">
            <div className="form-inline">
              <div className="input-group" style={{ marginBottom: '15px' }}>
                <input
                  className="form-control input-textbox input-lg"
                  type="text"
                  placeholder="Username"
                  onChange={event => this.setState({ username: event.target.value })}
                />
              </div>
              <br />
              <div className="input-group" style={{ marginBottom: '25px' }}>
                {/*
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock" />
                </span>
                */}
                <input
                  className="form-control input-textbox input-lg"
                  type="password"
                  placeholder="Password"
                  onChange={event => this.setState({ password: event.target.value })}
                />
              </div>
              <br />
              <button
                className="btn btn-warning btn-lg btn-signin"
                type="button"
                onClick={
                () => this.props.signIn(this.state.username, this.state.password)}
                style={{ marginBottom: '15px' }}
              >
              Sign In
              </button>

              <div className={this.props.error === '' ? '' : 'alert alert-danger'}>{this.props.error}</div>
            </div>
          </div>
        </div>
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
