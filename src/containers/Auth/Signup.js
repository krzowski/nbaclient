import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Auth.css';
import * as actions from '../../store/actions/index';

class Signup extends Component {

  state = {
    email: '',
    email_touched: false,
    email_valid: false,

    password: '',
    password_touched: false,
    password_valid: false,

    password_confirmation: '',
    password_confirmation_touched: false,
    password_confirmation_valid: false
  }

  componentDidMount() {
    this.props.onRemoveError();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const valid = this.isValid(name, event.target.value)

    // check if password_confirmation is correct if password value changes
    if (name === 'password') {
      const confirmationValid = this.isValid('password_confirmation', this.state.password_confirmation, event.target.value);
      this.setState({
        [name]: event.target.value,
        [(name + '_touched')]: true,
        [(name + '_valid')]: valid,
        password_confirmation_valid: confirmationValid
      })
    } else {
      this.setState({
        [name]: event.target.value,
        [(name + '_touched')]: true,
        [(name + '_valid')]: valid
      })
    }

  }

  isValid = (name, value, password = this.state.password) => {
    let valid = false;

    if        (name === 'email') {
      const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      valid = pattern.test(value)
    } else if (name ==='password') {
        valid = value.length >= 6;
    } else if (name === 'password_confirmation') {
        valid = password === value && value.length >= 6;
    }

    return valid
  }

  isDisabled = () => {
    return !(this.state.email_valid && 
             this.state.password_valid && 
             this.state.password_confirmation_valid)
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.email_valid && this.state.password_confirmation_valid) {
      this.props.onSignUp(this.state.email, this.state.password);
    }
  }

  render() {
    const disabled = this.isDisabled();

    return (
      <div className="sign">

        {this.props.error && <div className="error-sign">{this.props.error}</div>}

        <h4>Sign up</h4>
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

          <input className={!this.state.password_confirmation_valid && this.state.password_confirmation_touched ? 'invalid-input' : ''} 
                 onChange={this.handleChange} 
                 name="password_confirmation" 
                 type="password" 
                 value={this.state.password_confirmation} 
                 placeholder="Confirm password" />

          <button className={disabled ? 'btn-disabled' : ''} disabled={disabled}>Sign up</button>
        </form>
        
        <Link to='/'>Already signed up? Sign in</Link>
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
    onSignUp: (email, password) => dispatch(actions.signUp(email, password)),
    onRemoveError: () => dispatch(actions.removeError())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));