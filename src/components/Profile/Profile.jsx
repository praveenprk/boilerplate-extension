// import { useAuth0 } from "@auth0/auth0-react"
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import TokenCTA from '../CTA/TokenCTA';


const Profile = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className="card">
        {user?.picture ? <img className="rounded-circle text-align-center" src={user.picture} alt={`${user.name}`} width={120} height={120}/> : ''}
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <span className="card-title">{user.email}</span>
          </div>
      </div>
    </>
  )
}

export default Profile