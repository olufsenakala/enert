import React, { Component } from 'react';
import ConcertForm from '../concert/ConcertForm/ConcertForm';

class EditConcert extends Component {
  render() {
    return (
      <main className="cd_main__wrap">
        <h1>Edit page</h1>
        <ConcertForm id={this.props.match.params.id} />
      </main>
    )
  }
}

export default EditConcert;