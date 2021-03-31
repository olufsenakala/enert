import React from 'react';
import { NavLink } from 'react-router-dom';
import dasHomeIcon from '../../../assets/sd1.png';
import dashNewIcon from '../../../assets/sd2.png';
import dashSetIcon from '../../../assets/sd3.png';

const DashboardSideNav = () => {
  return (
    <div className="cd_sd__wrap">
      <div className="cd_logo">Colors</div>
      <div className="cd_sdMn">
        <ul className="cd_sdMn__items">
          <li className="cd_sdMn__item">
            <NavLink exact to="/dashboard" className="cd_sdMn__link">
              <img className="pic" src={dasHomeIcon} alt="" />
              <p className="txt">Dashboard</p>
            </NavLink>
          </li>
          <li className="cd_sdMn__item">
            <NavLink to="/dashboard/new_concert" className="cd_sdMn__link">
              <img className="pic" src={dashNewIcon} alt="" />
              <p className="txt">New Concert</p>
            </NavLink>
          </li>
          <li className="cd_sdMn__item">
            <NavLink to="/dashboard/concerts" className="cd_sdMn__link">
              <img className="pic" src={dashNewIcon} alt="" />
              <p className="txt">Concerts</p>
            </NavLink>
          </li>
          <li className="cd_sdMn__item">
            <NavLink to="/dashboard/settings" className="cd_sdMn__link">
              <img className="pic" src={dashSetIcon} alt="" />
              <p className="txt">Settings</p>
            </NavLink>
          </li>
          <li className="cd_sdMn__item">
            <NavLink to="/dashboard/change_password" className="cd_sdMn__link">
              <img className="pic" src={dashSetIcon} alt="" />
              <p className="txt">Change Password</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="cd_anunc">
        <div></div>
      </div>
    </div>
  )
}

export default DashboardSideNav;