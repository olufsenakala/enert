import React from 'react';
import ConcertForm from '../concert/ConcertForm/ConcertForm';

const NewConcert = (props) => {
  // console.log(props)
  return (
    <main className="cd_main__wrap">
      <h1>New concert page</h1>
      <ConcertForm {...props} />
    </main>
  )
}

export default NewConcert;