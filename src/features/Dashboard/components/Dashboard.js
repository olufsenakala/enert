import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Segment, Tab } from 'semantic-ui-react';

import daStatImg from '../../../assets/stats1.png';
import dasHostImg from '../../../assets/event2.png';
import dashActImg from '../../../assets/event1.png';

class Dashboard extends Component {

  panes = [
    {menuItem: 'All Concerts', pane: {key: 'allConcerts'}},
    {menuItem: 'Past Concerts', pane: {key: 'pastConcerts'}},
    {menuItem: 'Future Concerts', pane: {key: 'futureConcerts'}},
    {menuItem: 'Hosting Concerts', pane: {key: 'hostingConcerts'}},
  ]

  render() {
    return(
      <>
        <main className="cd_main__wrap cd_main-home">
          <h1 className="cd_crmb">Dashboard</h1>
          <div className="cd_stats__items">

            <div className="cd_stats__item cd_stats__item-first">
              <div className="cd_stats__item__inr">
                <img className="pic" src={daStatImg} alt="" />
                <p className="name">Clients</p>
              </div>
              <p className="value">1992</p>
            </div>
            <div className="cd_stats__item">
              <div className="cd_stats__item__inr">
                <img className="pic" src={daStatImg} alt="" />
                <p className="name">Clients</p>
              </div>
              <p className="value">1992</p>
            </div>
            
          </div>

          <div className="cd_cnct__wrap">
            <h3 className="cd_cnct__title">Upcoming Concerts</h3>
            <Tab panes={this.panes} menu={{secondary: true, pointing: true}} />
            <div className="cp_cncrt__body">
              <div className="cp_cncrt__item">
                <span className="flag">Cancelled</span>
                <img className="image" src={dasHostImg} alt="" />
                <h3 className="name">The Ariana Effect</h3>
                <p className="address">29th June 2021</p>
              </div>
              <div className="cp_cncrt__item">
                <img className="image" src={dasHostImg} alt="" />
                <h3 className="name">Niketa William</h3>
                <p className="address">15th May 2021</p>
              </div>
              <div className="cp_cncrt__item">
                <img className="image" src={dasHostImg} alt="" />
                <h3 className="name">Niketa William</h3>
                <p className="address">15th May 2021</p>
              </div>
            </div>
          </div>

          <div className="cd_cldr">
            <h3 className="ttl">Concert Dates</h3>
          </div>


        </main>
        <aside className="cd_aside">
          <div className="cd_login__profl" style={{ visibility: 'hidden' }}>
            <div className="cd_profl">
              <p className="name">Welcome Ariana</p>
              <img className="pic" src="pub_assets/event2.png" alt="" />
            </div>
          </div>
          <div className="cd_actv__wrap">
            <h3 className="cd_actv__ttl">Activities</h3>
            <div className="cd_actv__item">
              <div className="cd_actv__img">
                <img className="pic" src={dashActImg} alt="" />
              </div>
              <div className="cd_actv__desc">
                <p className="time">Today, 10:30 - 11:00</p>
                <p className="info">
                  <Link to="/" className="name" href="#">Bruce </Link> 
                  has signed up to 
                  <Link to="/" className="event" href="#"> Clark Event 1</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="cd_aud__wrap">
            <h3 className="ttl">Audience</h3>
            <p className="desc">Description</p>
          </div>
          <div className="cd_aud__per">
            <p className="desc">Updates</p>
          </div>
        </aside>
      </>
    )
  }
}

export default Dashboard;