import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import Intro from './Intro';

render(<Intro />, window.document.querySelector('#main-container'));

if (module.hot) module.hot.accept();
