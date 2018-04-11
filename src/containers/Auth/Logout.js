import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/index';
import Spinner from '../../components/Spinner/Spinner';

class Logout extends Component {

  componentWillMount() {
    this.props.onSignOutUser();
  }

  render() {
    const logout = this.props.currentUser ? <Spinner /> : <Redirect to='/' />;
    return logout;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignOutUser: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);