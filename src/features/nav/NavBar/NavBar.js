import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {

  state = {
    authenticated: false
  }

  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  }

  render() {
    const {authenticated} = this.state;
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
              <SignedInMenu signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);