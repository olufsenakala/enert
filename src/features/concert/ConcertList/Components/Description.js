import React from 'react';
import { format } from 'date-fns';

const Info = ({concert}) => {
  return (
    <>
      <div className="ct_info__wrap">
        <div className="ct_info ct_days">
          <h3 className="ttl">Days</h3>
          <p className="name">03</p>
        </div>
        <div className="ct_info ct_bands">
          <h3 className="ttl">Bands</h3>
          <p className="name">08</p>
        </div>
        <div className="ct_info ct_stages">
          <h3 className="ttl">Stages</h3>
          <p className="name">06</p>
        </div>
      </div>
      <div className="ct_loc__wrap">
        <div className="ct_time">
          <h3 className="ttl">Time</h3>
          <p className="name">
            {format(concert.date.toDate(), 'EEEE do LLL')} at{' '}
            {format(concert.date.toDate(), 'h:mm a')}
          </p>
        </div>
        <div className="ct_location">
          <h3 className="ttl">Location</h3>
          <p className="name">{concert.venue}</p>
        </div>
      </div>
    </>
  )
}

export default Info;