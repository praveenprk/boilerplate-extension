import React from 'react';
import { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import { getTabId, openPage } from './Functions';
import './Popup.css';

const Popup = () => {
  const [tabId, setTabId] = useState(null);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <span id="tabId"></span>
      <button id="tabCheck" onClick={() => getTabId()}>
        Get Tab Index
      </button>
      <br></br>
      <button id="checkBtn" onClick={() => openPage()}>
        Check
      </button>
      <br></br>
      <button id="back">Go Back</button>
      <br></br>
      <button id="getChildren1">Get Bookmarks Bar</button>
      <br></br>
      <button id="getChildren2">Get Other Bookmarks</button>
      <br></br>
      <button id="getChildren3">Get Mobile Bookmarks</button>
      <br></br>
      <button id="getOnly">Get Only</button>
      <br></br>
      <button id="update">Update</button>
      <br></br>
      <button id="showBookmarks">Show Bookmarks</button>
      <br></br>
    </div>
  );
};

export default Popup;
