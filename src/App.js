import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from './components/Spinner/Spinner';
import { checkAuthenticated } from './store/actions/index';
import Layout from './containers/Layout/Layout';
import Scoreboard from './containers/Scoreboard/Scoreboard';
import Teams from './containers/Teams/Teams';
import Schedule from './containers/Teams/Schedule/Schedule';
import Login from './containers/Auth/Login';
import Signup from './containers/Auth/Signup';
import Logout from './containers/Auth/Logout';

// routes to be filled with json data when a public api is found - now filled with dummy data
import Boxscore from './containers/Scoreboard/Boxscore/Boxscore';
import Standings from './containers/Standings/Standings';


class App extends Component {

  componentDidMount() {
    this.props.onCheckAuthenticated();
  }

  render() {
    let routes = null;
    if        (!this.props.initialAuthCheck || !this.props.loadedTeamData) {
      routes = <Spinner />
    } else if (this.props.currentUser) { // is authenticated
      routes = (
        <Switch>
          <Route path='/' exact component={Scoreboard} />
  
          <Route path='/teams' exact component={Teams} />
          <Route path='/schedule/:teamName' component={Schedule} />
          <Route path='/logout' component={Logout} />
          
          {/* change prop of a component to force mount and rendering on path change */}
          <Route path='/scoreboard/:date' component={ () => (
            <Scoreboard timestamp={new Date().toString()} />
          )} />
          
          {/* routes to be filled with json data when a public api is found - now filled with dummy data */}
          <Route path='/boxscore' component={Boxscore} />
          <Route path='/standings' component={Standings} />
  
          <Redirect to='/' />
        </Switch>
      )
    } else {
      routes = (
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
  
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <Layout isAuthenticated={this.props.currentUser}>
        { routes }
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    loadedTeamData: state.teams.loadedTeamData,
    initialAuthCheck: state.auth.initialAuthCheck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuthenticated: () => dispatch(checkAuthenticated())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
