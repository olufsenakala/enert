import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions';

const actions = {
  openModal
}

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
}) 

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return(
      <div className="ct_header__wrapper">
        <div className="ct_header__container">
          <div className="ct_logo__wrap">
            <Link to="/">Logo.</Link>
          </div>
          <ul className="ct_hd__link">
            <li><NavLink exact to="/concerts">Concert</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/test">Test</NavLink></li>
          </ul>
          <div className="ct_login__wrap">
            {authenticated ? (
              <SignedInMenu
                auth={auth}
                profile={profile}
                signOut={this.handleSignOut} 
              />
            ) : (
              <SignedOutMenu 
                signIn={this.handleSignIn} 
                register={this.handleRegister}
                />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));