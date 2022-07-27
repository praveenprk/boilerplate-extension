export const openPage = () => {
  chrome.tabs.create({
    url: 'intro.html',
  });
};

