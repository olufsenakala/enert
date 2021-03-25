import React from 'react';
import concertBanner from '../../../assets/cncrt_main.jpg';
import disc from '../../../assets/disc.png';


const ConcertBanner = ({concert}) => {
  return (
    <div className="tc_hero__image">
          <div className="tc_hero__img__wrap">
            <img className="pic" src={concertBanner} alt=""/>
            <div className="tc_hero__stats tc_hero__stats-days">
              <img className="img" src={disc} alt=""/>
              <div className="tc_hero__stats__val">
                <h2 className="num">08</h2>
                <p className="name">Bands</p>
              </div>
            </div>
          </div>
          <div className="tc_img__host">
            <div className="tc_hero__host__img">
              <img className="pic" src={concert.hostPhotoURL} alt=""/>
            </div>
            <div className="tc_hero__host">
              <h3 className="name">Ariana Grande</h3>
              <p className="host">Host</p>
            </div>
          </div>
          <div className="tc_hero__atnd">
            <p className="atnde">Attendees</p>
            {concert.attendees && concert.attendees.map((attendee)=>
              <img key={attendee.id} className="pic" src={attendee.photoURL} alt=""/>
            )}
          </div>
        </div>
  )
}

export default ConcertBanner;