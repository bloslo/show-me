import React, {Component} from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn() {
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="E-Mail"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div><Link to={'/signup'}> Sign up!</Link></div>
      </div>
    )
  }
}

export default SignIn;
