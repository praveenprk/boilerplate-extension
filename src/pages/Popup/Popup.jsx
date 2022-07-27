import React from 'react';
import { useState, useEffect } from 'react';
import { openPage } from '../../helpers/Functions';
import './Popup.css';
import { useAuth0 } from '@auth0/auth0-react';
import AuthBtn from '../../components/Headers/AuthBtn';
import Greeting from '../../components/Headers/Greeting';
import GetAccessTokenBtn from '../../components/CTA/GetAccessTokenBtn';

const Popup = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
  } = useAuth0();

  const [auth, setAuth] = useState(false)
  
  
  useEffect(() => {
    setAuth(isAuthenticated)
  }, [isAuthenticated])

  

  return (
    <div className="App">
      {/* <Greeting name={user.given_name} /> */}
      {
        JSON.stringify(user)
      }
      {/* <p>isAuth:</p><span id="isAuth">{`${auth}`}</span><br/> */}
      <br></br>
        <button id="checkBtn" onClick={() => openPage()}>
          Login with Auth0
        </button>
      {/* <AuthBtn/> */}
      <br></br>
    </div>
  );
};

export default Popup;
