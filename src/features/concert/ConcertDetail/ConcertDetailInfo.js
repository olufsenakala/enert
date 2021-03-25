import React from 'react';
import { Link } from 'react-router-dom';

const ConcertDetailInfo = ({concert}) => {
  return(
    <div className="tc_hero__info">
      <div className="tc_hero__info__inner">
        <h3 className="tc_hero__info__host">
          Hosted by <span className="name">{concert.hostedBy}</span>
        </h3>
        <div className="ct_host_flg">
          This Event has been cancelled
        </div>
      </div>
      <h1 className="ttl">{concert.title}</h1>
      <p className="desc">{concert.description}</p>
      <div className="tc_hero__price__wrap">
        <Link 
          to={`/dashboard/manage/${concert.id}`} 
          className="tc_hero__info__join"
        >Edit</Link>
        {/* <div className="tc_hero__info__join">View More</div> */}
        <h1 className="tc_hero__price">$250.00</h1>
      </div>
    </div>
  )
}

export default ConcertDetailInfo;