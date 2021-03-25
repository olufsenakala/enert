import React, { Component } from 'react';

class ConcertListAttendee extends Component {
  render() {
    const {attendee} = this.props
    return (
      <>
        <img className="pic" src={attendee.photoURL} alt="" />
      </>
    );
  }
}

export default ConcertListAttendee;