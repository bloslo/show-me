import React, {Component} from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      //name: '', //For Later use with GraphQL.
      email: '',
      password: ''
    };
  }

  signUp() {
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
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
      </div>
    )
  }
}

export default SignUp;
