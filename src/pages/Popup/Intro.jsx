import { LocalStorageCache, useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useState, useEffect } from 'react';
import ExternalApi from './ExternalApi';
import { useSearchParams } from "react-router-dom";
import {
  getTabId,
  fetchChildrenBookmark,
  // renderBookmarks,
  deleteBookmark,
} from './Functions';

const Intro = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [tree, setTree] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    loginWithPopup,
    logout,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  

  useEffect(() => {
    const storageCache = new LocalStorageCache();
    const key = storageCache.allKeys().find(key => key.includes('auth0spa'));
    // const key = storageCache.set('token11', 'auth0spa');
    const refresh_token_value = storageCache.get(key);
    const finalRefreshToken = refresh_token_value?.body?.refresh_token
    localStorage.setItem('refresh_token', finalRefreshToken);
    setRefreshToken(finalRefreshToken);
    return () =>{
      setRefreshToken(null);
    }
  },[isAuthenticated])
   
  
  console.log(refreshToken)

  return (
    <>
      <h1>Boilerplate extension</h1>
      <button id="tabCheck" onClick={() => getTabId()}>
        Get Tab Index
      </button>
      <button id="back">Go Back</button>
      <button
        id="getChildren1"
        onClick={() => {
          fetchChildrenBookmark('1', setBookmarks);
        }}
      >
        Get Bookmarks Bar
      </button>
      <button
        id="getChildren2"
        onClick={() => {
          fetchChildrenBookmark('2', setBookmarks);
        }}
      >
        Get Other Bookmarks
      </button>
      <button
        id="getChildren3"
        onClick={() => {
          fetchChildrenBookmark('3', setBookmarks);
        }}
      >
        Get Mobile Bookmarks
      </button>
      {/* <button id="getOnly">Get Only</button> */}

      <button id="update">Update</button>
      {/* <button id="showBookmarks">Show Bookmarks</button> */}
      <div>
        <label htmlFor="delete">Delete ID</label>
        <input
          type="text"
          id="toDel"
          onChange={(e) => setDeleteId(e.target.value)}
        />
        <button id="deleteBookmark" onClick={() => deleteBookmark(deleteId)}>
          Delete Bookmark
        </button>
        <br />
      </div>
      <form>
        <label htmlFor="search">Search</label>
        <span id="resNo"></span>
        <input
          type="search"
          name="searchBookmark"
          id="search"
          onKeyUp={(e) => {
            chrome.bookmarks.search(e.target.value, (nodes) =>
              setBookmarks(nodes)
            );
          }}
        />
      </form>
      {/* <button id="subtree">SubTree</button> */}
      <div id="bookmarks">
        <ul>
          {bookmarks &&
            bookmarks.map((bookmark, index) => {
              return (
                <div key={index}>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${bookmark.url}`}
                    >{`${bookmark.id} => ${bookmark.title}`}</a>
                  </li>
                  &nbsp;
                  {bookmark.dateGroupModified ? (
                    <>
                      <button
                        onClick={() => {
                          fetchChildrenBookmark(bookmark.id, setTree);
                        }}
                      >
                        Show Bookmarks Folder
                      </button>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
        </ul>
        <ul>
          {tree &&
            tree.map((node, index) => {
              <>
                <p>checking</p>
                <p>${node.title}</p>;
              </>;
            })}
        </ul>
        <button onClick={() => {
          chrome.identity.getAuthToken({'interactive':true},(token, grantedScopes)=>{
            console.log(token);
            console.log(grantedScopes);
            chrome.identity.getProfileUserInfo({accountStatus:'ANY'},function(userInfo){
              console.log(userInfo);
            })
          });
        }}>Login with Google</button><br/>
        <button onClick={loginWithPopup}>Login</button>
        <button onClick={loginWithRedirect}>Login with Redirect</button>
      </div>
      <span>{isAuthenticated ? 'Logged In' : 'Logged Out'}</span>
      <span>
        {isAuthenticated ? <button onClick={logout}>LogOut</button> : ''}
      </span>
      <span>
        <button
          onClick={async () => {
            let token = await getAccessTokenSilently();
            //get token only
            console.log(token);
            localStorage.setItem('access_token', token);
          }}
        >
          Get Access Token Silently
        </button>
        <br />
        <button
          onClick={async () => {
            let claim = await getIdTokenClaims();
            //get all details
            console.log(claim);
            /* document.querySelector('#token_claim').innerText =
              JSON.stringify(claim); */
            localStorage.setItem('token_claim', JSON.stringify(claim));
          }}
        >
          Get ID Token Claims
        </button>
      </span>
      <div style={{ float: 'right' }}>
        Token ID:<span id="token_id"></span>
        <br />
        Token Claim:<span id="token_claim"></span>
      </div>
      <p>
        
      </p>
      <ExternalApi/>
      </>
  );
};

export default Intro;
