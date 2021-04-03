import React, { Component } from 'react';
import ConcertListAttendee from '../../concert/ConcertList/ConcertListAttendee';
import Description from '../../concert/ConcertList/Components/Description';
import Info from '../../concert/ConcertList/Components/Info';
import mainImg from '../../../assets/event_img.png';

class MyConcertListItem extends Component {
  render() {
    const {concert} = this.props;
    return (

      <div className="ct_item">
        <div className="ct_item__main">
          <div className="ct_item__main__inr">
            <div className="ct_details__wrap">
              <div className="ct_details">
                <Info concert={concert} />
              </div>
            </div>
            <Description concert={concert} />
          </div>
          <div className="ct_item__arrow">
            {concert.attendees && 
              Object.values(concert.attendees).map((attendee, index) => (
                <ConcertListAttendee key={index} attendee={attendee} />
              ))}
          </div>
        </div>
        <div style={{width: '25%'}}>
            <img 
              style={{width: '100%', height: '100%', objectFit: 'cover'}} 
              src={mainImg} 
              alt=""
            />
        </div>
      </div>      

    );
  }
}

export default MyConcertListItem;