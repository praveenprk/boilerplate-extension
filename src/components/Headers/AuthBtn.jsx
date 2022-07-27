import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const AuthBtn = () => {
  
    const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <>
        {isAuthenticated ? <button className='btn btn-danger' onClick={logout}>Logout</button> : <button className='btn btn-warning' onClick={loginWithPopup}>Login with Auth0</button>}
    </>
  )
}

export default AuthBtn