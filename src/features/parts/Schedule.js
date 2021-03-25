import React from 'react';

const Schedule = () => {
  return(
    <div className="mf_schdl__prgms">
      <div className="mf_schdl__prgms__inner">

        <div className="mf_schdl__time">
          <p className="tme">10:30am - 01:30pm</p>
        </div>
        <div className="mf_schdl__prgrm">
          <h4 className="title mf_schdl__prgrm--current">Lorem Ipsum is just right</h4>
          <p className="info"><span>The Beatles</span> Venue: <b>Auditorium 2</b></p>
        </div>
      </div>

      <div className="mf_schdl__prgms__inner">
        <div className="mf_schdl__time">
          <p className="tme">10:30am - 01:30pm</p>
        </div>
        <div className="mf_schdl__prgrm">
          <h4 className="title">Lorem Ipsum is just right</h4>
          <p className="info"><span>The Beatles</span> Venue: <b>Auditorium 2</b></p>
        </div>
      </div>

      <div className="mf_schdl__prgms__inner">
        <div className="mf_schdl__time">
          <p className="tme">10:30am - 01:30pm</p>
        </div>
        <div className="mf_schdl__prgrm">
          <h4 className="title">Lorem Ipsum is just right</h4>
          <p className="info"><span>The Beatles</span> Venue: <b>Auditorium 2</b></p>
        </div>
      </div>

    </div>
  )
}

export default Schedule;