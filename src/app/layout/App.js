import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../../features/nav/NavBar/NavBar';
import ConcertPage from '../../features/concert/ConcertPage/ConcertPage';
import HomePage from '../../features/home/HomePage';
import ConcertDetailPage from '../../features/concert/ConcertDetail/ConcertDetailPage';
import UserDetailPage from '../../features/UserDetail/UserDetailPage';
import DashboardPage from '../../features/Dashboard/DashboardPage';
import TestComponent from '../../features/testarea/TestComponent';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/concerts' component={ConcertPage} />
          <Route path='/concerts/:id' component={ConcertDetailPage} />
          <Route path='/profile/:id' component={UserDetailPage} />
          <Route path='/dashboard' component={DashboardPage} />
          <Route path='/test' component={TestComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;