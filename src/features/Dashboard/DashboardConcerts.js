import React, { Component } from 'react';
import {connect} from 'react-redux';
import MyConcertList from './components/MyConcertList';
// import ConcertList from '../concert/ConcertList/ConcertList';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

const mapState = (state) => ({
  concerts: state.firestore.ordered.concerts,
})

class DashboardConcerts extends Component {

  render() {
    const {concerts} = this.props;
    if (!isLoaded(concerts)) return <LoadingComponent />
    return (
      <main className="cd_main__wrap">
        <h1>Dashboard Concert Page</h1>
        <div className="cd_cnct__tab">
          <p className="txt active">Hosting</p>
          <p className="txt">Attending</p>
        </div>
        <div className="ct_items" style={ {position: 'relative'} }>
          
          <MyConcertList 
            concerts={concerts}
          />

        </div>

      </main>
    )
  }
}

export default connect(
  mapState
)(firestoreConnect([{ collection: 'concerts' }])(DashboardConcerts));