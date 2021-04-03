import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import {compose} from 'redux';
import { format } from 'date-fns';

import Schedule from '../../parts/Schedule';
import ScheduleHead from '../../parts/ScheduleHead';
import ConcertDetailInfo from './ConcertDetailInfo';
import ConcertDuration from '../../parts/ConcertDuration';
import ConcertDetailChat from './ConcertDetailChat';
import FeaturedReview from './FeaturedReview';
import ConcertBanner from './ConcertBanner';
import Performers from './Performers';
import Sponsors from './Sponsors';
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import { goingToConcert, cancelGoingToConcert } from '../../Dashboard/user/userActions';
import { addConcertComment } from '../concertActions';


const mapState = (state, ownProps) => {
  const concertId = ownProps.match.params.id;

  let concert = {};

  if (state.firestore.ordered.concerts && state.firestore.ordered.concerts.length > 0) {
    concert = state.firestore.ordered.concerts.filter(concert => concert.id === concertId)[0]
  }

  return {
    concert,
    auth: state.firebase.auth,
    concertChat: 
      !isEmpty(state.firebase.data.concert_chat) && 
      objectToArray(state.firebase.data.concert_chat[ownProps.match.params.id])
  };
};

const actions = {
  goingToConcert,
  cancelGoingToConcert,
  addConcertComment
}

class ConcertDetailPage extends Component {
  
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`concerts/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`concerts/${match.params.id}`);
  } 

  render() {
    const {
      concert,   
      auth, 
      goingToConcert, 
      cancelGoingToConcert,
      addConcertComment,
      concertChat
    } = this.props;
    const attendees = 
      concert && concert.attendees && objectToArray(concert.attendees);
    const isHost = concert.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a =>  a.id === auth.uid);
    const chatTree = !isEmpty(concertChat) && createDataTree(concertChat)
    return (
      <div className="wrapper">
        <div className="header_wrapper"></div>
        <div className="tc_hero__wrapper">
          <div className="tc_hero__wm"></div>
          <div className="tc_hero__container">
            
            <ConcertDetailInfo 
              concert={concert} 
              isGoing={isGoing} 
              isHost={isHost} 
              goingToConcert={goingToConcert}
              cancelGoingToConcert={cancelGoingToConcert}
            />
            <ConcertBanner concert={concert} attendees={attendees} />
            
          </div>
        </div>
        <FeaturedReview />
        <div className="tc_stats__wrap">
          <div className="tc_stats__loc__wrap">
            <div className="tc_stats__hdr">
              <p className="time">Time &amp; Location</p>
              <span className="line"></span>
            </div>
            <h3 className="date">
              {concert.date && format(concert.date.toDate(), 'EEE do LLLL')}
            </h3>
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
          <ConcertDetailChat 
            concertChat={chatTree}
            addConcertComment={addConcertComment} 
            concertId={concert.id}
          />
          <div className="tc_sug__wrap">
            <h2 className="tc_sug__ttl">Sug Prod</h2>
          </div>
        </div>

      </div>
    )
  }
}

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect((props) => ([`concert_chat/${props.match.params.id}`]))
)(ConcertDetailPage);