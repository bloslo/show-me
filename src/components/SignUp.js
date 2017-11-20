import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendMessage } from '../actions';
import '../CSS/SignUp.css';

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
      <div>
        <div className="background">
          <div className="navright">
            <Link to="/signin">
              <button type="button" className="btn btn-warning btn-signup">Sign In</button>
            </Link>
          </div>
          <div className="formholder">
            <div className="form-inline">
              <div className="input-group" style={{ marginBottom: '15px' }}>
                <input
                  className="form-control input-textbox input-lg"
                  type="text"
                  placeholder="Username"
                  style={{ marginBottom: '15px' }}
                  onChange={event => this.setState({ username: event.target.value })}
                />
                <input
                  className="form-control input-textbox input-lg"
                  type="text"
                  placeholder="E-Mail"
                  style={{ marginBottom: '15px' }}
                  onChange={event => this.setState({ email: event.target.value })}
                />
                <input
                  className="form-control input-textbox input-lg"
                  type="password"
                  placeholder="Password"
                  style={{ marginBottom: '25px' }}
                  onChange={event => this.setState({ password: event.target.value })}
                />
                <button
                  className="btn btn-warning btn-lg btn-signin"
                  type="button"
                  style={{ marginBottom: '15px' }}
                  onClick={
              () => this.props.signUp(this.state.username, this.state.email, this.state.password)}
                >
            Sign Up
                </button>
              </div>
              <div className={this.props.error === '' ? '' : 'alert alert-info'}>{this.props.error}</div>
            </div>
          </div>
        </div>
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
