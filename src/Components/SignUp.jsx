import React, {Component} from 'react';
import { firebaseApp } from '../firebase';
import {Link} from 'react-router';

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      //name: '', //For Later use with GraphQL.
      email: '',
      password: '',
      error: ''
    };
  }

  signUp() {
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
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
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div><Link to={'/signin'}>Sign In!</Link></div>
        <div>{this.state.error.message}</div>
      </div>

    )
  }
}

export default SignUp;
