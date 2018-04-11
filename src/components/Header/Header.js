import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const header = (props) => {

  let links;

  if (props.isAuthenticated) {
    links = (
      <div className="header">
        <Link to='/teams'><span>Teams</span></Link>
        <Link to='/'><span>Today's games</span></Link>
        <Link to='/logout'><span>Sign out</span></Link>
      </div>
    )
  } else {
    links = (
      <div className="header">
        <Link to='/'><span>Log in</span></Link>
        <Link to='/signup'><span>Sign up</span></Link>
      </div>
    )
  }

  return links
}


export default header;