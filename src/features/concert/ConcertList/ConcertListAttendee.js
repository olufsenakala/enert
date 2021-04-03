import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ConcertListAttendee extends Component {
  render() {
    const {attendee} = this.props
    return (
      <Link to={`/profile/${attendee.id}`}>
        <img className="pic" src={attendee.photoURL} alt="" />
      </Link>
    );
  }
}

export default ConcertListAttendee;