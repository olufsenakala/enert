import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { Dimmer, Loader } from 'semantic-ui-react';

const UserDetailEvents = ({concerts, concertsLoading, tabClick, currentIndex}) => {
  // const [tabIndex, setTabIndex] = useState(0);
  return(
    <div className="cp_cncrt">
      <h2 className="cp_cncrt__ttl">Concerts</h2>
      <div className="cp_cncrt__tab">
        <span onClick={() => tabClick(0)} className={currentIndex === 0 ? "ttl active" : "ttl"}>All concerts</span>
        <span onClick={() => tabClick(1)} className={currentIndex === 1 ? "ttl active" : "ttl"}>Past concerts</span>
        <span onClick={() => tabClick(2)} className={currentIndex === 2 ? "ttl active" : "ttl"}>Future concerts</span>
        <span onClick={() => tabClick(3)} className={currentIndex === 3 ? "ttl active" : "ttl"}>Hosting</span>
      </div>
      <div className="cp_cncrt__body">
        <Dimmer inverted={true} active={concertsLoading}>
          <Loader />
        </Dimmer>
        {concerts && concerts.map((concert) => (
          <div key={concert.id} className="cp_cncrt__item">
            <Link to={`/concerts/${concert.id}`}>
              {concert.cancelled &&
              <span className="flag">Cancelled</span>}
              
              <img className="image" src="/pub_assets/event2.png" alt="" />
              
              <h3 className="name">{concert.title}</h3>
              <p className="address">
                {format(concert.date && concert.date.toDate(), 'dd LLL yyyy')}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDetailEvents;