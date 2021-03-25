import React from 'react'

const SignedOutMenu = ({signIn}) => {
  return (
    <>
      <button onClick={signIn}>Login</button>
      <button>Register</button>
    </>
  )
}

export default SignedOutMenu;