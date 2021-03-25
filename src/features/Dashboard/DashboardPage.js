import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardSideNav from './components/DashboardSideNav';
import Dashboard from './components/Dashboard';
import DashConcerts from './DashConcerts';
import NewConcert from './NewConcert';
import EditConcert from './EditConcert';
import Settings from './Settings';

const DashboardPage = () => {
  return (
    <div className="cd_wrapper">
      <div className="cd_container">
        <DashboardSideNav />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/new_concert" component={NewConcert} />
          <Route path="/dashboard/manage/:id" component={EditConcert} />
          <Route path="/dashboard/concerts" component={DashConcerts} />
          <Route path="/dashboard/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  )
}

export default DashboardPage;