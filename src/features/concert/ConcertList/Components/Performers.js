import React from 'react';

const Performers = () => {
  return (
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
  )
}

export default Performers;