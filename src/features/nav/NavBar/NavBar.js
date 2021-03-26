import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

const actions = {
  openModal,
  logout
}

const mapState = state => ({
  auth: state.auth
}) 

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const {auth} = this.props;
    const authenticated = auth.authenticated;
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
                signOut={this.handleSignOut} 
                currentUser={auth.currentUser}
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

export default withRouter(
  connect(
    mapState, 
    actions
  )(NavBar)
);