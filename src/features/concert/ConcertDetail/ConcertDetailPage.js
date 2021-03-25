import React from 'react';
import { connect } from 'react-redux';

import Schedule from '../../parts/Schedule';
import ScheduleHead from '../../parts/ScheduleHead';
import ConcertDetailInfo from './ConcertDetailInfo';
import ConcertDuration from '../../parts/ConcertDuration';
import ConcertDetailChat from './ConcertDetailChat';
import FeaturedReview from './FeaturedReview';
import ConcertBanner from './ConcertBanner';
import Performers from './Performers';
import Sponsors from './Sponsors';

const mapState = (state, ownProps) => {
  const concertId = ownProps.match.params.id;

  let concert = {}

  if (concertId && state.concerts.length > 0) {
    concert = state.concerts.filter(concert => concert.id === concertId)[0]
  }

  return {
    concert
  }
}




const ConcertDetailPage = ({concert}) => {
  return (
  <div className="wrapper">
    <div className="header_wrapper"></div>
    <div className="tc_hero__wrapper">
      <div className="tc_hero__wm"></div>
      <div className="tc_hero__container">
        
        <ConcertDetailInfo concert={concert} />
        <ConcertBanner concert={concert} />
        
      </div>
    </div>
    <FeaturedReview />
    <div className="tc_stats__wrap">
      <div className="tc_stats__loc__wrap">
        <div className="tc_stats__hdr">
          <p className="time">Time &amp; Location</p>
          <span className="line"></span>
        </div>
        <h3 className="date">{concert.date}</h3>
        <p className="adrs">{concert.venue}</p>
        <ConcertDuration />
      </div>

      <Performers />
      <Sponsors />
      
    </div>

    <div className="tc_ttl__wrap mf_schdl_title">
      <h1 className="tle">Schedule & Map</h1>
      <p className="subtle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="mf_shape mf_schdl--shape"></div>
    </div>

    <div className="tc_schdl__wrap">
      <div className="tc_schdl__inner">
        <ScheduleHead />
        <Schedule />  
      </div>
      <div className="tc_map__wrap"></div>
    </div>

    <div className="tc_cmnt__sug">
      <ConcertDetailChat />
      <div className="tc_sug__wrap">
        <h2 className="tc_sug__ttl">Sug Prod</h2>
      </div>
    </div>

  </div>
  )
}

export default connect(mapState)(ConcertDetailPage);