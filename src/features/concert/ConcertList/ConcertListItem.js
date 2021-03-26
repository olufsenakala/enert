import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConcertListAttendee from './ConcertListAttendee';
import concertImg from '../../../assets/event_img.png';
import { format } from 'date-fns';

class ConcertListItem extends Component {
  render() {
    const {concert, deleteConcert} = this.props;
    return (

      <div className="ct_item">
        <div className="ct_item__main">
          <div className="ct_item__main__inr">
            <div className="ct_details__wrap">
              <div className="ct_details">
                <div className="ct_host">
                  <div className="ct_host__inner">
                    <img 
                      className="ct_host__image" 
                      src={concert.hostPhotoURL} 
                      alt="" 
                    />
                    <p className="ct_host__name">
                      Hosted by <span className="user">{concert.hostedBy}</span>
                    </p>
                  </div>
                  {/* <div className="ct_host_flg">
                    This Event has been cancelled
                  </div> */}
                </div>
                <div className="ct_name__wrap">
                  <h1 className="ct_name">{concert.title}</h1>
                  <p className="ct_description">
                    {concert.description}
                  </p>
                </div>
                <div className="ct_price__wrap">
                  <h3 className="amnt">$250.00</h3>
                  <button 
                    onClick={() => deleteConcert(concert.id)} 
                    className="ct_view__btn"
                    >
                      Delete
                  </button>
                  
                  <Link 
                    to={`/concerts/${concert.id}`}
                    className="ct_view__btn"
                  >
                    View
                  </Link>
                  
                </div>
              </div>
              <div className="ct_image">
                <img className="pic" src={concertImg} alt="" />
              </div>
            </div>
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
          </div>
          <div className="ct_item__arrow">
            {concert.attendees && 
              Object.values(concert.attendees).map((attendee, index) => (
                <ConcertListAttendee key={index} attendee={attendee} />
              ))}
          </div>
        </div>
        <div className="ct_pfmrs">
          <h1 className="ct_pfm__ttl">Performers</h1>
          <div className="ct_pfm__dvdr"></div>
          <h3 className="ct_pfm__sbtl">Host</h3>
          <h2 className="ct_pfm__host">Ariana grande</h2>
          <h3 className="ct_pfm__sbtl">Headliners</h3>
          <ul className="ct_pfm__others ct_pfm__others-hdlnr">
            <li>Bruno</li>
            <li>Mars</li>
          </ul>
        </div>
        
      </div>      

    );
  }
}

export default ConcertListItem;