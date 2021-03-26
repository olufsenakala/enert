import React from 'react'

const SignedOutMenu = ({signIn, register}) => {
  return (
    <>
      <button onClick={signIn}>Login</button>
      <button onClick={register} >Register</button>
    </>
  )
}

export default SignedOutMenu;