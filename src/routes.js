import React, { Component } from 'react';
import history from './history';
import LoginPage from './component/LoginPage'
import ProfilePage from './component/ProfilePage'

import { Route, Router } from 'react-router';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/profile' component={ProfilePage}></Route>
        </Router>
      </div>
    );
  }
}

export default Routes;