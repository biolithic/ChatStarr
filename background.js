/* Copyright 2023-2024 biolithic. All rights reserved. */
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "tabUpdated": activeTab }, function(response) { return true; });
  });

  if (info.status === 'complete') {
    if ( tab.url.indexOf("tiktok.com") > -1) {
        chrome.storage.sync.set({"tiktok_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("odysee.com") > -1) {
        chrome.storage.sync.set({"odysee_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("twitch.tv") > -1) {
        chrome.storage.sync.set({"twitch_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("rumble.com") > -1) {
        chrome.storage.sync.set({"rumble_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("youtube.com") > -1) {
        chrome.storage.sync.set({"youtube_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("kick.com") > -1) {
        chrome.storage.sync.set({"kick_site": tab.id}, function() {
      });
    }
    if ( tab.url.indexOf("noice.com") > -1) {
        chrome.storage.sync.set({"noice_site": tab.id}, function() {
      });
    }

    setTimeout(function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"chatloaded": "streamloaded"}, function(response) { return true; });
        chrome.runtime.setUninstallURL('https://www.multistreamchat.com/uninstall');
      });
    }, 1000);
  }
  return true;
});


function handleMessage(request, sender, sendResponse) {
  // console.log(`A content script sent a message: ${request.greeting}`);
  // sendResponse({ response: request.greeting });

  chrome.tabs.query({}, function(tabs) {
        for (var tab of tabs) {
          if (!tab.id) return;
          try {
            var response = chrome.tabs.sendMessage(tab.id, {message: request.greeting} );
          } catch (e) {
            console.error("WHATANError: ", e);
          }
        }
    });

}

chrome.runtime.onMessage.addListener(handleMessage);


/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    chrome.tabs.query({}, function(tabs) {
        for (var tab of tabs) {
          if (!tab.id) return;
          try {
            var response = chrome.tabs.sendMessage(tab.id, {message: request} );
          } catch (e) {
            console.error("WHATANError: ", e);
          }
        }
    });

});
*/

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "clickedmessage": "clicked" }, function(response) { return true; });
    chrome.tabs.sendMessage(activeTab.id, { "clickedTab": activeTab }, function(response) { return true; });
  });

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['open_side_menu.js']
  });
});

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "onInstalled" }, function(response) { return true; });
    });
});

chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": command}, function(response) { return true; });
  });
});