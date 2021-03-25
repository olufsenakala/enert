import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { createConcert, updateConcert } from '../concertActions';

const mapState = (state, ownProps) => {
  const concertId = ownProps.id;

  let concert = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }

  if (concertId && state.concerts.length > 0) {
    concert = state.concerts.filter(concert => concert.id === concertId)[0]
  }

  return {
    concert
  }
}

const actions = {
  createConcert,
  updateConcert
};

class ConcertForm extends Component {
  state = {...this.props.concert}

  componentDidMount() {
    if(this.props.selectedConcert !== null) {
      this.setState({
        ...this.props.selectedConcert
      })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateConcert(this.state);
      // this.props.history.push('/dashboard/concerts');
    } else {
      const newConcert = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: 'pub_assets/bnr_sup.png'
      }
      this.props.createConcert(newConcert);
      // this.props.history.push('/dashboard/concerts');
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              onChange={this.handleInputChange}
              value={title} 
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input 
              name='date'
              onChange={this.handleInputChange}
              value={date}
              type="date" 
              placeholder="Event Date" 
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input 
              name='city'
              onChange={this.handleInputChange}
              value={city}
              placeholder="City event is taking place" 
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input 
              name='venue'
              onChange={this.handleInputChange}
              value={venue}
              placeholder="Enter the Venue of the event" 
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input 
              name='hostedBy'
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting" 
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button">Cancel</Button>
          {/* <Button onClick={this.props.history.goBack} type="button">Cancel</Button> */}
        </Form>
      </Segment>
      
    )
  }
}

export default connect(mapState, actions)(ConcertForm);