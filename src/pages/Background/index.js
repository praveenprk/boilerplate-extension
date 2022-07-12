console.log('This is the background page.');
console.log('Put the background scripts here.');
chrome.runtime.onInstalled.addListener(() => {
    console.log(`running inside background.js`)
  });