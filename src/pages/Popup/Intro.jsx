import React from 'react';
import { useState } from 'react';
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

  //working
  // console.log(bookmarks);
  // console.log(tree);
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
      </div>
    </>
  );
};

export default Intro;
