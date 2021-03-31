import React from 'react';
import {connect} from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import { updateProfile } from './user/userActions';
import BasicSettings from './BasicSettings';
import AboutPage from './AboutPage';
import UserPhotosPage from './UserPhotosPage';

const actions = {
  updateProfile
}

const mapState = (state) => ({
  user: state.firebase.profile
})

const Settings = ({ user, updateProfile }) => {
  return (
    <div className="cd_main__wrap" style={{paddingTop: '5rem'}}>
      <div className="cd_cnct__tab">
        <NavLink to="/dashboard/settings/basics" className="txt">Basics</NavLink>
        <NavLink to="/dashboard/settings/about" className="txt">About Me</NavLink>
        <NavLink to="/dashboard/settings/user_photos" className="txt">Photos</NavLink>
      </div>
      <div>
        <Route 
          path="/dashboard/settings/basics" 
          render={() => 
            <BasicSettings 
            initialValues={user}
            updateProfile={updateProfile} 
            />
          }
        />
        <Route 
          path="/dashboard/settings/about" 
          render={() => 
            <AboutPage initialValues={user} updateProfile={updateProfile} />} 
          />
        <Route path="/dashboard/settings/user_photos" component={UserPhotosPage} />
      </div>
    </div>
  )
}

export default connect(mapState, actions)(Settings);