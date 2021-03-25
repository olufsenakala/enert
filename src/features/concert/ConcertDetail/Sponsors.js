import React from 'react';
import sponsor1 from '../../../assets/redbull.webp';
import sponsor2 from '../../../assets/wb.png';
import sponsor3 from '../../../assets/tw.webp';

const Sponsors = () => {
  return (
    <div className="tc_stats__spnsr">
        <h3>Sponsors</h3>
        <ul className="tc_stats__spnsr__items">
          <li className="item">
            <img className="pic" src={sponsor1} alt=""/>
          </li>
          <li className="item">
            <img className="pic" src={sponsor2} alt=""/>
          </li>
          <li className="item">
            <img className="pic" src={sponsor3} alt=""/>
          </li>
        </ul>
      </div>
  )
}

export default Sponsors;