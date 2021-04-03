import React, { Component } from 'react';
import {connect} from 'react-redux';
import ConcertList from '../ConcertList/ConcertList';
import { getConcertsForDashboard } from '../concertActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { firestoreConnect } from 'react-redux-firebase';
import { Loader } from 'semantic-ui-react';

const mapState = (state) => ({
  concerts: state.concerts,
  loading: state.async.loading
})

const actions = {
  getConcertsForDashboard
}

class ConcertPage extends Component {
  state = {
    moreConcerts: false,
    loadingInitial: true,
    loadedConcerts: []
  }

  async componentDidMount() {
    let next = await this.props.getConcertsForDashboard();
    console.log(next);

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreConcerts: true,
        loadingInitial: false
      })
    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.concerts !== prevProps.concerts) {
      this.setState({
        loadedConcerts: [...this.state.loadedConcerts, ...this.props.concerts]
      })
    }
  }

  getNextConcerts = async () => {
    const {concerts} = this.props;
    let lastConcert = concerts && concerts[concerts.length -1];
    console.log(lastConcert);
    let next = await this.props.getConcertsForDashboard(lastConcert);
    console.log(next);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreConcerts: false
      })
    }
  }

  render() {
    const { loading } = this.props;
    const {moreConcerts, loadedConcerts} = this.state;
    if (this.state.loadingInitial) return <LoadingComponent />
    return (
      <div className="ct_main__wrapper" style={{ paddingTop:'5rem' }}>
        <div className="ct_main__container">
          <div className="ct_filter__wrap"></div>
          <div className="ct_items" style={ {position: 'relative'} }>
            
            <ConcertList 
              loading={loading}
              concerts={loadedConcerts}
              moreConcerts={moreConcerts}
              getNextConcerts={this.getNextConcerts}
            />
          </div>
          <div>
            <Loader style={{position: 'relative'}} active={loading} />
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