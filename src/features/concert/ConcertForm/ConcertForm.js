import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import { Segment, Form, Button } from 'semantic-ui-react';
import { cancelToggle, createConcert, updateConcert } from '../concertActions';
import SelectInput from '../../../app/common/form/SelectInput';
import TextInput from '../../../app/common/form/TextInput';
import DateInput from '../../../app/common/form/DateInput';
import TextArea from '../../../app/common/form/TextArea';
// import { getLatLng } from 'react-places-autocomplete';

import { withFirestore } from 'react-redux-firebase';

const mapState = (state, ownProps) => {
  const concertId = ownProps.id;

  let concert = {};

  if (state.firestore.ordered.concerts && state.firestore.ordered.concerts.length > 0) {
    concert = state.firestore.ordered.concerts.filter(concert => concert.id === concertId)[0]
  }

  return {
    initialValues: concert,
    concert,
    cancelToggle
  }
}

const actions = {
  createConcert,
  updateConcert
};

const validate = combineValidators({
  title: isRequired({message: 'The concert title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

class ConcertForm extends Component {

  // state: {
  //   cityLatLng: {},
  //   venueLatLng: {}
  // }

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`concerts/${match.params.id}`);
  }

  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`concerts/${match.params.id}`);
  }

  onFormSubmit = async values => {
    // values.venueLatLng =this.state.venueLatLng;
    try {
      if (this.props.initialValues.id) {
        // if(Object.keys(values.venueLatLng).length === 0) {
        //   values.venueLatLng = this.props.concert.venueLatLng
        // }
        this.props.updateConcert(values);
        this.props.history.push('/dashboard/concerts');
      } else {
        let createdConcert = await this.props.createConcert(values);
        this.props.history.push(`/dashboard/new_concert/photos/${createdConcert.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleCitySelect = selectedCity => {
  //   geocodeByAddress(selectedCity)
  //     .then(results => getLatLng(results[0]))
  //     .then(latlng => {
  //       this.setState({
  //         cityLatLng: latlng
  //       })
  //     })
  //     .then(() => {
  //       this.props.change('city', selectedCity)
  //     })
  // }

  // handleVenuSelect = selectedVenue => {
  //   geocodeByAddress(selectedVenue)
  //     .then(results => getLatLng(results[0]))
  //     .then(latlng => {
  //       this.setState({
  //         venueLatLng: latlng
  //       })
  //     })
  //     .then(() => {
  //       this.props.change('venue', selectedVenue)
  //     })
  // }

  render() {
    // const {history, initialValues} = this.props;
    // const {invalid, submitting, pristine, concert, cancelToggle} = this.props;
    const {invalid, submitting, pristine} = this.props;
    return (
      <Segment>
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field 
            name='title' 
            type='text'
            component={TextInput} 
            placeholder='Give your concert a name' 
          />
          <Field 
            name='category' 
            type='text'
            component={SelectInput} 
            options={category}
            placeholder='Concert category' 
          />
          <Field 
            name='description' 
            type='text'
            component={TextArea}
            rows={3} 
            placeholder='Concert description' 
          />
          <Field 
            name='city' 
            component={TextInput} 
            placeholder='Concert city' 
          />
          <Field 
            name='venue' 
            component={TextInput} 
            placeholder='Concert venue' 
          />
          <Field 
            name='date' 
            component={DateInput} 
            dateFormat='dd LLL yyyy h:mm a'
            showTimeSelect
            timeFormat='HH:mm'
            placeholder='Concert date' 
          />
          
          <Button 
            disabled={invalid || submitting || pristine}
            positive 
            type="submit"
            >
            Submit
          </Button>
          <Button type="button">Cancel</Button>
          {/* <Button 
            onClick={
              initialValues.id 
              ? () => history.push(`/concerts/${initialValues.id}`)
              : () => history.push('/concerts')
            } 
            type="button"
          >Cancel</Button> */}
          {/* <Button 
            type='button'
            color={concert.cancelled ? 'green': 'red'}
            floated='right'
            content={concert.cancelled ? 'Reactivate concert': 'Cancel concert'}
            onClick={() => cancelToggle(!concert.cancelled, concert.id)}
          /> */}
        </Form>
      </Segment>
      
    )
  }
}

export default withFirestore(connect(
  mapState, 
  actions
)(reduxForm({ form: 'concertForm', validate, enableReinitialize: true })(ConcertForm)));