import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './Auth.css';

class Login extends Component {

  state = {
    email: '',
    email_touched: false,
    email_valid: false,

    password: '',
    password_touched: false,
    password_valid: false, 
  }

  componentWillMount() {
    this.props.onRemoveError();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const valid = this.isValid(name, event.target.value)

    this.setState({
      [name]: event.target.value,
      [(name + '_touched')]: true,
      [(name + '_valid')]: valid
    })
  }

  isValid = (name, value) => {
    let valid = false;

    if        (name === 'email') {
      const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      valid = pattern.test(value)
    } else if (name ==='password') {
        valid = value.length >= 6;
    }

    return valid
  }

  isDisabled = () => {
    return !(this.state.email_valid && 
             this.state.password_valid)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onLogIn(this.state.email, this.state.password)
  }

  render() {
    const disabled = this.isDisabled();
    
    return (
      <div className="sign">

        {this.props.error && <div className="error-sign">{this.props.error}</div>}

        <h4>Sign in</h4>
        <form onSubmit={this.onSubmit}>
          <input className={!this.state.email_valid && this.state.email_touched ? 'invalid-input' : ''} 
                 onChange={this.handleChange} 
                 name="email" 
                 type="email" 
                 value={this.state.email} 
                 placeholder="Email" />

          <input className={!this.state.password_valid && this.state.password_touched ? 'invalid-input' : ''} 
                 onChange={this.handleChange} 
                 name="password" 
                 type="password" 
                 value={this.state.password} 
                 placeholder="Password" />

          <button className={disabled ? 'btn-disabled' : ''} disabled={disabled}>Sign in</button>
        </form>

        <Link to='/signup'>Don't have an account? Sign up</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (email, password) => dispatch(actions.logIn(email, password)),
    onRemoveError: () => dispatch(actions.removeError())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));