import React from 'react';
import { Link } from 'react-router-dom';

const HostedBy = ({concert}) => {
  return (
    <div className="ct_host">
      <Link to={`/profile/${concert.hostUid}`}>
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
      </Link>

      {concert.cancelled &&
      <div className="ct_host_flg">
        This Event has been cancelled
      </div>}
    </div>
  )
}

export default HostedBy;