import React, { Component } from 'react';
import ConcertListAttendee from './ConcertListAttendee';
import HostedBy from './Components/HostedBy';
import Description from './Components/Description';
import Info from './Components/Info';
import Performers from './Components/Performers';
import ConcertImage from './Components/ConcertImage';
import { objectToArray } from '../../../app/common/util/helpers';

class ConcertListItem extends Component {
  render() {
    const {concert} = this.props;
    return (

      <div className="ct_item">
        <div className="ct_item__main">
          <div className="ct_item__main__inr">
            <div className="ct_details__wrap">
              <div className="ct_details">
                <HostedBy concert={concert} />
                <Info concert={concert} />
              </div>
              <ConcertImage />
            </div>
            <Description concert={concert} />
          </div>
          <div className="ct_item__arrow">
            {concert.attendees && 
              objectToArray(concert.attendees).map((attendee) => (
                <ConcertListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </div>
        </div>
        <Performers />
      </div>      

    );
  }
}

export default ConcertListItem;