import React from 'react';
import concertImg from '../../../../assets/event_img.png';

const ConcertImage = () => {
  return (
    <div className="ct_image">
      <img className="pic" src={concertImg} alt="" />
    </div>
  )
}

export default ConcertImage;