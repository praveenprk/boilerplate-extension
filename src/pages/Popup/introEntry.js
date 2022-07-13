import React from 'react';
import { render } from 'react-dom';

// import Popup from './Popup';
import './index.css';
import Intro from './Intro';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

/* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE; */

render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-ouciyri7.us.auth0.com"
    clientId="uN9Oca9Eax7C4C6cg2EmEy7Yd11UtCd7"
    redirectUri="chrome-extension://gnpfhidgpkhliopbgbphicbkkamjefff/intro.html"
    useRefreshTokens={true}
    audience="https://express.sample"
  > 
    <Intro />
  </Auth0Provider>
  </BrowserRouter>,
  window.document.querySelector('#main-container')
);

if (module.hot) module.hot.accept();
