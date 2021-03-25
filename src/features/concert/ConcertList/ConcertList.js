import React, { Component } from 'react';
import ConcertListItem from './ConcertListItem';

class ConcertList extends Component {
  render() {
    const { concerts, deleteConcert } = this.props
    return (
      <>
        {concerts.map(concert => (
          <ConcertListItem 
            key={concert.id} 
            concert={concert} 
            deleteConcert={deleteConcert}
          />
        ))}
      </>
    );
  }
}

export default ConcertList;