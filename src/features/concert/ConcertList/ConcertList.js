import React, { Component } from 'react';
import ConcertListItem from './ConcertListItem';
import InfiniteScroll from 'react-infinite-scroller';

class ConcertList extends Component {
  render() {
    const { concerts, getNextConcerts, loading, moreConcerts } = this.props
    return (
      <>
        { concerts && concerts.length !== 0 &&
          <InfiniteScroll
            pageStart={0} 
            loadMore={getNextConcerts}
            hasMore={!loading && moreConcerts}
            initialLoad={false}
          >
            {concerts && concerts.map(concert => (
              <ConcertListItem 
                key={concert.id} 
                concert={concert} 
              />
            ))}
          </InfiniteScroll>
        }
      </>
    );
  }
}

export default ConcertList;