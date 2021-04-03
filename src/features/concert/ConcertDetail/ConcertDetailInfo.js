import React from 'react';
import { Link } from 'react-router-dom';

const ConcertDetailInfo = ({ 
  concert, isHost, isGoing, goingToConcert, cancelGoingToConcert
}) => {
  return(
    <div className="tc_hero__info">
      <div className="tc_hero__info__inner">
        <h3 className="tc_hero__info__host">
          Hosted by <span className="name">
          <Link to={`/profile/${concert.hostUid}`}>
            {concert.hostedBy}
          </Link>
          </span>
        </h3>
        {concert.cancelled &&
        <div className="ct_host_flg">
          This Event has been cancelled
        </div>}
      </div>
      <h1 className="ttl">{concert.title}</h1>
      <p className="desc">{concert.description}</p>
      <div className="tc_hero__price__wrap">
        {!isHost &&
        <>
          {isGoing ? (
            <button 
              onClick={() => cancelGoingToConcert(concert)}
              className="tc_hero__info__join"
            >
              Cancel My Place
            </button>
          ):(
            <button 
              onClick={() => goingToConcert(concert)}
              className="tc_hero__info__join"
            >
              JOIN THIS CONCERT
            </button>
          )}
        </>}
        {isHost &&
        <Link 
          to={`/dashboard/manage/${concert.id}`} 
          className="tc_hero__info__join"
        >Edit</Link>}
        
        <h1 className="tc_hero__price">$250.00</h1>
      </div>
    </div>
  )
}

export default ConcertDetailInfo;