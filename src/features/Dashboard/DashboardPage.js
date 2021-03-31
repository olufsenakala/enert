import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import DashboardSideNav from './components/DashboardSideNav';
import Dashboard from './components/Dashboard';
import DashConcerts from './DashConcerts';
import NewConcert from './NewConcert';
import EditConcert from './EditConcert';
import Settings from './Settings';
import AboutPage from './AboutPage';
import ChangePassword from './ChangePassword';

const DashboardPage = () => {
  return (
    <div className="cd_wrapper">
      <div className="cd_container">
        <DashboardSideNav />
        <Switch>
          <Redirect exact from="/dashboard/settings" to="/dashboard/settings/basics" />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/new_concert" component={NewConcert} />
          <Route path="/dashboard/manage/:id" component={EditConcert} />
          <Route path="/dashboard/concerts" component={DashConcerts} />
          <Route path="/dashboard/Settings" component={Settings} />
          <Route path="/dashboard/about" component={AboutPage} />
          <Route path="/dashboard/change_password" component={ChangePassword} />
        </Switch>
      </div>
    </div>
  )
}

export default DashboardPage;