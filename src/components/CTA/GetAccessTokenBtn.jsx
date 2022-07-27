import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { setTokenToLocalStorage } from '../../helpers/localStorageHelpers';

const GetAccessTokenBtn = () => {

    const {getAccessTokenSilently} = useAuth0()

  return (
    <>
         <button
          className='btn btn-primary'
          onClick={async () => {
            let token = await getAccessTokenSilently();
            setTokenToLocalStorage('access_token', token);
          }}
        >
          Get Access Token Silently
        </button>
    </>
  )
}

export default GetAccessTokenBtn