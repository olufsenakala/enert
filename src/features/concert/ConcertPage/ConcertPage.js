import React, { Component } from 'react';
import {connect} from 'react-redux';
import ConcertList from '../ConcertList/ConcertList';
import {createConcert, updateConcert, deleteConcert} from '../concertActions';

const mapState = (state) => ({
  concerts: state.concerts
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
    const {concerts} = this.props;
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

export default connect(mapState, actions)(ConcertPage);