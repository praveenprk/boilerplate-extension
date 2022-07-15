import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = "http://localhost:6060";

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message/`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  

  const callSecureApi = async () => {
    try {
      // let token = await getAccessTokenSilently();
      let token;
      const isToken = localStorage.getItem('access_token'); 
      
      if(!isToken) {
        token = await getAccessTokenSilently();
        localStorage.setItem('access_token', token);
        token = localStorage.getItem('access_token');
      } else {
        token = localStorage.getItem('access_token');
      }

      const response = await fetch(
        `http://localhost:6060/api/messages/protected-message/`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
      console.log(error)
    }
  };

  const callRefreshToken = async () => {
    
    let token;
    const isToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    
    if(!isToken) {
      token = await getAccessTokenSilently();
      localStorage.setItem('access_token', token);
      token = localStorage.getItem('access_token');
    } else {
      token = localStorage.getItem('access_token');
    }

    const response = await fetch(
      `https://dev-ouciyri7.us.auth0.com/oauth/token`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'refresh_token',
          response_type: 'code',
          refresh_token: refreshToken,
          client_id: "uN9Oca9Eax7C4C6cg2EmEy7Yd11UtCd7",
          redirect_uri: "chrome-extension://gnpfhidgpkhliopbgbphicbkkamjefff/intro.html",
          audience: "https://express.sample",
        }),
      },
    );

    const responseData = await response.json();
    console.log(responseData)
    localStorage.setItem('access_token', responseData.access_token);
    localStorage.setItem('refresh_token', responseData.refresh_token);
  }


  const callAuthCode = async () => {
    const token = localStorage.getItem('access_token');
    const response = await fetch(
      `https://dev-ouciyri7.us.auth0.com/oauth/device/code`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          client_id: "uN9Oca9Eax7C4C6cg2EmEy7Yd11UtCd7",
          grant_type: "code",
          scope: "openid profile email offline_access",
          audience: "https://express.sample",
        }),
      },
    );

    const responseData = await response.json();
    console.log(responseData)
  }

  return (
    <div>
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" onClick={callApi}>
          Get Public Message
        </button>
        <button
          type="button"
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
        <button
          type="button"
          onClick={callRefreshToken}
        >
          Get Refresh Token
        </button>
        <button onClick={callAuthCode}>
          Get Device Authorization Code
        </button>
      </div>
      {message && (
        <div>
          <h6>Result</h6>
          <div>
            <div>
              <code>{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
