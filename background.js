var y = false;
endBrowserAction();

function endBrowserAction() {
  chrome.browserAction.setIcon({path:"img/conclude.png"});
  chrome.tabs.executeScript(null, {file: "js/abort.js"})
}

function startBrowserAction() {
  chrome.browserAction.setIcon({path:"img/begin.png"});
  chrome.tabs.executeScript(null, {file: "js/start.js"});
}

function change_state() {
  if ( y == false ) {
    y = true;
    startBrowserAction();
  } else {
    y = false;
    endBrowserAction();
  }
}

chrome.browserAction.onClicked.addListener(change_state);
