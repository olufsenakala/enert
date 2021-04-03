import React, { Component } from 'react';
// import ConcertListItem from '../../concert/ConcertList/ConcertListItem';
import MyConcertListItem from '../components/MyConcertListItem';

class MyConcertList extends Component {
  render() {
    const { concerts } = this.props
    return (
      <>
        {concerts && concerts.map(concert => (
          <MyConcertListItem 
            key={concert.id} 
            concert={concert} 
          />
        ))}
      </>
    );
  }
}

export default MyConcertList;