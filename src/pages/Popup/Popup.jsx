import React from 'react';
import { useState, useEffect } from 'react';
import { openPage } from './Functions';
import './Popup.css';
import { useAuth0 } from '@auth0/auth0-react';

const Popup = () => {
  // const [tabId, setTabId] = useState(null);

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    loginWithPopup,
    logout,
  } = useAuth0();

  const [auth, setAuth] = useState(false)
  
  useEffect(() => {
    setAuth(isAuthenticated)
  }, [isAuthenticated])

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <p>isAuth:</p><span id="isAuth">{`${auth}`}</span><br/>
      <br></br>
      <button id="checkBtn" onClick={() => openPage()}>
        Login
      </button>
      <br></br>
      {/* <button id="back">Go Back</button> */}
      {/* <br></br> */}
      
      {/* <button id="getChildren1">Get Bookmarks Bar</button>
      <br></br>
      <button id="getChildren2">Get Other Bookmarks</button>
      <br></br>
      <button id="getChildren3">Get Mobile Bookmarks</button>
      <br></br>
      <button id="getOnly">Get Only</button>
      <br></br>
      <button id="update">Update</button>
      <br></br>
      <button id="showBookmarks">Show Bookmarks</button> */}
      <br></br>
      {/*  <button id="login" onClick={() => openLoginPage()}>
        Login
      </button> */}
      <button onClick={loginWithPopup}>Log in</button>
      <button onClick={loginWithRedirect}>Log in Redirect</button>
      <p>{isAuthenticated ? <button onClick={logout}>Logout</button> : ''}</p>
    </div>
  );
};

export default Popup;
