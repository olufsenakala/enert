import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';

import UserDetailConcerts from './UserDetailConcerts';
import UserDetailDescription from './UserDetailDescription';
import UserDetailPhotos from './UserDetailPhotos';
import UserDetailFollow from './UserDetailFollow';
import UserDetailSide from './UserDetailSide';
import { userDetailedQuery } from '../../features/Dashboard/user/userQueries'; 
import LoadingComponent from '../../app/layout/LoadingComponent';
import { getUserConcerts } from '../Dashboard/user/userActions';

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }

  return {
    profile,
    userUid,
    concerts: state.concerts,
    concertsLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting
  }
};

const actions = {
  getUserConcerts
}

class UserDetailPage extends Component {

  state = {tabIndex: 0}
  
  async componentDidMount() {
    let concerts = await this.props.getUserConcerts(this.props.userUid);
    console.log(concerts);
  }

  handleTabClick = (index) => {
    this.setState({tabIndex: index})
    this.props.getUserConcerts(this.props.userUid, index);
  }

  render() {
    const {
      profile, 
      photos, 
      auth, 
      match, 
      requesting,
      concerts,
      concertsLoading
    } = this.props;
    const isCurrentUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return  <LoadingComponent />
    return (
      <div className="cp_wrapper">
        <div className="header__wrapper"></div>
        <div className="cp_main__wrapper">
          <div className="cp_main__container">
            <div className="cp_main__info">
              <div className="cp_main__left">
  
                <UserDetailDescription profile={profile} />
                <UserDetailConcerts 
                  concerts={concerts} 
                  concertsLoading={concertsLoading}
                  tabClick={this.handleTabClick}
                  currentIndex={this.state.tabIndex}
                />
              
              </div>
  
              <UserDetailSide isCurrentUser={isCurrentUser} profile={profile} />
            </div>
            
            <UserDetailFollow />
            
            <UserDetailPhotos photos={photos} />
  
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  connect(mapState, actions),
  firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailPage);