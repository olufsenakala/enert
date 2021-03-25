import React from 'react';

const ScheduleHead = () => {
  return(
    <div className="mf_schdl__tab__title">
      <div className="mf_schdl__days mf_schdl__days--current">
        <h4 className="day">Day1</h4>
        <p className="date">17-Dec-2019</p>
      </div>
      <div className="mf_schdl__days">
        <h4 className="day">Day2</h4>
        <p className="date">18-Dec-2019</p>
      </div>
      <div className="mf_schdl__days">
        <h4 className="day">Day3</h4>
        <p className="date">19-Dec-2019</p>
      </div>
      <div className="mf_schdl__days">
        <h4 className="day">Day4</h4>
        <p className="date">20-Dec-2019</p>
      </div>
    </div>
  )
}

export default ScheduleHead;