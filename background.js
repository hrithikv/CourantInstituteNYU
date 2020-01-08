var x = false;
endBrowserAction();

function endBrowserAction() {
  chrome.browserAction.setIcon({path:"img/disable.png"});
  chrome.tabs.executeScript(null, {file: "js/abort.js"})
}

function startBrowserAction() {
  chrome.browserAction.setIcon({path:"img/begin.png"});
  chrome.tabs.executeScript(null, {file: "js/start.js"});
}

function change_state() {
  if ( x == false ) {
    x = true;
    startBrowserAction();
  } else {
    x = false;
    endBrowserAction();
  }
}

chrome.browserAction.onClicked.addListener(change_state);
