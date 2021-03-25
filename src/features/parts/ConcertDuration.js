import React from 'react';

const ConcertDuration = () => {
  return (
    <div className="mf_abt__stats">
      <div className="mf_abt__stats__item mf_abt__stats--days">
        <h2 className="title">04</h2>
        <p>Days</p>
      </div>
      <div className="mf_abt__stats__item mf_abt__stats--bands">
        <h2 className="title">08</h2>
        <p>Bands</p>
      </div>
      <div className="mf_abt__stats__item mf_abt__stats--atnde">
        <h2 className="title">5k+</h2>
        <p>Attendees</p>
      </div>
      <div className="mf_abt__stats__item mf_abt__stats--stages">
        <h2 className="title">06</h2>
        <p>Stages</p>
      </div>
      <div className="mf_abt__stats__item mf_abt__stats--hrs">
        <h2 className="title">48</h2>
        <p>Hours of music</p>
      </div>
    </div>
  )
}

export default ConcertDuration;