import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import Intro from './Intro';
import { Auth0Provider } from '@auth0/auth0-react';

render(
  <Auth0Provider
    domain="dev-ouciyri7.us.auth0.com"
    clientId="uN9Oca9Eax7C4C6cg2EmEy7Yd11UtCd7"
    redirectUri="chrome-extension://aoijeimniacifhfjeapgpailmaokcgdm/intro.html"
    useRefreshTokens={true}
    audience="https://dev-ouciyri7.us.auth0.com/api/v2/"
  >
    <Intro />
  </Auth0Provider>,
  window.document.querySelector('#main-container')
);

if (module.hot) module.hot.accept();
