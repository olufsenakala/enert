import React, { Component } from 'react';
import {connect} from 'react-redux';
import ConcertList from '../ConcertList/ConcertList';
import {createConcert, updateConcert, deleteConcert} from '../concertActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { firestoreConnect } from 'react-redux-firebase';

const mapState = (state) => ({
  concerts: state.firestore.ordered.concerts,
  loading: state.async.loading
})

const actions = {
  createConcert,
  deleteConcert,
  updateConcert
}

class ConcertPage extends Component {

  handleDeleteConcert = id => {
    this.props.deleteConcert(id);
  }

  render() {
    const {concerts, loading} = this.props;
    if (loading) return <LoadingComponent />
    return (
      <div className="ct_main__wrapper" style={{ paddingTop:'5rem' }}>
        <div className="ct_main__container">
          <div className="ct_filter__wrap"></div>
          <div className="ct_items" style={ {position: 'relative'} }>
            
            <ConcertList 
              concerts={concerts}
              deleteConcert = {this.handleDeleteConcert}
            />

          </div>
        </div>
      </div>      

    );
  }
}

export default connect(
  mapState, 
  actions
)(firestoreConnect([{ collection: 'concerts' }])(ConcertPage));