import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';

class Layout extends Component {

  render(){
    return (
      <Aux>
        <Header isAuthenticated={this.props.isAuthenticated} />
        {this.props.children}
      </Aux>
    )
  }

}

export default Layout;