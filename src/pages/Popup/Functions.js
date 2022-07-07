export const getTabId = async () => {
  let [val] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
};

export const openPage = () => {
  chrome.tabs.create({
    url: 'intro.html',
  });
};

/* export function renderBookmarks(bookmarksList) {
  let bookmarkDiv = document.getElementById('bookmarks');
  console.log(bookmarkDiv);
  // bookmarkDiv.innerHTML = '';
  newlistitem = document.createElement('ul');
  console.log(newlistitem);
  bookmarkDiv.append(newlistitem);
  newlistitem.setAttribute('id', 'blist');
  bookmarksList.forEach((element, index) => {
    let isFolder = element.dateGroupModified ? '📁' : '';
    bitem = document.createElement('li');
    newlistitem.appendChild(bitem);
    bitem.setAttribute('id', 'bitem');
    // bitem.innerHTML = "<h3>"+element.id+" 👉 " +element.title+" "+isFolder+"</h3>";
    bitem.innerHTML = `<a target='_blank' href='${element.url}'>${element.id} 👉 ${element.title}</a> ${isFolder}`;
    //<button id='deleteBookmark' onclick='removeEntry()'>Delete "+element.id+"</button>
    // bitem.innerText = element.id+" 👉 " +element.title;
  });
} */

export let fetchChildrenBookmark = (childId, updater) => {
  chrome.bookmarks.getChildren(childId, (results) => {
    updater(results);
  });
};

export const deleteBookmark = (del_id) => {
  chrome.bookmarks.remove(del_id, () =>
    alert(`bookmark with ID ${del_id} deleted`)
  );
};
