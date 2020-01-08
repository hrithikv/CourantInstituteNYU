var x = false;
disableBrowserAction();

function disableBrowserAction() {
  chrome.browserAction.setIcon({path:"img/disable.png"});
  chrome.tabs.executeScript(null, {file: "js/abort.js"})
}

function beginBrowserAction() {
  chrome.browserAction.setIcon({path:"img/begin.png"});
  chrome.tabs.executeScript(null, {file: "js/start.js"});
}

function updateState() {
  if ( x == false ) {
    x = true;
    beginBrowserAction();
  } else {
    x = false;
    disableBrowserAction();
  }
}

chrome.browserAction.onClicked.addListener(updateState);
