/* Copyright 2023-2024 biolithic. All rights reserved.
variable types:
scbt...Is can be true or false
scbt...Show can be 1 or 2 or 3 (show, blur, hidden)
scbt...Arr is an array
scbtOptions is an object of viewer selected options
scbt...Ref  is a reference to a live DOM element
scbt... is a string

all DOM selector variables are arrays. Use [0] to get the 1st one/single selector
multiple element selector document.body.getElementsByTagName document.body.getElementsByClassName
multiple element selector complex document.body.querySelectorAll

elemArr = array of DOM elements selected
elem = one DOM element from a selected array
str = text string
arr = generic array
arrl = array length
chat = line of chat containing username, message, etc
obj = object
chatObj = chat object
chatObjArr = array of chat objects
username = text string like John
message = text string like hello

indexedDB = window.indexedDB

These are lower case so we dont get confused in selectors
channelid
serviceid
videoid

*/
if ( window.hasOwnProperty('scbtOptions') ) {  } else { window.scbtOptions = {}; }
if ( window.scbtOptions.hasOwnProperty('scbtBorderColor') ) {  } else { window.scbtOptions.scbtBorderColor = '#ff0000'; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature4') ) {  } else { window.scbtOptions.scbtfeature4 = false; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature5') ) {  } else { window.scbtOptions.scbtfeature5 = false; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature15') ) {  } else { window.scbtOptions.scbtfeature15 = 'https://www.archyved.com/'; }

if ( window.hasOwnProperty('scbtchannelid') ) {  } else { window.scbtchannelid = null; }
if ( window.hasOwnProperty('scbtserviceid') ) {  } else { window.scbtserviceid = null; }
if ( window.hasOwnProperty('scbtvideoid') ) {  } else { window.scbtvideoid = null; }

if ( window.hasOwnProperty('scbtCurrentURL') ) {  } else { window.scbtCurrentURL = null; }
if ( window.hasOwnProperty('scbtDbName') ) {  } else { window.scbtDbName = null; }
if ( window.hasOwnProperty('scbtDbNameToSearch') ) {  } else { window.scbtDbNameToSearch = null; }
if ( window.hasOwnProperty('scbtFileName') ) {  } else { window.scbtFileName = null; }
if ( window.hasOwnProperty('scbtFontSize') ) {  } else { window.scbtFontSize = null; }
if ( window.hasOwnProperty('scbtFontUp') ) {  } else { window.scbtFontUp = null; }
if ( window.hasOwnProperty('scbtHeightSize') ) {  } else { window.scbtHeightSize = null; }
if ( window.hasOwnProperty('scbtSearchChat') ) {  } else { window.scbtSearchChat = null; }

if ( window.hasOwnProperty('scbtFullScreenHeightIs') ) {  } else { window.scbtFullScreenHeightIs = false; }
if ( window.hasOwnProperty('scbtFullScreenWidthIs') ) {  } else { window.scbtFullScreenWidthIs = false; }
if ( window.hasOwnProperty('scbtMobileIs') ) {  } else { window.scbtMobileIs = false; }
if ( window.hasOwnProperty('scbtSearchBarActiveIs') ) {  } else { window.scbtSearchBarActiveIs = false; }
if ( window.hasOwnProperty('scbtVODIs') ) {  } else { window.scbtVODIs = false; }
if ( window.hasOwnProperty('scbtVODLoadedIs') ) {  } else { window.scbtVODLoadedIs = false; }
if ( window.hasOwnProperty('scbtVODCommentsLoadedIs') ) {  } else { window.scbtVODCommentsLoadedIs = false; }
if ( window.hasOwnProperty('scbtKeybindOnIs') ) {  } else { window.scbtKeybindOnIs = false; }
if ( window.hasOwnProperty('scbtChannelPageIs') ) {  } else { window.scbtChannelPageIs = false; }
if ( window.hasOwnProperty('scbtPopoutIs') ) {  } else { window.scbtPopoutIs = false; }

if ( window.hasOwnProperty('scbtKickIs') ) {  } else { window.scbtKickIs = false; }
if ( window.hasOwnProperty('scbtOdyseeIs') ) {  } else { window.scbtOdyseeIs = false; }
if ( window.hasOwnProperty('scbtRumbleIs') ) {  } else { window.scbtRumbleIs = false; }
if ( window.hasOwnProperty('scbtTiktokIs') ) {  } else { window.scbtTiktokIs = false; }
if ( window.hasOwnProperty('scbtTwitchIs') ) {  } else { window.scbtTwitchIs = false; }
if ( window.hasOwnProperty('scbtYoutubeIs') ) {  } else { window.scbtYoutubeIs = false; }

if ( window.hasOwnProperty('scbtSideMenuLoadedIs') ) {  } else { window.scbtSideMenuLoadedIs = false; }
if ( window.hasOwnProperty('scbtChatWrapperLoadedIs') ) {  } else { window.scbtChatWrapperLoadedIs = false; }
if ( window.hasOwnProperty('scbtChatMenuLoadedIs') ) {  } else { window.scbtChatMenuLoadedIs = false; }
if ( window.hasOwnProperty('scbtOptionsMenuLoadedIs') ) {  } else { window.scbtOptionsMenuLoadedIs = false; }
if ( window.hasOwnProperty('scbtMentionMenuLoadedIs') ) {  } else { window.scbtMentionMenuLoadedIs = false; }


if ( window.hasOwnProperty('scbtNonBotChatShow') ) {  } else { window.scbtNonBotChatShow = 1; }
if ( window.hasOwnProperty('scbtSubChatShow') ) {  } else { window.scbtSubChatShow = 1; }
if ( window.hasOwnProperty('scbtTextOnlyChatShow') ) {  } else { window.scbtTextOnlyChatShow = 1; }
if ( window.hasOwnProperty('scbtVerifiedChatShow') ) {  } else { window.scbtVerifiedChatShow = 1; }
if ( window.hasOwnProperty('scbtVisibilityChatShow') ) {  } else { window.scbtVisibilityChatShow = 1; }

if ( window.hasOwnProperty('scbtjsonSocialMediaArr') ) {  } else { window.scbtjsonSocialMediaArr = []; }
if ( window.hasOwnProperty('scbtSavingChatIdsArr') ) {  } else { window.scbtSavingChatIdsArr = []; }
if ( window.hasOwnProperty('scbtBlockedWordsArr') ) {  } else { window.scbtBlockedWordsArr = []; }
if ( window.hasOwnProperty('scbtSpokenWordsArr') ) {  } else { window.scbtSpokenWordsArr = []; }
if ( window.hasOwnProperty('scbtSavedStreamsArr') ) {  } else { window.scbtSavedStreamsArr = []; }
if ( window.hasOwnProperty('scbtSearchingMessageIdsArr') ) {  } else { window.scbtSearchingMessageIdsArr = []; }
if ( window.hasOwnProperty('scbtUsernamesArr') ) {  } else { window.scbtUsernamesArr = []; }
if ( window.hasOwnProperty('scbtFollowedChannelsArr') ) {  } else { window.scbtFollowedChannelsArr = []; }

if ( window.hasOwnProperty('scbtVODSecondsTotal') ) {  } else { window.scbtVODSecondsTotal = 1; }
if ( window.hasOwnProperty('scbtVODMinutesLong') ) {  } else { window.scbtVODMinutesLong = 1; }
if ( window.hasOwnProperty('scbtVODSecondsLong') ) {  } else { window.scbtVODSecondsLong = 1; }

if ( window.hasOwnProperty('scbtCategoryLoading') ) {  } else { window.scbtCategoryLoading = {}; } // kick only
if ( window.hasOwnProperty('scbtLivestreamsLoading') ) {  } else { window.scbtLivestreamsLoading = {}; } // kick only



// *** OPTIONS FUNCTIONS
function scbt_helper_save_options() {
  var obj = {};

  // THEME
  var x = document.body.getElementsByClassName('scbttheme1'); // background color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme1'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme1': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme1': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme2'); // user name color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme2'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme2': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme2': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme3'); // highlighted chat color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme3'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme3': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme3': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme4'); // message color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme4'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme4': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme4': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme5'); // font size
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme5'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme5': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme5': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme6'); // text only chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme6'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbttheme6': true}, function() { window.scbtOptions.scbttheme6 = true; scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme6': false}, function() { window.scbtOptions.scbttheme6 = false; scbt_helper_apply_css_from_option(obj) })
      }
    });
  }
  


  // HIGHLIGHT
  x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted1': e.target.value }, function() { window.scbtOptions.scbthighlighted1 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted1': '' }, function() { window.scbtOptions.scbthighlighted1 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted2': e.target.value }, function() { window.scbtOptions.scbthighlighted2 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted2': '' }, function() { window.scbtOptions.scbthighlighted2 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted3': e.target.value }, function() { window.scbtOptions.scbthighlighted3 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted3': '' }, function() { window.scbtOptions.scbthighlighted3 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted4': e.target.value }, function() { window.scbtOptions.scbthighlighted4 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted4': '' }, function() { window.scbtOptions.scbthighlighted4 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted5'); // highlight VIP messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted5': e.target.value }, function() {  window.scbtOptions.scbthighlighted5 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted5': '' }, function() { window.scbtOptions.scbthighlighted5 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted6': e.target.value }, function() { window.scbtOptions.scbthighlighted6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted6': '' }, function() { window.scbtOptions.scbthighlighted6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted7': e.target.value }, function() { window.scbtOptions.scbthighlighted7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted7': '' }, function() { window.scbtOptions.scbthighlighted7 = ''; })
      }
    });
  }


  x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted8': e.target.value }, function() { window.scbtOptions.scbthighlighted8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted8': '' }, function() { window.scbtOptions.scbthighlighted8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted9': e.target.value }, function() { window.scbtOptions.scbthighlighted9 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted9': '' }, function() { window.scbtOptions.scbthighlighted9 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted10': e.target.value }, function() { window.scbtOptions.scbthighlighted10 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted10': '' }, function() { window.scbtOptions.scbthighlighted10 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted11': e.target.value }, function() { window.scbtOptions.scbthighlighted11 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted11': '' }, function() { window.scbtOptions.scbthighlighted11 = ''; })
      }
    });
  }





  
  // MUTE
  x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted1': true}, function() {  window.scbtOptions.scbtmuted1 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted1': false}, function() {  window.scbtOptions.scbtmuted1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted2': true}, function() { window.scbtOptions.scbtmuted2 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted2': false}, function() { window.scbtOptions.scbtmuted2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted3': true}, function() { window.scbtOptions.scbtmuted3 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted3': false}, function() { window.scbtOptions.scbtmuted3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted4': true}, function() { window.scbtOptions.scbtmuted4 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted4': false}, function() { window.scbtOptions.scbtmuted4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted5': true}, function() { window.scbtOptions.scbtmuted5 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted5': false}, function() { window.scbtOptions.scbtmuted5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted6': true}, function() { window.scbtOptions.scbtmuted6 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted6': false}, function() { window.scbtOptions.scbtmuted6 = false; })
      }
    });
  }

  // HIDDEN
  x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden1': true}, function() { window.scbtOptions.scbthidden1 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden1': false}, function() { window.scbtOptions.scbthidden1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden2': true}, function() { window.scbtOptions.scbthidden2 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden2': false}, function() { window.scbtOptions.scbthidden2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden3': true}, function() { window.scbtOptions.scbthidden3 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden3': false}, function() { window.scbtOptions.scbthidden3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden4': true}, function() { window.scbtOptions.scbthidden4 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden4': false}, function() { window.scbtOptions.scbthidden4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden5': true}, function() { window.scbtOptions.scbthidden5 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden5': false}, function() { window.scbtOptions.scbthidden5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden6': true}, function() { window.scbtOptions.scbthidden6 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden6': false}, function() { window.scbtOptions.scbthidden6 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden7': e.target.value }, function() { window.scbtOptions.scbthidden7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden7': '' }, function() { window.scbtOptions.scbthidden7 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden8': e.target.value }, function() { window.scbtOptions.scbthidden8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden8': '' }, function() { window.scbtOptions.scbthidden8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden9': true}, function() { window.scbtOptions.scbthidden9 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden9': false}, function() { window.scbtOptions.scbthidden9 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden10': true}, function() { window.scbtOptions.scbthidden10 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden10': false}, function() { window.scbtOptions.scbthidden10 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden11': true}, function() { window.scbtOptions.scbthidden11 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden11': false}, function() { window.scbtOptions.scbthidden11 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden12': true}, function() { window.scbtOptions.scbthidden12 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden12': false}, function() { window.scbtOptions.scbthidden12 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden13': true}, function() { window.scbtOptions.scbthidden13 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden13': false}, function() { window.scbtOptions.scbthidden13 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden14': true}, function() { window.scbtOptions.scbthidden14 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden14': false}, function() { window.scbtOptions.scbthidden14 = false; })
      }
    });
  }


// parental
  var x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden15': true}, function() { localStorage.setItem("scbthidden15", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden15': false}, function() { localStorage.setItem("scbthidden15", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden16': true}, function() { localStorage.setItem("scbthidden16", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden16': false}, function() { localStorage.setItem("scbthidden16", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden17': true}, function() { localStorage.setItem("scbthidden17", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden17': false}, function() { localStorage.setItem("scbthidden17", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden18': true}, function() { localStorage.setItem("scbthidden18", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden18': false}, function() { localStorage.setItem("scbthidden18", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden19': true}, function() { localStorage.setItem("scbthidden19", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden19': false}, function() { localStorage.setItem("scbthidden19", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden20': true}, function() { localStorage.setItem("scbthidden20", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden20': false}, function() { localStorage.setItem("scbthidden20", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden21': true}, function() { localStorage.setItem("scbthidden21", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden21': false}, function() { localStorage.setItem("scbthidden21", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden22': true}, function() { localStorage.setItem("scbthidden22", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden22': false}, function() { localStorage.setItem("scbthidden22", "0"); });
      }
    });
  }



  // FEATURE
  x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature1': true}, function() { window.scbtOptions.scbtfeature1 = true; window.scbtKeybindOnIs = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature1': false}, function() { window.scbtOptions.scbtfeature1 = false; window.scbtKeybindOnIs = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature2': true}, function() { window.scbtOptions.scbtfeature2 = true; scbt_helper_options_turn_on_keybinds(); window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature2': false}, function() { window.scbtOptions.scbtfeature2 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature3': true}, function() { window.scbtOptions.scbtfeature3 = true; })
      } else {
        chrome.storage.sync.set({'scbtfeature3': false}, function() { window.scbtOptions.scbtfeature3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature4': true}, function() { window.scbtOptions.scbtfeature4 = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature4': false}, function() { window.scbtOptions.scbtfeature4 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature5': true}, function() { window.scbtOptions.scbtfeature5 = true; scbt_helper_chat_auto_show(); })
      } else {
        chrome.storage.sync.set({'scbtfeature5': false}, function() { window.scbtOptions.scbtfeature5 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature6'); // multi-stream-chat-replay server
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature6': e.target.value }, function() { window.scbtOptions.scbtfeature6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbtfeature6': '' }, function() { window.scbtOptions.scbtfeature6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature7'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature7': true}, function() { window.scbtOptions.scbtfeature7 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature7': false}, function() { window.scbtOptions.scbtfeature7 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }


  x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature8'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature8': true}, function() { window.scbtOptions.scbtfeature8 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature8': false}, function() { window.scbtOptions.scbtfeature8 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat 
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature9'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature9': true}, function() { window.scbtOptions.scbtfeature9 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature9': false}, function() { window.scbtOptions.scbtfeature9 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature10': true}, function() { window.scbtOptions.scbtfeature10 = true; scbt_add_listener_for_at_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature10': false}, function() { window.scbtOptions.scbtfeature10 = false; scbt_remove_listener_for_at_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature11': true}, function() { window.scbtOptions.scbtfeature11 = true; scbt_add_listener_for_press_chat_to_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature11': false}, function() { window.scbtOptions.scbtfeature11 = false; scbt_remove_listener_for_press_chat_to_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature12': e.target.value }, function() { window.scbtOptions.scbtfeature12 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature12': '' }, function() { window.scbtOptions.scbtfeature12 = ''; });
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature13'); // multi-stream-chat-replay Account ID
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature13': e.target.value }, function() { window.scbtOptions.scbtfeature13 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature13': '' }, function() { window.scbtOptions.scbtfeature13 = ''; });
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature14'); // multi-stream-chat-replay Account Key ID
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature14': e.target.value }, function() { window.scbtOptions.scbtfeature14 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature14': '' }, function() { window.scbtOptions.scbtfeature14 = ''; });
      }
    });
  }

  return false;
}



function scbt_helper_get_options() {
  chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);

    if (items.scbttheme1) {
      x = document.body.getElementsByClassName('scbttheme1'); // background color
      if (x[0]) {
        x[0].value = items.scbttheme1;
        window.scbtOptions.scbttheme1 = items.scbttheme1;
        var obj  = {};
        obj.a = 'scbttheme1';
        obj.b = items.scbttheme1;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme1 = '';
      }
    }

    if (items.scbttheme2) {
      x = document.body.getElementsByClassName('scbttheme2');  // username color
      if (x[0]) {
        x[0].value = items.scbttheme2;
        window.scbtOptions.scbttheme2 = items.scbttheme2;
        var obj  = {};
        obj.a = 'scbttheme2';
        obj.b = items.scbttheme2;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme2 = '';
      }
    }

    if (items.scbttheme3) {
      x = document.body.getElementsByClassName('scbttheme3'); // highlight color
      if (x[0]) {
        x[0].value = items.scbttheme3;
        window.scbtOptions.scbttheme3 = items.scbttheme3;
        var obj  = {};
        obj.a = 'scbttheme3';
        obj.b = items.scbttheme3;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme3 = '';
      }
    }

    if (items.scbttheme4) {
      x = document.body.getElementsByClassName('scbttheme4'); // message color
      if (x[0]) {
        x[0].value = items.scbttheme4;
        window.scbtOptions.scbttheme4 = items.scbttheme4;
        var obj  = {};
        obj.a = 'scbttheme4';
        obj.b = items.scbttheme4;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme4 = '';
      }
    }

    if (items.scbttheme5) {
      x = document.body.getElementsByClassName('scbttheme5'); // font size
      if (x[0]) {
        x[0].value = items.scbttheme5;
        window.scbtOptions.scbttheme5 = items.scbttheme5;
        var obj  = {};
        obj.a = 'scbttheme5';
        obj.b = items.scbttheme5;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme5 = '';
      }
    }

    if (items.scbttheme6) {
      x = document.body.getElementsByClassName('scbttheme6'); // TEXT ONLY
      if (x[0]) {
        x[0].checked = items.scbttheme6;
        window.scbtOptions.scbttheme6 = items.scbttheme6;
        var obj  = {};
        obj.a = 'scbttheme6';
        obj.b = items.scbttheme6;
        if (items.scbttheme6 === true) {
          scbt_helper_apply_css_from_option(obj);
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbttheme6 = false;
      }
    }

    if (items.scbthighlighted1) {
      x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted1;
        window.scbtOptions.scbthighlighted1 = items.scbthighlighted1;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted1 = '';
      }
    }

    if (items.scbthighlighted2) {
      x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages
      if (x[0]) {
        x[0].value = items.scbthighlighted2;
        window.scbtOptions.scbthighlighted2 = items.scbthighlighted2;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted2 = '';
      }
    }

    if (items.scbthighlighted3) {
      x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted3;
        window.scbtOptions.scbthighlighted3 = items.scbthighlighted3;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted3 = '';
      }
    }

    if (items.scbthighlighted4) {
      x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted4;
        window.scbtOptions.scbthighlighted4 = items.scbthighlighted4;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted4 = '';
      }
    }

    if (items.scbthighlighted5) {
      x = document.body.getElementsByClassName('scbthighlighted5');  // highlight VIP messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted5;
        window.scbtOptions.scbthighlighted5 = items.scbthighlighted5;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted5 = '';
      }
    }

    if (items.scbthighlighted6) {
      x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
      if (x[0]) {
        x[0].value = items.scbthighlighted6;
        window.scbtOptions.scbthighlighted6 = items.scbthighlighted6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted6 = '';
      }
    }

    if (items.scbthighlighted7) {
      x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
      if (x[0]) {
        x[0].value = items.scbthighlighted7;
        window.scbtOptions.scbthighlighted7 = items.scbthighlighted7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted7 = '';
      }
    }

    if (items.scbthighlighted8) {
      x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted8;
        window.scbtOptions.scbthighlighted8 = items.scbthighlighted8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted8 = '';
      }
    }

    if (items.scbthighlighted9) {
      x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted9;
        window.scbtOptions.scbthighlighted9 = items.scbthighlighted9;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted9 = '';
      }
    }

    if (items.scbthighlighted10) {
      x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted10;
        window.scbtOptions.scbthighlighted10 = items.scbthighlighted10;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted10 = '';
      }
    }

    if (items.scbthighlighted11) {
      x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted11;
        window.scbtOptions.scbthighlighted11 = items.scbthighlighted11;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted11 = '';
      }
    }




    if (items.scbtmuted1) {
      x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbtmuted1;
        window.scbtOptions.scbtmuted1 = items.scbtmuted1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted1 = false;
      }
    }

    if (items.scbtmuted2) {
      x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbtmuted2;
        window.scbtOptions.scbtmuted2 = items.scbtmuted2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted2 = false;
      }
    }

    if (items.scbtmuted3) {
      x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
      if (x[0]) {
        x[0].checked = items.scbtmuted3;
        window.scbtOptions.scbtmuted3 = items.scbtmuted3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted3 = false;
      }
    }

    if (items.scbtmuted4) {
      x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
      if (x[0]) {
        x[0].checked = items.scbtmuted4;
        window.scbtOptions.scbtmuted4 = items.scbtmuted4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted4 = false;
      }
    }

    if (items.scbtmuted5) {
      x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted5;
        window.scbtOptions.scbtmuted5 = items.scbtmuted5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted5 = false;
      }
    }

    if (items.scbtmuted6) {
      x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted6;
        window.scbtOptions.scbtmuted6 = items.scbtmuted6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted6 = false;
      }
    }


    if (items.scbthidden1) {
      x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbthidden1;
        window.scbtOptions.scbthidden1 = items.scbthidden1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden1 = false;
      }
    }

    if (items.scbthidden2) {
      x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbthidden2;
        window.scbtOptions.scbthidden2 = items.scbthidden2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden2 = false;
      }
    }

    if (items.scbthidden3) {
      x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
      if (x[0]) {
        x[0].checked = items.scbthidden3;
        window.scbtOptions.scbthidden3 = items.scbthidden3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden3 = false;
      }
    }

    if (items.scbthidden4) {
      x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
      if (x[0]) {
        x[0].checked = items.scbthidden4;
        window.scbtOptions.scbthidden4 = items.scbthidden4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden4 = false;
      }
    }

    if (items.scbthidden5) {
      x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden5;
        window.scbtOptions.scbthidden5 = items.scbthidden5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden5 = false;
      }
    }

    if (items.scbthidden6) {
      x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden6;
        window.scbtOptions.scbthidden6 = items.scbthidden6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden6 = false;
      }
    }

    if (items.scbthidden7) {
      x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
      if (x[0]) {
        x[0].value = items.scbthidden7;
        window.scbtOptions.scbthidden7 = items.scbthidden7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden7 = '';
      }
    }

    if (items.scbthidden8) {
      x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
      if (x[0]) {
        x[0].value = items.scbthidden8;
        window.scbtOptions.scbthidden8 = items.scbthidden8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden8 = '';
      }
    }

    if (items.scbthidden9) {
      x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
      if (x[0]) {
        x[0].checked = items.scbthidden9;
        window.scbtOptions.scbthidden9 = items.scbthidden9;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden9 = false;
      }
    }

    if (items.scbthidden10) {
      x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
      if (x[0]) {
        x[0].checked = items.scbthidden10;
        window.scbtOptions.scbthidden10 = items.scbthidden10;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden10 = false;
      }
    }

    if (items.scbthidden11) {
      x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
      if (x[0]) {
        x[0].checked = items.scbthidden11;
        window.scbtOptions.scbthidden11 = items.scbthidden11;
        scbt_helper_get_sexual_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden11 = false;
      }
    }

    if (items.scbthidden12) {
      x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
      if (x[0]) {
        x[0].checked = items.scbthidden12;
        window.scbtOptions.scbthidden12 = items.scbthidden12;
        scbt_helper_get_profanity_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden12 = false;
      }
    }

    if (items.scbthidden13) {
      x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden13;
        window.scbtOptions.scbthidden13 = items.scbthidden13;
        scbt_helper_get_political_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden13 = false;
      }
    }

    if (items.scbthidden14) {
      x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden14;
        window.scbtOptions.scbthidden14 = items.scbthidden14;
        scbt_helper_get_negative_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden14 = false;
      }
    }



    // parental features
    if (items.scbthidden15) {
      x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
      if (x[0]) {
        x[0].checked = items.scbthidden15;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden16) {
      x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
      if (x[0]) {
        x[0].checked = items.scbthidden16;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden16', '1');
        } else {
          localStorage.setItem('scbthidden16', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden16', '0');
      }
    }

    if (items.scbthidden17) {
      x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
      if (x[0]) {
        x[0].checked = items.scbthidden17;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden17', '1');
        } else {
          localStorage.setItem('scbthidden17', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden17', '0');
      }
    }

    if (items.scbthidden18) {
      x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
      if (x[0]) {
        x[0].checked = items.scbthidden18;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden18', '1');
        } else {
          localStorage.setItem('scbthidden18', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden18', '0');
      }
    }

    if (items.scbthidden19) {
      x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
      if (x[0]) {
        x[0].checked = items.scbthidden19;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden19', '1');
        } else {
          localStorage.setItem('scbthidden19', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden19', '0');
      }
    }

    if (items.scbthidden20) {
      x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
      if (x[0]) {
        x[0].checked = items.scbthidden20;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden20', '1');
        } else {
          localStorage.setItem('scbthidden20', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden20', '0');
      }
    }

    if (items.scbthidden21) {
      x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
      if (x[0]) {
        x[0].checked = items.scbthidden21;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden21', '1');
        } else {
          localStorage.setItem('scbthidden21', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden21', '0');
      }
    }


    if (items.scbthidden22) {
      x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
      if (x[0]) {
        x[0].checked = items.scbthidden22;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden22', '1');
        } else {
          localStorage.setItem('scbthidden22', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden22', '0');
      }
    }





    if (items.scbtfeature1) {
      x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature1;
        window.scbtOptions.scbtfeature1 = items.scbtfeature1;
        if (items.scbtfeature1 === true) {
          window.scbtKeybindOnIs = true;
        } else {
          window.scbtKeybindOnIs = false;
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature1 = false;
        window.scbtKeybindOnIs = false;
      }
    }

    if (items.scbtfeature2) {
      x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature2;
        window.scbtOptions.scbtfeature2 = items.scbtfeature2;
        if (items.scbtfeature2 === true) {
          scbt_helper_options_turn_on_keybinds();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature2 = false;
      }
    }

    if (items.scbtfeature3) {
      x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
      if (x[0]) {
        x[0].checked = items.scbtfeature3;
        window.scbtOptions.scbtfeature3 = items.scbtfeature3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature3 = false;
      }
    }

    if (items.scbtfeature4) {
      x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
      if (x[0]) {
        x[0].checked = items.scbtfeature4;
        window.scbtOptions.scbtfeature4 = items.scbtfeature4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature4 = false;
      }
    }

    if (items.scbtfeature5) {
      x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
      if (x[0]) {
        x[0].checked = items.scbtfeature5;
        window.scbtOptions.scbtfeature5 = items.scbtfeature5;
        scbt_helper_chat_auto_show();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature5 = false;
      }
    }

    if (items.scbtfeature6) {
      x = document.body.getElementsByClassName('scbtfeature6'); // multi-stream-chat-replay server
      if (x[0]) {
        x[0].value = items.scbtfeature6;
        window.scbtOptions.scbtfeature6 = items.scbtfeature6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature6 = '';
      }
    }

    if (items.scbtfeature7) {
      x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat 
      if (x[0]) {
        x[0].checked = items.scbtfeature7;
        window.scbtOptions.scbtfeature7 = items.scbtfeature7;
        var obj  = {};
        obj.a = 'scbtfeature7';
        obj.b = items.scbtfeature7;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature7 = false;
      }
    }

    if (items.scbtfeature8) {
      x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
      if (x[0]) {
        x[0].checked = items.scbtfeature8;
        window.scbtOptions.scbtfeature8 = items.scbtfeature8;
        var obj  = {};
        obj.a = 'scbtfeature8';
        obj.b = items.scbtfeature8;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature8 = false;
      }
    }

    if (items.scbtfeature9) {
      x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat
      if (x[0]) {
        x[0].checked = items.scbtfeature9;
        window.scbtOptions.scbtfeature9 = items.scbtfeature9;
        if (items.scbtfeature9) {
          var obj = {};
          obj.a = 'scbtfeature9';
          obj.b = true;
          scbt_helper_apply_css_from_option(obj);  
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature9 = false;
      }
    }

    if (items.scbtfeature10) {
      x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
      if (x[0]) {
        x[0].checked = items.scbtfeature10;
        window.scbtOptions.scbtfeature10 = items.scbtfeature10;
        if (items.scbtfeature10 === true) {
          scbt_add_listener_for_at_mention_menu();
        } else {
          scbt_remove_listener_for_at_mention_menu();
        }

      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature10 = false;
        scbt_remove_listener_for_at_mention_menu();
      }
    }

    if (items.scbtfeature11) {
      x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
      if (x[0]) {
        x[0].checked = items.scbtfeature11;
        window.scbtOptions.scbtfeature11 = items.scbtfeature11;
        if (items.scbtfeature11 === true) {
          scbt_add_listener_for_press_chat_to_mention_menu();
        } else {
          scbt_remove_listener_for_press_chat_to_mention_menu();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature11 = false;
        scbt_remove_listener_for_press_chat_to_mention_menu();
      }
    }

    if (items.scbtfeature12) {
      x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
      if (x[0]) {
        x[0].value = items.scbtfeature12;
        window.scbtOptions.scbtfeature12 = items.scbtfeature12;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature12 = '';
      }
    }

    if (items.scbtfeature13) {
      x = document.body.getElementsByClassName('scbtfeature13'); // multi-stream-chat-replay Account ID
      if (x[0]) {
        x[0].value = items.scbtfeature13;
        window.scbtOptions.scbtfeature13 = items.scbtfeature13;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature13 = '';
      }
    }

    if (items.scbtfeature14) {
      x = document.body.getElementsByClassName('scbtfeature14'); // multi-stream-chat-replay Account Key ID
      if (x[0]) {
        x[0].value = items.scbtfeature14;
        window.scbtOptions.scbtfeature14 = items.scbtfeature14;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature14 = '';
      }
    }

    if (window.scbtOptions.scbtfeature6 && window.scbtOptions.scbtfeature13 && window.scbtOptions.scbtfeature14) {
      var theURL = '';
      if (window.scbtOptions.scbtfeature6 == '1') {
        window.scbtOptions.scbtfeature15 = 'https://www.archyved.com/';
      }
      if (window.scbtOptions.scbtfeature6 == '2') {
        window.scbtOptions.scbtfeature15 = 'https://www.streamclipsgg.com/';
      }
      if (server) {
        theURL = window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/index.php/?account=' + window.scbtOptions.scbtfeature13 + '&accountkey=' + window.scbtOptions.scbtfeature14;
      }
      x = document.body.getElementsByClassName('scbtMultiStreamChatReplayLink');
      if (x[0]) {
        x[0].href = theURL;
        x[0].innerText = 'Multi Stream Chat Replay Admin';
      }
    }

    scbt_helper_start_chat_logging();    
    x = items = chatElmArr = chatElm = theURL = server = null;
  });
  return false;
} // end scbt_helper_get_options


function scbt_helper_youtube_setup_1() {
  var elemArr = [];
  var myInterval = setInterval(function () {
    if (window.scbtMobileIs === true) {
      elemArr = document.body.querySelectorAll('.slim-owner-channel-name');
    } else {
      elemArr = document.body.querySelectorAll('.ytd-video-owner-renderer .ytd-channel-name');
    }
    if (elemArr[0]) {
      if ( elemArr[0].innerText ) {
        window.scbtchannelid = elemArr[0].innerText.trim();
        window.scbtchannelid = window.scbtchannelid.replace(/ /g, '_');
        window.scbtchannelid = window.scbtchannelid.replace(/\W/g, '');
        clearInterval(myInterval);
        scbt_helper_youtube_setup_2();
        elemArr = myInterval = null; return window.scbtchannelid;
      }
    }
  }, 1000);
  return false;
}


function scbt_helper_youtube_setup_2() {
  if (window.scbtMobileIs === false) {
    var myInterval = setInterval(function () {
      var elemArr = document.body.querySelectorAll('iframe#chatframe');
      if (elemArr[0]) {
        
        if (elemArr[0].contentWindow) {
          if (elemArr[0].contentWindow.document) {
            if (elemArr[0].contentWindow.document.body) {
              clearInterval(myInterval);
              window.scbtVODIs = false;
              window.scbtYTChatIframeRef = elemArr[0];
              window.scbtDbNameToSearch = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
              scbt_helper_get_options();

              if (window.scbtserviceid && window.scbtchannelid && window.scbtvideoid && (window.scbtVODIs === false) ) {
                scbt_get_str_dbname('startSaving');
                var chatElmArr = scbt_get_arr_chats();
                [].forEach.call(chatElmArr, function(chatElm) {
                   scbt_helper_process_chat_line(chatElm, false);
                });
                // scbt_helper_chat_listen();
              }


              elemArr = myInterval = null; return false;
            }
          }
        }

      }
    }, 1000);
  }
  return false;
}  






// ***** DB FUNCTIONS
async function scbt_get_binary_if_db_exists(dbName) {
  var dbFound = false;
  if (dbName) { } else { return dbFound; }
  var arr = await indexedDB.databases();
  if (arr.length > 0) { } else { return dbFound; }

  var arrl = arr.length;
  dbName = dbName.toLowerCase().trim();
  for (var i = 0; i < arrl && !dbFound; i++) {
    var dbNameToCheck = arr[i].name;
    if (arr[i].name) {
      dbNameToCheck = arr[i].name.toLowerCase().trim();
    }
    if (dbNameToCheck === dbName) {
      dbFound = true;
    }
  }
  dbName = arr = arrl = i = dbNameToCheck = null; return dbFound;
}



function scbt_get_arr_of_all_dbnames() {
  window.scbtSavedStreamsArr = [];
  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      window.scbtChatPreviousContentRef.innerHTML = '';
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          var dbArr = scbt_get_arr_from_dbname_string(dbName);
          var obj = {};
          obj.dbName = dbName;
          obj.serviceid = dbArr[1];
          obj.channelid = dbArr[2];
          obj.videoid = dbArr[3];
          window.scbtSavedStreamsArr.push(obj);
        }
      }
      scbt_handler_sort_saved_streams_by_serviceid();
    }
  });
}


function scbt_helper_build_chat_by_dbname_string(dbName) {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function(successObj) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function(completeObj) {
      // console.log('oncomplete')
    };
    transaction.onabort = function(abortObj) {
      scbt_set_db_error_message(transaction.error); return false;
    };
    
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(successAllObj) {
      if (!successAllObj) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 failed.'); }, 2700);  return false; }
      if (!successAllObj.target) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target result failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result.length || successAllObj.target.result.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream not found.'); }, 2700);  return false; }
      
      window.scbtDbNameToSearch = dbName;
      var dbArr = scbt_get_arr_from_dbname_string(window.scbtDbNameToSearch);
      window.scbtChatContentRef.innerHTML = '';
      var chatObjs = successAllObj.target.result;
      var str = chatObjs[0].message;

      // window.scbtChatARef.textContent = 'Saved Chat From ' + chatObjs[0].username + ' on ' + chatObjs[0].message;
      window.scbtChatARef.textContent = 'saved chat from ' + dbArr[2] + ' on ' + dbArr[1] + ': ' + dbArr[3] + ' ' + str;
      window.scbtChatBRef.textContent = '';
      chatObjs = scbt_get_arr_sortedtimes_from_arr(chatObjs);
      [].forEach.call(chatObjs, function(chatObj) {
        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        var chatElmArr = document.body.getElementsByClassName('scbt-chat-line');
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
        scbt_user_chat_down_to_bottom();
        dbArr = null; chatObjs = null; str = null;
      }, 2000);
    };
    store.getAll().onerror = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };
    store.getAll().onblocked = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };

  }; // request.onsuccess
  request.onerror = function(errorObj) {
    scbt_set_db_error_message(errorObj);
     return false;
  };
  request.onblocked = function(errorObj) {
    scbt_set_db_error_message(errorObj);
    return false;
  };
}


function scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr) {
  return new Promise((resolve, reject) => {
    var request = indexedDB.open(dbName, 10);

    request.onupgradeneeded = function() {
      if (!request.result) {
        scbt_set_db_error_message(e); 
        return e;
      }
      var store = request.result.createObjectStore('chat', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('itemid', 'itemid', {unique: true});
      store.createIndex('timestamp', 'timestamp', {unique: false});
      store.createIndex('username', 'username', {unique: false});
      store.createIndex('message', 'message', {unique: false});
      store.createIndex('sub', 'sub', {unique: false});
      store.createIndex('moderator', 'moderator', {unique: false});
      store.createIndex('owner', 'owner', {unique: false});
      store.createIndex('donation', 'donation', {unique: false});
      store.createIndex('newSub', 'newSub', {unique: false});
      store.createIndex('verified', 'verified', {unique: false});
      store.createIndex('gifter', 'gifter', {unique: false});
      store.createIndex('founder', 'founder', {unique: false});
      store.createIndex('og', 'og', {unique: false});
      store.createIndex('staff', 'staff', {unique: false});
      store.createIndex('anevent', 'anevent', {unique: false});
      store.transaction.oncomplete = (eee) => {
        scbt_helper_toast('Status: chat imported successfully.');
        resolve('good');
      }
    };

    request.onsuccess = function() {
      var db = request.result;
      var transaction = db.transaction('chat', 'readwrite', { durability: 'relaxed' } );
      var objectStore = transaction.objectStore('chat');
      [].forEach.call(chatObjArr, function(chatObj) {
        objectStore.put(chatObj);
      });
      transaction.commit();
    };

  });
}


function scbt_user_chat_delete_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  
  window.scbtSearchingMessageIdsArr = [];
  setTimeout(function(){
    var request = indexedDB.deleteDatabase(e.srcElement.dataset.dbname);
    request.onsuccess = function(e2) {
      setTimeout(function(){ scbt_helper_toast('Status: Chat messages from this stream successfully deleted'); scbt_get_arr_of_all_dbnames(); }, 3000);
      e = e2 =dbName = request = error = null; return false;
    }
    request.onerror = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
    request.onblocked = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
   }, 1000);
}


function scbt_user_chat_mark_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }

  var str = localStorage.getItem(window.location.href);
  if (str) {
    localStorage.removeItem(window.location.href);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video will NOT load this livestream chat automatically.'); return false; }, 2700);
  } else {
    localStorage.setItem(window.location.href, e.srcElement.dataset.dbname);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video WILL load this livestream chat automatically.'); return false; }, 2700);
  }
}


function scbt_user_chat_export_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(e.srcElement.dataset.dbname, 10);

  request.onsuccess = function(e2) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
      setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false;
    };
    var store = transaction.objectStore('chat'); 
    
    store.getAll().onsuccess = function(e3) {
      var chatObjArr = e3.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700); return false; }
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      var output = [];
      var titles = 'initial, message, itemid, timestamp, username, sub, moderator, owner, donation, newSub, VIP, gifter, founder, og, staff, anevent, id';
      output.push(titles);
      output.push('\n');
      
      [].forEach.call(chatObjArr, function(chatObj) {
          var row = '';
          var str = '';
          var str2 = '';
          var username = chatObj.username;
          if (username) {
            str = username.replace(/[^a-zA-Z0-9!._\-@\s]/g, ' ');
            str = str.replace(/(\r\n|\n|\r)/gm, "");
            str = str.replaceAll(',', ' ');
            str = str.trim();
          }
          var message = chatObj.message;
          if (message) {
            str2 = message.replace(/\/‘’,‚“”„"`~«´<>/g, ' ');
            str2 = str2.replace(/(\r\n|\n|\r)/gm, "");
            str2 = str2.replaceAll(',', ' ');
            str2 = str2.trim();  
          }
          row = row + str2 + ',';
          row = row + chatObj.itemid + ',';
          row = row + chatObj.timestamp + ',';
          row = row + str + ',';
          row = row + chatObj.sub + ',';
          row = row + chatObj.moderator + ',';
          row = row + chatObj.owner + ',';
          row = row + chatObj.donation + ',';
          row = row + chatObj.newSub + ',';
          row = row + chatObj.verified + ',';
          row = row + chatObj.gifter + ',';
          row = row + chatObj.founder + ',';
          row = row + chatObj.og + ',';
          row = row + chatObj.staff + ',';
          row = row + chatObj.anevent + ',';
          row = row + chatObj.id;
          output.push(row);
          output.push('\n');
      });
    
      var csvString = output.join();
      var output = null;
      csvString = csvString.replace(/\/'"`/g, '');
      csvString = csvString.replace(/%3D/g, '');
      var blob = scbt_get_csv_file_from_str(csvString);
      var csvName = e.srcElement.dataset.dbname + '-chatlog.csv';
      scbt_helper_csv_download(blob, csvName);
      return false;
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  };

  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}


function scbt_get_usernames_for_mention_menu() {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(e) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for mention chat failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {
      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 for mention chat failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target for mention chat failed.'); }, 2700);  return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target result for mention chat failed.'); }, 2700); return false; }

      var chatObjArr = e2.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700);  return false; }
      var sortedchats = chatObjArr.sort(function(a, b) {
        var nameA = a.username;
        if (nameA) {
          nameA = nameA.toUpperCase();
        }
        var nameB = b.username;
        if (nameB) {
          nameB = nameB.toUpperCase();
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      var i = 0;
      [].forEach.call(sortedchats, function(item) {
          var theHTML = '';
          if ( window.scbtUsernamesArr.indexOf(item.username) < 0) {
            theHTML = theHTML + "<li><button class='scbtusername' id='scbtusername" + i + "' tabindex='0'>" + item.username + "</button></li>";
            i = i + 1;
            window.scbtUsernamesArr.push(item.username);
            var elemArr = window.scbtMentionMenuRef.getElementsByTagName('ul');
            if (elemArr[0]) {
              elemArr[0].insertAdjacentHTML('afterbegin', theHTML );
            }
          }
      });
       return false;      
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
       return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  
}


function scbt_user_search_multiple_saved_chat(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
  }
  var str = scbt_get_str_for_search();

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = str + ' beginning a message is being searched for';
    toastMessage2 = str + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    toastMessage = ' stream event search ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }
  if (str.length < 3) {  return false; }
  
  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);  
  window.scbtSavedStreamsArr = [];

  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          window.scbtSavedStreamsArr.push(dbName);

          (async () => {
            var request = await indexedDB.open(dbName, 10);
            request.onsuccess = function(e) {
              if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat result failed.'); }, 2700);  return false; }
              window.scbtSearchingMessageIdsArr = [];
              var db = request.result;
              var transaction = db.transaction('chat', 'readonly');
              transaction.oncomplete = function() {
              };
              transaction.onabort = function() {
                scbt_set_db_error_message(transaction.error);
              };
              var store = transaction.objectStore('chat'); 
              // (async () => {
              store.getAll().onsuccess = function(e2) {
                if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 failed.'); }, 2700);  return false; }
                if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target failed.'); }, 2700);  return false; }
                if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target result failed.'); }, 2700);  return false; }
                var chatObjArr = e2.target.result;
                if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display');  return false; }
                window.scbtChatARef.textContent = 'Saved Chat From All';
                window.scbtChatBRef.textContent = labelMessage;
                chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
                window.scbtChatWrapperRef.classList.add('scbt-bl');

                if (searchType == 'bykeyword') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'byuser') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.username) {
                      if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'full') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                    window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                  });
                }

                if (searchType == 'startswith') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                setTimeout(function() {
                  scbt_add_listener_for_username_insert_into_search();
                  scbt_add_listener_for_click_timestamp_go_to_video();
                  scbt_user_chat_down_to_bottom();
                }, 2000);
            };
            store.getAll().onerror = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
            store.getAll().onblocked = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
          }; // request.onsuccess
          request.onerror = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
          request.onblocked = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
      })(); // async

        }
      }
    }
  }); // indexedDB.databases().then
return false;
}


function scbt_user_search_saved_chat(e) {
  window.scbtSearchingMessageIdsArr = [];
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  if (window.scbtDbNameToSearch) { } else { setTimeout(function(){ scbt_helper_toast('Error: no active or loaded chat to search.'); }, 500); return false; }
  var str = scbt_get_str_for_search();
  if (e.target.classList) {
    if (e.target.classList.contains('scbt-multiple') ) {
      if (e.target.id == 'scbtChatSearchStartsWithButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchUserButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchKeywordButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
    }
  }

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = str + ' beginning a message is being searched for';
    toastMessage2 = str + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    str = 'test';
    toastMessage = ' stream events ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }

  if (str.length < 3) { return false; }

  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);
  var request = indexedDB.open(window.scbtDbNameToSearch, 10);

  request.onsuccess = function(e) {
    if (!request.result) { scbt_helper_toast('Error: get database for live stream chat failed.'); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
      
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {

      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target failed.'); }, 2700); return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target result failed.'); }, 2700);  return false; }
      var chatObjArr = e2.target.result;

      if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display'); return false; }

      var str2 = chatObjArr[0].message;
      var dbArr = scbt_get_arr_from_dbname_string(window.scbtDbNameToSearch);
      window.scbtChatContentRef.innerHTML = '';
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      
      window.scbtChatARef.textContent = dbArr[2] + ' on ' + dbArr[1] + ': ' + dbArr[3] + ' ' + str2;
      window.scbtChatBRef.textContent = labelMessage;
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      window.scbtChatContentRef.classList.add('scbt-bl');
      
      if (searchType == 'byevent') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if ( (chatObj.anevent == 1) || (chatObj.staff === 1) ) {
            var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);
            if (chatObj.message) {
              if (chatObj.message.indexOf('clips.kick.com') > -1) {
                var m = chatObj.message;
                var mArr = m.split('-thumbnail.jpeg');
                var mString = mArr[0];
                var mmArr = mString.split('https://clips.kick.com/clips/');
                var clipID = mmArr[1];
                var mArr = m.split('img ');
                var imgElm = mArr[0] + "<br /><video class='vjs-tech' webkit-playsinline='' playsinline='' controls src='https://clips.kick.com/clips/" + clipID + ".mp4'></video>";
                var theHTML = "<p class='" + classString + "'><span>" + "<span class='author-name'>" + chatObj.username + "</span></span><b>" + imgElm + "</b></p>";
              } else {
                var theHTML = "<p class='" + classString + "'><span>" + " : <span class='author-name'>" + chatObj.username + "</span> </span><b>" + chatObj.message + "</b></p>";
              }
            }
            window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);  
          }
        });
      }

      if (searchType == 'bykeyword') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'byuser') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.username) {
            if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'full') {
        [].forEach.call(chatObjArr, function(chatObj) {
          var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
          window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
        });
      }

      if (searchType == 'startswith') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        scbt_user_chat_down_to_bottom();
        var chatElmArr = document.getElementsByClassName('scbt-chat-line');
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
      }, 2000);

    }; // store.getAll().onsuccess
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }; // request.onsuccess
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}



function scbt_set_db_for_saving(dbName, startSaving) {
  if (!dbName) { 
    console.error('Error: chat database not supported');
    setTimeout(function(){ scbt_helper_toast('Error: chat database not supported'); }, 2700);
    return false;
  }
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function (successObj) {
   if (startSaving == 'startSaving') {
    scbt_helper_chat_listen();
   }
   return request;
  };
  request.onerror = function (errorObj) {
    scbt_set_db_error_message(errorObj);
    return errorObj;
  };
  request.onblocked = function (blockedObj) {
    scbt_set_db_error_message(blockedObj);
    return blockedObj;
  };
  request.onupgradeneeded = function(upgradeObj) {
    if (!request.result) {
      scbt_set_db_error_message(upgradeObj); 
      return upgradeObj;
    }
    var store = request.result.createObjectStore('chat', {
      keyPath: 'id',
      autoIncrement: true,
    });

    store.createIndex('itemid', 'itemid', {unique: true});
    store.createIndex('timestamp', 'timestamp', {unique: false});
    store.createIndex('username', 'username', {unique: false});
    store.createIndex('message', 'message', {unique: false});
    store.createIndex('sub', 'sub', {unique: false});
    store.createIndex('moderator', 'moderator', {unique: false});
    store.createIndex('owner', 'owner', {unique: false});
    store.createIndex('donation', 'donation', {unique: false});
    store.createIndex('newSub', 'newSub', {unique: false});
    store.createIndex('verified', 'verified', {unique: false});
    store.createIndex('gifter', 'gifter', {unique: false});
    store.createIndex('founder', 'founder', {unique: false});
    store.createIndex('og', 'og', {unique: false});
    store.createIndex('staff', 'staff', {unique: false});
    store.createIndex('anevent', 'anevent', {unique: false});

    store.transaction.oncomplete = (completeObj) => {
      request.result.close();
      var obj = {};
      obj.anevent = 0;
      obj.donation = 0;
      obj.founder = 0;
      obj.gifter = 0;
      obj.itemid = '1111';
      obj.mention = 0;
      obj.message = new Date().toISOString().slice(0, 10);
      obj.moderator = 0;
      obj.newSub = 0;
      obj.og = 0;
      obj.owner = 0;
      obj.staff = 0;
      obj.sub = 0;
      obj.timestamp = '00:00AM';
      obj.username = window.scbtchannelid;
      obj.verified = 0;
      scbt_set_db_save_chat_obj(obj);
      return false;
    }
  };
}


function scbt_set_db_save_chat_obj(obj) {
  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(successObj) {
    var db = successObj.target.result;
    var transaction = db.transaction('chat', 'readwrite');
    transaction.oncomplete = function(completeObj) {
    };
    transaction.onabort = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    transaction.onerror = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    var store = transaction.objectStore('chat');
    store.add(obj).onsuccess = function(addObj) {
      scbt_helper_chat_listen();
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
  };
}



function scbt_get_str_dbname(startSaving) {
  if (window.scbtDbName) {
    return window.scbtDbName;
  } else {
    window.scbtDbNameToSearch = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid; // youtube
    chrome.storage.sync.get('scbtfeature4', function (option) {
      if (option) {
        if (option.scbtfeature4 === true) {
          window.scbtOptions.scbtfeature4 = true;
          window.scbtDbName = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
          window.scbtDbNameToSearch = window.scbtDbName;
          scbt_set_db_for_saving(window.scbtDbName, startSaving);
          return window.scbtDbName;
        }
      }
    });
  }
}




// ************* CSV export/import functions

function scbt_get_csv_file_from_str(str) {
  if (str) {
    var csv_mime_type = 'text/csv';
    return new Blob([str], {type: csv_mime_type});
  }
}


function scbt_helper_csv_download(blob, filename) {
  if (blob && filename) {
    var a = document.createElement('a');
    a.setAttribute('download', filename);
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.click();
    URL.revokeObjectURL(url);
  }
  blob = null; filename = null; a = null; url = null; return false;
}


function scbt_helper_csv_import_chat_log_from_chatarr(filename, chatArr) {
  scbt_helper_toast('Status: starting to import chat');
  window.scbtSearchingMessageIdsArr = [];
  if (filename && chatArr) { } else { setTimeout(function(){ scbt_helper_toast('Error: chat not found to import'); }, 2700); return false; }

  var fileNameArr = filename.split('-chatlog');
  fileNameArr = fileNameArr[0];
  var fileNamePartsArr = fileNameArr.split('&');
  var one = fileNamePartsArr[0];    // savedchat
  var two = fileNamePartsArr[1];    // kick
  var three = fileNamePartsArr[2];  // streamer
  var four = fileNamePartsArr[3];   // abc123
  var dbName = one + '&' + two + '&' + three + '&' + four;
    
  if (chatArr.length > 1) {
    var chatObj = {};
    var chatObjArr = [];
    chatArr = chatArr.slice(1);
    var arrl = chatArr.length;
    for (var i = 0; i < arrl; i++) {
      if (chatArr[i][1]) {
        chatArr[i] = chatArr[i].slice(1);
        chatObj.message = chatArr[i][0];
        chatObj.itemid = chatArr[i][1];
        chatObj.timestamp = chatArr[i][2];
        chatObj.username = chatArr[i][3];
        chatObj.sub = Number(chatArr[i][4]);
        chatObj.moderator = Number(chatArr[i][5]);
        chatObj.owner = Number(chatArr[i][6]);
        chatObj.donation = Number(chatArr[i][7]);
        chatObj.newSub = Number(chatArr[i][8]);
        chatObj.verified = Number(chatArr[i][9]);
        chatObj.gifter = Number(chatArr[i][10]);
        chatObj.founder = Number(chatArr[i][11]);
        chatObj.og = Number(chatArr[i][12]);
        chatObj.staff = Number(chatArr[i][13]);
        chatObj.anevent = Number(chatArr[i][14]);
        chatObjArr.push(chatObj);
        chatObj = {};
      }
    }
    scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr);
    return false;
  }
  
}


function scbt_helper_csv_parse_chat_log(data) {
  var chatLineArr = [];
  if (data) {
    var newLinebrk = data.split("\n");
    var arrl = newLinebrk.length;
    for (var i = 0; i < arrl; i++) {
      chatLineArr.push(newLinebrk[i].split(','));
    }
    scbt_helper_csv_import_chat_log_from_chatarr(window.scbtFileName, chatLineArr);
  }
  data = chatLineArr = newLinebrk = arrl = null; return false;
}


function scbt_add_listener_for_uploading_chatlog(e) {
  window.scbtChatLogRef.addEventListener('change', function(e2) {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      if (myFile.name.substring(myFile.name.length - 11) != 'chatlog.csv') {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( (myFile.size < 8) || (myFile.size > 100000000) ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( myFile.type != 'text/csv' ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      window.scbtFileName = myFile.name;
      var reader = new FileReader();
      reader.addEventListener('load', function(e3) {
        scbt_helper_toast('Status: importing chat now.');
        var csvdata = e3.target.result;
        scbt_helper_csv_parse_chat_log(csvdata);
      });
      reader.readAsBinaryString(myFile);
    }
  });
}


// ************** Voice functions
function scbt_helper_chat_speak(str) {
  if (str) {
      var strMatch = str.toLowerCase().trim();
      var arr = window.scbtOptions.scbtfeature12.split(',');
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var str2 = arr[i];
        var str2Match = str2.toLowerCase().trim();
        if ( strMatch.includes(str2Match) ) {
          if ( window.scbtSpokenWordsArr.includes(str) ) {  } else {
            window.scbtSpokenWordsArr.push(str);
            var synth = window.speechSynthesis;
            var voices = synth.getVoices();
            var utterance = new SpeechSynthesisUtterance(t);
            utterance.voice = voices[0];
            synth.speak(utterance);
            utterance.addEventListener('start', e => {
              // console.log('speak start of ' + str);
            });
            utterance.addEventListener('end', e => {
              // console.log('speak end of ' + str);
              str = strMatch = arr = arrl = i = str2 = strMatch = synth = voices = null; return false;
            });
          }
        }
      }
  }
}

function scbt_user_turn_off_voice_commands() {
  window.recognition = null;
  window.SpeechRecognition = null;
  window.SpeechGrammarList = null;
  window.SpeechRecognitionEvent = null;
  return false;
}


function scbt_user_turn_on_voice_commands() {
      window.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      window.recognition.continuous = true;
      window.recognition.lang = 'en-US';
      window.recognition.interimResults = false;
      window.recognition.maxAlternatives = 1;
      window.recognition.start();

      window.recognition.onresult = function(e) {
        if (e) {
          var str = e.results[e.results.length - 1][0].transcript;
          if (str) {
            str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
            str = str.trim();
            str = str.toLowerCase();
            
            if (str == 'computer toggle chat') {
              scbt_user_command1();
              return false;
            }
            if (str == 'computer search chat') {
              scbt_user_command2();
              return false;
            }
            if (str == 'computer search all chat') {
              scbt_user_command4();
              return false;
            }
            if (str == 'computer chat top') {
              scbt_user_chat_up_to_top();
              return false;
            }
            if (str == 'computer chat bottom') {
              scbt_user_chat_down_to_bottom();
              return false;
            }
          }
        }
      }

      window.recognition.onspeechend = function(e) {
        // console.log('onspeechend speech');
        window.recognition.stop();
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
      }

      window.recognition.onnomatch = function(e) {
        // console.log('onnomatch speech');
      }

      window.recognition.onerror = function(e) {
        console.error('on speech error', e);
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
        return false;
      }
}



// ************** API functions
function scbt_helper_get_sexual_json() {
  var url = chrome.runtime.getURL('./sexualterms.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'sexualterms') );
}

function scbt_helper_get_profanity_json() {
  var url = chrome.runtime.getURL('./profanity.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'profanity') );
}

function scbt_helper_get_political_json() {
  var url = chrome.runtime.getURL('./political.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'political') );
}

function scbt_helper_get_negative_json() {
  var url = chrome.runtime.getURL('./negative.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'negative') );
}

function scbt_helper_save_word_list(json, listType) {
  if (listType == 'sexualterms') {
    window.scbtOptions.sexualterms = json;
    if (window.scbtOptions.sexualterms && typeof window.scbtOptions.sexualterms == 'object') {
        Object.entries(window.scbtOptions.sexualterms).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'profanity') {
    window.scbtOptions.profanity = json;
    if (window.scbtOptions.profanity && typeof window.scbtOptions.profanity == 'object') {
      Object.entries(window.scbtOptions.profanity).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'political') {
    window.scbtOptions.political = json;
    if (window.scbtOptions.political && typeof window.scbtOptions.political == 'object') {
      Object.entries(window.scbtOptions.political).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'negative') {
    window.scbtOptions.negative = json;
    if (window.scbtOptions.negative && typeof window.scbtOptions.negative == 'object') {
      Object.entries(window.scbtOptions.negative).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  var json = listType = entry = null; return false;
}


function scbt_user_toggle_clips_menu(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  var elemArr = document.body.getElementsByClassName('scbtClipsToggleMenu');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  var elemArr = document.body.getElementsByClassName('scbtClipsMenuWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  return false;
}


function scbt_user_toggle_load_refresh_menu() {
  // if on the home page, load clips for kick
  if ( (window.scbtserviceid == 'kick') && (window.location.href == 'https://kick.com/') ) {
    scbt_user_toggle_clips_menu();
    return false;
  }
  // load stream chats of this user

  if (window.scbtChannelPageIs === true) {
    scbt_user_toggle_user_chats_menu();
    return false;
  }
  // try to load chat for this VOD
  if (window.scbtVODIs === true) {
    scbt_user_search_for_saved_chat();
    return false;
  }
  // when I push it on a live stream do nothing
  return false;
}


function scbt_user_toggle_user_chats_menu() {
  var channelid = scbt_get_str_channelid();
  var channelArr = [];

  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          if (dbName.indexOf(channelid) > -1) {
            channelArr.push(dbName);
          }
        }
      }
      scbt_some_stuff(channelid, channelArr);
      return false;
    }
  });
}










async function scbt_user_search_for_saved_chat() {
  var str = localStorage.getItem(window.location.href);

  if (str) {
    var dbExists = await scbt_get_binary_if_db_exists(str);
    if (dbExists === true) {
      // loading chat database from localStorage
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      e.srcElement.dataset.dbname = str;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }
  }

  var serviceidStr = scbt_get_str_serviceid();
  var channelidStr = scbt_get_str_channelid();
  var videoidStr = scbt_get_str_videoid();

  if (serviceidStr && channelidStr && videoidStr) {
    var dbStr = 'savedchat' + '&' + serviceidStr + '&' + channelidStr + '&' + videoidStr;
    var dbExists = await scbt_get_binary_if_db_exists(dbStr);
    if (dbExists === true) {
      // loading chat database from indexeddb
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      e.srcElement.dataset.dbname = dbStr;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }
    if (window.scbtserviceid == 'kick') {
      scbt_helper_load_local_chat_from_api(serviceidStr, channelidStr, videoidStr);
    }
  }
  
  if (serviceidStr && channelidStr && videoidStr) {
    // loading chat database from web api
    scbt_helper_load_chat_replay_from_api(serviceidStr, channelidStr, videoidStr);
    return false;
  }

  scbt_helper_toast( 'Status: No VOD chat found for this video.');
  return false;
}


function scbt_helper_load_chat_replay_from_api(serviceid, channelid, videoid) {
  var videoid = window.location.pathname.substr(1);
  videoid = videoid.replace('video/', '');
  if (serviceid && channelid && videoid) { } else { return false; }

  fetch(window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/api/?serviceid=' + serviceid + '&channelid=' + channelid + '&videoid=' + videoid,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  })
  .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
  .then(function(resp){ 

      if ( (typeof resp === 'object') && (resp.uid) && (resp.stream) ) {
        var arr = [];
        var baseURL = window.scbtOptions.scbtfeature15 + 'multi-stream-chat-replay/admin/uploads/' + resp.uid;
        if ( (resp.stream.kick) && (resp.stream.kick[1]) ) {
          arr.push(baseURL + '/' + resp.stream.kick[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.odysee) && (resp.stream.odysee[1]) ) {
          arr.push(baseURL + '/' + resp.stream.odysee[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.rumble) && (resp.stream.rumble[1]) ) {
          arr.push(baseURL + '/' + resp.stream.rumble[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.twitch) && (resp.stream.twitch[1]) ) {
          arr.push(baseURL + '/' + resp.stream.twitch[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.youtube) && (resp.stream.youtube[1]) ) {
          arr.push(baseURL + '/' + resp.stream.youtube[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.youtube2) && (resp.stream.youtube2[1]) ) {
          arr.push(baseURL + '/' + resp.stream.youtube2[1]);
        } else { arr.push('x'); }

        if ( (resp.stream.tiktok) && (resp.stream.tiktok[1]) ) {
          arr.push(baseURL + '/' + resp.stream.tiktok[1]);
        } else { arr.push('x'); }

      }
      scbt_helper_loop_through_resources_from_api_for_chat_replay(arr);
  })
  .catch(error => {
     console.error(error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
  });
}


function scbt_helper_loop_through_resources_from_api_for_chat_replay(arrOfCSVUrls) {
  var count = 1;
  for (var i = 0; i < arrOfCSVUrls.length; i++) {
    scbt_helper_get_chat_for_replay_from_api(arrOfCSVUrls[i], count);
    count = count + 1;
  }
  return false;
}


// function scbt_helper_get_chat_for_replay_from_api(serviceid, channelid, videoid, chatlog)
function scbt_helper_get_chat_for_replay_from_api(chatlog, i) {
    if (i && chatlog && chatlog != 'x') {
     var response = fetch(chatlog)
      .then(response => response.text())
      .then(v => Papa.parse(v))
      .catch(error => console.error(error))
      response.then(v => scbt_helper_populate_chat_for_replay(v, i))
    }
  return false;
}


function scbt_helper_populate_chat_for_replay(resp, i) {
  if (typeof resp === 'object') {
    if (resp.data) {
      var chatArr = resp.data;

      if (window.scbtMobileIs === true) {
        window.scbtSideMenuRef.classList.add('scbt-fl');
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
      }
      window.scbtOptionsMenuRef.classList.remove('scbt-bl');
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
      // window.scbtChatContentRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');  
      window.scbtSearchBarActiveIs = true;

      // window.scbtChatContentRef.innerHTML = '';
      window.scbtChatARef.textContent = 'Saved Chat From ' + chatArr[1][4] + ' on ' + chatArr[1][1];
      window.scbtChatBRef.textContent = '';
    
      [].forEach.call(chatArr, function(chatLine) {
        var theHTML = scbt_helper_build_chat_line_from_arr(chatLine);
        // window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
        if (i == 0) {
          document.getElementsByClassName('scbtChatContent')[0].insertAdjacentHTML('beforeend', theHTML); // kick
          document.getElementsByClassName('scbtChatContent')[0].style.maxHeight = "300px";
        }
        if (i == 1) {
          document.getElementsByClassName('scbtChatContent2')[0].insertAdjacentHTML('beforeend', theHTML); // odysee
          document.getElementsByClassName('scbtChatContent2')[0].style.maxHeight = "300px";
        }
        if (i == 2) {
          document.getElementsByClassName('scbtChatContent3')[0].insertAdjacentHTML('beforeend', theHTML); // rumble
          document.getElementsByClassName('scbtChatContent3')[0].style.maxHeight = "300px";
        }
        if (i == 3) {
          document.getElementsByClassName('scbtChatContent4')[0].insertAdjacentHTML('beforeend', theHTML); // twitch
          document.getElementsByClassName('scbtChatContent4')[0].style.maxHeight = "300px";
        }
        if (i == 4) {
          document.getElementsByClassName('scbtChatContent5')[0].insertAdjacentHTML('beforeend', theHTML); // youtube
          document.getElementsByClassName('scbtChatContent5')[0].style.maxHeight = "300px";
        }
        if (i == 5) {
          document.getElementsByClassName('scbtChatContent6')[0].insertAdjacentHTML('beforeend', theHTML); // youtube vertical
          document.getElementsByClassName('scbtChatContent6')[0].style.maxHeight = "300px";
        }
        if (i == 6) {
          document.getElementsByClassName('scbtChatContent7')[0].insertAdjacentHTML('beforeend', theHTML); // tiktok
          document.getElementsByClassName('scbtChatContent7')[0].style.maxHeight = "300px";
        }

      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        var chatElmArr = document.getElementsByClassName('scbt-chat-line');
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
        scbt_user_chat_down_to_bottom();
      }, 3000);
    }
  }

  return false;
}




// *************** Build functions

function scbt_helper_build_chat_line_from_obj(chatObj, chatObjFirst) {
  var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);
  if (chatObjFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span><s>" + chatObjFirst.username + ' stream on ' + chatObjFirst.message + "</s><br><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  }
  return theHTML;
}


function scbt_helper_build_chat_line_from_arr(chatArr, chatArrFirst) {
  var classString = scbt_get_str_for_chat_classes_from_arr(chatArr);
  if (chatArrFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span>" + chatArrFirst[3] + ' stream on ' + chatArrFirst[3] + "<br><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  }
  return theHTML;
}



function scbt_helper_build_list_of_saved_stream_chat_by_arr(arr) {
  var arrl = arr.length;
  for (var i = 0; i < arrl; i++) {
    var dbName = 'savedchat' + '&' + arr[i].serviceid + '&' + arr[i].channelid + '&' + arr[i].videoid;
    var theHTML = "<p>";
    theHTML = theHTML + "<button class='az2' data-serviceid='" + arr[i].serviceid + "' data-videoid='" + arr[i].videoid + "' data-channelid='" + arr[i].channelid + "'>" + arr[i].channelid + "</button> on ";
    theHTML = theHTML + arr[i].serviceid + " :<br>";
    theHTML = theHTML + "<button class='az3' data-dbname='" + dbName + "'>" + arr[i].videoid + "</button><br>";
    theHTML = theHTML + "<button class='az4' data-dbname='" + dbName + "'>💾</button><br>";
    theHTML = theHTML + "<button class='az5' data-dbname='" + dbName + "'>🗑️</button><br>";
    theHTML = theHTML + "<button class='az6' data-dbname='" + dbName + "'>🎯</button><br>";
    theHTML = theHTML + "</p><p>&nbsp;&nbsp;</p>";
    window.scbtChatPreviousContentRef.insertAdjacentHTML('beforeend', theHTML);
  }
  arr = i = theHTML = null; return false;
}


function scbt_make_toast() {
  var elemArr = document.body.getElementsByClassName('scbtSnackbar');
  var body = document.getElementsByTagName('body');
  if (body[0]) {
    body = body[0];
  }
  if (elemArr[0]) { } else {
    var theHTML = '<div id="scbtSnackbar" class="scbtSnackbar"></div>';
    body.insertAdjacentHTML('afterbegin', theHTML);
    window.scbtSnackbarRef = document.body.getElementsByClassName('scbtSnackbar')[0];
    setTimeout(function(){ scbt_helper_toast('Status: building menus'); }, 500);
  }
  elemArr = null; theHTML = null; return body;
}


// *************** commands/keybinds functions
function scbt_user_command1() {
  scbt_user_theatre_mode();
  return false; 
}

function scbt_user_command2() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  setTimeout(function() {
    if (window.scbtSearchBarActiveIs === true) {
      var e = {};
      e.target = {};
      e.target.id = 'scbtChatSearchFullButton';
      e.delay = 1;
      scbt_user_search_saved_chat(e);
    }
    e = null; return false;
  }, 2000);
}

function scbt_user_command3() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}

function scbt_user_command4() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt23';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}


function scbt_helper_keybind_close() {
  var elemArr = document.body.getElementsByClassName('scbt-options-wrapper');
  [].forEach.call(elemArr, function(elem) {
    elem.classList.remove('scbt-bl');
  });
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatInputRef.focus();
  elemArr = elem = null; return false;
}


function scbt_helper_options_turn_on_keybinds() {
  window.scbtChatARef.textContent = '';
  window.scbtChatBRef.textContent = '';
  window.scbtChatTitleRef.classList.add('scbt-bl');

  window.addEventListener('keydown', function(e) {

    if ( (e.keyCode == '16') && (e.altKey === true) )  {
      // console.log('you pressed shift + Alt to toggle the main menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
        window.scbtSideMenuRef.classList.remove('scbt-bl');
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }

    if ( (e.keyCode == '90') && (e.altKey === true) )  {
      // console.log('you pressed Z + Alt to toggle the scbtChatToggleMenu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
        window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtChatToggleMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt4')[0].focus();
        return false;
      }
    }

    if ( (e.keyCode == '88') && (e.altKey === true) )  {
      // console.log('you pressed Z + Alt to toggle the options menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }


    if ( (e.keyCode == '67') && (e.altKey === true) )  {
      // console.log('you pressed X + Alt to toggle the options menu bring up hide menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsHideTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsHideWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbthidden1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '86') && (e.altKey === true) )  {
      // console.log('you pressed C + Alt to toggle the options menu bring up feature menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsFeaturesTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsFeaturesWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbtfeature1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '66') && (e.altKey === true) )  {
      // console.log('you pressed V + Alt to toggle the options menu bring up save menu');
      if (e.preventDefault) { e.preventDefault(); }
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsSavedTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsSavedWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '81') && (e.altKey === true) )  {
      // console.log('you pressed Q + Alt to toggle Broadcaster Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('owner');
      return false;
    }
    if ( (e.keyCode == '87') && (e.altKey === true) )  {
      // console.log('you pressed W + Alt to toggle Moderator Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('moderator');
      return false;
    }
    if ( (e.keyCode == '69') && (e.altKey === true) )  {
      // console.log('you pressed E + Alt to toggle Sub Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('sub');
      return false;
    }
    if ( (e.keyCode == '82') && (e.altKey === true) )  {
      // console.log('you pressed R + Alt to toggle Sub + Moderator Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('mod_sub');
      return false;
    }
    if ( (e.keyCode == '84') && (e.altKey === true) )  {
      // console.log('you pressed T + Alt to toggle VIP Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('vip');
      return false;
    }
    if ( (e.keyCode == '89') && (e.altKey === true) )  {
      // console.log('you pressed Y + Alt to toggle Donation Chats Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('donation');
      return false;
    }
    if ( (e.keyCode == '85') && (e.altKey === true) )  {
      // console.log('you pressed U + Alt to toggle Mention Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('mention');
      return false;
    }
    if ( (e.keyCode == '73') && (e.altKey === true) )  {
      // console.log('you pressed I + Alt to toggle Hashtag Messages Only');
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('hashtag');
      return false;
    }
    if ( (e.keyCode == '79') && (e.altKey === true) )  {
      // console.log('you pressed O + Alt to toggle OG Messages Only'); 
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_toggle_chats('og');
      return false;
    }
    if ( (e.keyCode == '80') && (e.altKey === true) )  {
      // console.log('you pressed P + Alt to toggle text only chat');  // scbt13
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_text_only();
      return false;
    }
    if ( (e.keyCode == '219') && (e.altKey === true) )  {
      // console.log('you pressed [ + Alt to  View Top of Chat'); // scbt14
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_up_to_top();
      return false;
    }
    if ( (e.keyCode == '221') && (e.altKey === true) )  {
      // console.log('you pressed ] + Alt to  View Bottom of Chat'); // scbt15
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_down_to_bottom();
      return false;
    }
    if ( (e.keyCode == '220') && (e.altKey === true) )  {
      // console.log('you pressed  + Alt to  Change Chat Font Size'); // scbt20
      if (e.preventDefault) { e.preventDefault(); }
      scbt_user_chat_font_size();
      return false;
    }
    e = null; return false;
  });
} // end helper_turn_on_keybinds_from_options



// ****************** GET FUNCTIONS THAT RETURN A VALUE
 
function scbt_get_str_for_search() {
  var str = '';
  str = window.scbtChatSearchInputTextRef.value;
  if (str) {
    str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
    str = str.trim();
  }
  return str;
}


function scbt_get_str_for_chat_classes_from_obj(obj) {
  var str = '';
  if (obj.sub === 1) {
    str = str + ' sub ';
  }
  if (obj.moderator === 1) {
    str = str + ' moderator ';
  }
  if (obj.owner === 1) {
    str = str + ' owner ';
  }
  if (obj.donation === 1) {
    str = str + ' donation ';
  }
  if (obj.newSub === 1) {
    str = str + ' newSub ';
  }
  if (obj.verified === 1) {
    str = str + ' verified vip ';
  }
  if (obj.gifter === 1) {
    str = str + ' gifter ';
  }
  if (obj.founder === 1) {
    str = str + ' founder ';
  }
  if (obj.og === 1) {
    str = str + ' og ';
  }
  if (obj.staff === 1) {
    str = str + ' staff ';
  }
  if (obj.anevent === 1) {
    str = str + ' anevent ';
  }
  obj = null; return str;
}


function scbt_get_str_for_chat_classes_from_arr(arr) {
  var str = '';
  if (arr) {
    if (arr[5] == 1) {
      str = str + ' sub ';
    }
    if (arr[6] == 1) {
      str = str + ' moderator ';
    }
    if (arr[7] == 1) {
      str = str + ' owner ';
    }
    if (arr[8] == 1) {
      str = str + ' donation ';
    }
    if (arr[9] == 1) {
      str = str + ' newSub ';
    }
    if (arr[10] == 1) {
      str = str + ' verified vip ';
    }
    if (arr[11] == 1) {
      str = str + ' gifter ';
    }
    if (arr[12] == 1) {
      str = str + ' founder ';
    }
    if (arr[13] == 1) {
      str = str + ' og ';
    }
    if (arr[14] == 1) {
      str = str + ' staff ';
    }
    if (arr[15] == 1) {
      str = str + ' anevent ';
    }
  }
  arr = null; return str;
}


function scbt_get_obj_cleaned_message_from_obj(obj) {
  if (obj && obj.message) {
    obj.message = obj.message.toLowerCase();
    obj.message = obj.message.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.message = obj.message.replace(/,/g, ' ');
    obj.message = obj.message.replaceAll("’", "");
    obj.message = obj.message.trim();
    if (obj.message.charAt(0) == '!') {
      obj.isBot = 1;
    }
  }
  return obj;
}


function scbt_get_obj_cleaned_username_from_obj(obj) {
  if (obj && obj.username) {
    obj.username = obj.username.toLowerCase();
    obj.username = obj.username.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.username = obj.username.replace(/,/g, ' ');
    obj.username = obj.username.replace(/:/g, '');
    obj.username = obj.username.trim();
    if ( ( obj.username.indexOf('bot') > -1 ) || ( obj.username == 'streamelements') || ( obj.username == 'streamlabs') || ( obj.username == 'tifa lockhart') ) {
      obj.isBot = 1;
    }
  }
  return obj;
}


function scbt_get_str_serviceid() {
  if (window.scbtserviceid != null) { return window.scbtserviceid; }
  var str = window.location.hostname;
  if (str) {
    str = str.replace('www.', '');
    str = str.replace('.com', '');
    str = str.replace('.tv', '');
    str = str.replace('m.', '');  
  }
  window.scbtserviceid = str; str = null; return window.scbtserviceid;
}



function scbt_get_arr_video_elem() {
  var elemArr = document.body.getElementsByTagName('video');
  return elemArr;
}



function scbt_get_arr_sortedtimes_from_arr(arr) {
  if (!arr) {
    return false;
  }
  if (!arr[1]) {
    return arr;
  }
  if (!arr[1].timestamp) {
    return arr;
  }
  if (typeof arr[1].timestamp === 'number') {
    return arr;
  }
  if (arr[1].timestamp.indexOf(':') < 0) {
    return arr;
  }
  return arr.sort(function (a, b) {
    if (parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]) === 0) {
      return parseInt(a.timestamp.split(':')[1]) - parseInt(b.timestamp.split(':')[1]);
    } else {
      return parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]);
    }
  })
}



function scbt_get_str_seconds_from_hour_minute_time(str) {
  str = str.replace('@', '');
  str = str.replace('.', '');
  str = str.trim();
  var p = str.split(':');
  var seconds = 0;
  var m = 1;
  while (p.length > 0) {
      seconds += m * parseInt(p.pop(), 10);
      m *= 60;
  }
  str = null; p = null; m = null;
  return seconds;
}



function scbt_get_binary_role_from_chat_message(elem, parameter) {
  var toReturn = 0;

  if (parameter == 'sub') {
    if ( 
      (elem.classList.contains('sub')) || 
      (elem.querySelector('img[alt="Subscriber"]')) || 
      (elem.querySelector('[data-v-df7f331e]') ) ||
      (elem.querySelector('#badge-subscriber-gradient-1') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'moderator') {
    if ( 
      (elem.classList.contains('moderator')) || 
      (elem.querySelector('[data-v-43d962e8]') ) || 
      (elem.querySelector('path[style="fill: rgb(0, 199, 255);"]') ) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'founder') {
    if ( 
      (elem.classList.contains('founder')) || 
      (elem.querySelector('[data-v-62b88e44]')) || 
      (elem.querySelector('#badge-founder-gradient'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'verified') {
    if ( 
      (elem.classList.contains('verified')) || 
      (elem.classList.contains('vip')) || 
      (elem.querySelector('[data-v-899c5d7d]')) || 
      (elem.querySelector('[data-v-935db34c]')) ||
      (elem.querySelector('[data-v-f55c3249]')) || 
      (elem.querySelector('#badge-verified-gradient')) || 
      (elem.querySelector('#badge-vip-gradient')) || 
      (elem.querySelector('.base-icon.ml-1.text-primary')) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'vip') {
    if ( 
      (elem.classList.contains('vip')) || 
      (elem.querySelector('[data-v-f55c3249]')) || 
      (elem.querySelector('#badge-vip-gradient'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'og') {
    if ( 
      (elem.classList.contains('og')) || 
      (elem.querySelector('[data-v-935db34c]')) || 
      (elem.querySelector('#badge-og-gradient-1'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'owner') {
    if ( 
      (elem.classList.contains('owner')) || 
      (elem.querySelector('[data-v-11d1cc91]')) || 
      (elem.querySelector('[data-v-1c3105ea]')) || 
      (elem.querySelector('#badge-host-gradient-1'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'staff') {
    if ( 
      (elem.classList.contains('staff')) || 
      (elem.querySelector("svg g#surface1 path[d='M 8 14 L 5 11 L 7 5 L 9 5 L 11 11 Z M 8 14 ']")) || 
      (elem.querySelector('[data-v-9200dfef]')) || 
      (elem.querySelector('path[d="M2.07324 1.33331H6.51991V4.29331H7.99991V2.81331H9.47991V1.33331H13.9266V5.77998H12.4466V7.25998H10.9599V8.73998H12.4466V10.22H13.9266V14.6666H9.47991V13.1866H7.99991V11.7066H6.51991V14.6666H2.07324V1.33331Z"]') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'gifter') {
    if ( 
       (elem.classList.contains('gifter')) || 
       (elem.querySelector("svg g[clip-path='url(#clip0_301_17810)']")) || 
       (elem.querySelector("svg g[clip-path='url(#clip0_301_17825)']")) ||
       (elem.querySelector("svg g[clip-path='url(#clip0_301_17815)']"))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  elem = null; parameter = null; return toReturn;
}



function scbt_get_str_military_hours_minutes_from_timestamp(timestamp) {
  timestamp = timestamp.trim(); // 10:01AM
  if (timestamp) {
    if (timestamp.indexOf('AM') > -1) {
      timestamp = timestamp.replace('AM', '');
    } else {
      timestamp = timestamp.replace('PM', '');
      var arr = timestamp.split(':');
      var hours = parseInt(arr[0]);
      hours = hours + 12;
      timestamp = hours + ':' + arr[1];
    }
  }
  arr = hours = null; return timestamp;
}



function scbt_get_number_seconds_difference_from_two_timestamps(startTime, timeToCompare) {
  var diff = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
  var diff2 = Math.floor((diff/1000)/60);
  var seconds = diff2 * 60;
  diff = diff2 = null; return seconds;
}



function scbt_get_arr_from_dbname_string(dbName) {
  var arr = [];
  if (typeof dbName === 'string') {
    var arr = dbName.split('&');
  }
  return arr;
}

// check twitch and others
function scbt_get_obj_filter_blocked_links_from_obj(obj, elem) {
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    if ( (elemArr[0].textContent.indexOf('http') > -1 ) || (elemArr[0].textContent.indexOf('.com') > -1 ) || (elemArr[0].textContent.indexOf('xxx') > -1 ) || (elemArr[0].textContent.indexOf('www.') > -1 ) ) {
      elemArr[0].textContent = '---';
      obj.message = '---';
    }
  }
  elemArr = elem = null; return obj;
}


// I do not want to see these words in chat. Comma separated list. Example: rat,mouse,vermin 
function scbt_get_obj_filter_blocked_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  // get blocked words selected by user
  if (window.scbtBlockedWordsArr.length > 0) {
    arr = window.scbtBlockedWordsArr;
  }
  if (obj.anevent == 1) {
    return obj;
  }
  
  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = elemArr[0].textContent;
    tMatch = tOriginal.toLowerCase().trim();
    arr2 = window.scbtOptions.scbthidden7.split(',');
    fullArr = arr.concat(arr2);
    arrl = fullArr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = fullArr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch.includes(t2Match) ) {
          var regexp = new RegExp(t2Match, 'gi');
          var cleaned = tOriginal.replace(regexp, ' xxx ');
          elemArr[0].textContent = cleaned;
          obj.message = cleaned;
          regexp = null; cleaned = null; 
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these words in chat in big letters. Comma separated list. Example: fun,happy
function scbt_get_obj_filter_highlighted_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.message;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted7.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch.includes(t2Match) ) {
            elemArr[0].style.setProperty('font-size', '3rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');  
          }
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these users chats in big letters. Comma separated list. Example: johnny,sally
function scbt_get_obj_filter_vip_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;
  var elem2Arr = [];
  
  if (window.scbtKickIs) {
    elemArr = elem.getElementsByClassName('chat-entry-username');
  }
  if (window.scbtYoutubeIs) {
    elemArr = elem.querySelectorAll('#author-name');
  }
  if (window.scbtRumbleIs) {
    elemArr = elem.getElementsByClassName('chat-history--username');
  }
  if (window.scbtTiktokIs) {
    elemArr = elem.querySelectorAll("[data-e2e='message-owner-name']");
  }
  if (window.scbtOdyseeIs) {
    elemArr = elem.getElementsByClassName('chat-history--username');
  }

  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.username;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted6.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch == t2Match) {
            elemArr[0].classList.add('vip');
            obj.isHighlighted = window.scbtOptions.scbthighlighted5;
            elemArr[0].style.setProperty('font-size', '3.5rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');
            
            elem2Arr = scbt_get_arr_message_elems_from_parent_element(elem);
            if (elem2Arr[0]) {
              elem2Arr[0].style.setProperty('font-size', '3.5rem', 'important');
              elem2Arr[0].style.setProperty('line-height', '1', 'important');
            }
          } // if ( tMatch == t2Match)
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


// I do not want to see these user chats. Comma separated list. Example: john,mary,bigfoot
function scbt_get_obj_filter_blocked_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  var tOriginal = obj.username;
  if (tOriginal) {
    tMatch = tOriginal.toLowerCase().trim();
    arr = window.scbtOptions.scbthidden8.split(',');
    arrl = arr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = arr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch == t2Match) {
          obj.isHidden = 1;
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


function scbt_helper_chat_make_decisions(obj, elem) {
  if (window.scbtOptions.scbtmuted5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbtmuted6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbthidden5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isHidden = 1;
    }
  }
  if (window.scbtOptions.scbthidden6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isHidden = 1;
    }
  }

  if (window.scbtOptions.scbttheme6 === true) {
    var imgElemArr = elem.getElementsByTagName('img');
    [].forEach.call(imgElemArr, function(imgElm) {
      imgElm.style.display = 'none';
    });
    var iElemArr = elem.getElementsByTagName('i');
    [].forEach.call(iElemArr, function(iElem) {
      iElem.style.display = 'none';
    });
    var svgElemArr = elem.getElementsByTagName('svg');
    [].forEach.call(svgElemArr, function(svgElem) {
      svgElem.style.display = 'none';
    });
  }
  
  // Highlight sub messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted1 != '#ffffff') {
      if (obj.sub === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted1;
      }
  }

  // Highlight gifter messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted11 != '#ffffff') {
    if (obj.gifter === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted11;
    }
  }

  // Highlight VIP messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted5 != '#ffffff') {
    if (elem.classList.contains('vip')) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted5;
    }
  }

  // Highlight founder messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted8 != '#ffffff') {
    if (obj.founder === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted8;
    }
  }

  // Highlight OG messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted9 != '#ffffff') {
    if (obj.og === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted9;
    }
  }

  // Highlight owner messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted10 != '#ffffff') {
    if (obj.owner === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted10;
    }
  }
  
  // Highlight moderator messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted2 != '#ffffff') {
      if (obj.moderator === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted2;
      }
  }
  // Mute owner/streamer messages in chat in dim text 
  if (window.scbtOptions.scbtmuted2 === true) {
      if (obj.owner === 1) {
        obj.isMuted = 1;
      }
  }
  // Hide owner/streamer messages in chat
  if (window.scbtOptions.scbthidden2 === true) {
      if (obj.owner === 1) {
        obj.isHidden = 1;
      }
  }

  if ( (obj.owner === 1) || (obj.moderator === 1) || (obj.sub === 1) || (obj.newSub === 1) || (obj.verified === 1) ) { } else {
    // scbtmuted4 Mute non moderator/sub messages in chat
    if (window.scbtOptions.scbtmuted1 === true) {
      obj.isMuted = 1;
    }
    // scbthidden4 Hide non moderator/sub messages in chat
    if (window.scbtOptions.scbthidden1 === true) {
      obj.isHidden = 1;
    }
  }
    
  // scbtmuted3 Mute bot messages
  if (window.scbtOptions.scbtmuted4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isMuted = 1;
      }
    }
  }
    
  // scbthidden3 Hide bot  messages
  if (window.scbtOptions.scbthidden4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isHidden = 1;
      }
    }
  }

  // Highlight mention messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted3 != '#ffffff') {
    if (obj.mention === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted3;
    }
  }
  // Highlight hashtag messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted4 != '#ffffff') {
    if (obj.hashtag === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted4;
    }
  }
  // Mute @ mention messages in chat in dim text 
  if (window.scbtOptions.scbtmuted3 === true) {
    if (obj.mention === 1) {
      obj.isMuted = 1;
    }
  }
  // Hide @ mention messages in chat 
  if (window.scbtOptions.scbthidden3 === true) {
    if (obj.mention === 1) {
      obj.isHidden = 1;
    }
  }

  return obj;
} // end scbt_helper_chat_make_decisions





// ****************** OTHER FUNCTIONS 
// scbt_handler_ functions are click handlers caused by user interaction
// ********************* set click handlers functions

function scbt_add_listener_for_at_mention_menu() {
  setTimeout(function() {
    if (window.scbtCloseMentionButtonRef && window.scbtCloseMentionButtonRef.id != 'scbtX') {
      window.scbtCloseMentionButtonRef.addEventListener('click', scbt_user_chat_close_mention_menu);  
    }
    if (window.scbtChatInputRef && window.scbtChatInputRef.id != 'scbtX') {
      window.scbtChatInputRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
    }
    if (window.scbtChatSearchInputTextRef && window.scbtChatSearchInputTextRef.id != 'scbtX') {
      window.scbtChatSearchInputTextRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
    }
    return false;
  }, 2000);
}


function scbt_remove_listener_for_at_mention_menu() {
  setTimeout(function() {
    window.scbtCloseMentionButtonRef.removeEventListener('click', scbt_user_chat_close_mention_menu);
    window.scbtChatInputRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
    window.scbtChatSearchInputTextRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
    return false;
  }, 2000);
}


function scbt_add_listener_for_press_chat_to_mention_menu() {
  var elemArr = scbt_get_arr_chats();
  // var elemArr = document.body.getElementsByClassName('chat-entry-content');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.classList.add('scbt-clickable'); }
  });
  setTimeout(function() {
    var elemArr2 = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr2, function(elem2) {
      if (elem2) { elem2.addEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
    elemArr = null; elem = null; elemArr2 = null; elem2 = null; return false;
  }, 2000);
}


function scbt_remove_listener_for_press_chat_to_mention_menu() {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.removeEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
  }, 1000);
  return false;
}


function scbt_add_listener_for_username_insert_into_search() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-username');
  [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_handler_click_username_insert_into_search); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_click_timestamp_go_to_video() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-timestamp');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_click_timestamp_go_to_video); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_saved_chat_from_streams(e) {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('az2');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_go_to_stream); }
    });
    elemArr = document.body.getElementsByClassName('az3');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_load_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az4');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_export_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az5');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_delete_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az6');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_mark_by_videoid); }
    });
    e = elem = elemArr = arrl = null; return false;
  }, 2000);
}


function scbt_add_listener_for_options_menu() {
  var elemArr = document.body.getElementsByClassName('scbtSortByServiceID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_serviceid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChannelID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_channelid); }

  elemArr = document.body.getElementsByClassName('scbtSortByVideoID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_videoid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChan');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_current); }

  elemArr = document.body.getElementsByClassName('scbttwelveOptions');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_helper_toggle_options_wrapper); }

  elemArr = document.body.getElementsByClassName('scbt-options-title');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_for_options_menu, false); }
  });
  return false;
}


function scbt_handler_for_options_menu(e) {
  if (e.target.id == 'scbtOptionsSavedTitle') {
    if (document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.remove('scbt-bl');
      document.body.getElementsByClassName('scbtChatPreviousContent')[0].innerHTML = '';
    } else {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.add('scbt-bl');
      scbt_get_arr_of_all_dbnames();
    }
  } 

  else if (e.target.id == 'scbtOptionsImportTitle') {
    if (document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.remove('scbt-bl');
    } else {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.add('scbt-bl');
    }
  }

  else {
    var elem = e.target.nextElementSibling;
    if (elem) {
      if (elem.classList.contains('scbt-bl') ) {
        elem.classList.remove('scbt-bl');
      } else {
        elem.classList.add('scbt-bl');
      }
    }
  }
}


function scbt_handler_for_chat_mention_menu_keystrokes(e) {
  if (e.key == 'ArrowUp')  {
    if (e.preventDefault) { e.preventDefault(); }
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var previousElm = parentElm.previousSibling;
        if (previousElm) {
          var previousElm1 = previousElm.getElementsByTagName('button');
          if (previousElm1[0]) {
            previousElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'ArrowDown')  {
    if (e.preventDefault) { e.preventDefault(); }
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var nextElm = parentElm.nextSibling;
        if (nextElm) {
          var nextElm1 = nextElm.getElementsByTagName('button');
          if (nextElm1[0]) {
            nextElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'Escape')  {
    if (e.preventDefault) { e.preventDefault(); }
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);  
    scbt_user_chat_close_mention_menu('');
    return false;
  }

  if (e.key == 'Enter')  {
    if (e.preventDefault) { e.preventDefault(); }
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var selectedElem = document.activeElement;
    var str = '';
    if (selectedElem) {
      str = selectedElem.textContent;
    }
    scbt_user_chat_close_mention_menu(str);
    return false;
  }
};


function scbt_handler_for_chat_mention_menu_usernames(e) {
  if (e.preventDefault) { e.preventDefault(); }
  window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
  scbt_user_chat_close_mention_menu(e.target.textContent);
  return false;
};      


function scbt_handler_for_chat_mention_menu(e) {
  if (e.data == '@') {
    scbt_get_usernames_for_mention_menu();
    window.scbtMentionMenuRef.classList.add('scbt-bl');
    window.document.addEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var elemArr = document.body.getElementsByClassName('scbtusername1');
    if (elemArr[0]) {
      elemArr[0].focus();
    }
    elemArr = null;

    var elemArr = document.body.getElementsByClassName('scbtusername');
    [].forEach.call(elemArr, function(elem) {
      if (elem) {
        elem.addEventListener('click', scbt_handler_for_chat_mention_menu_usernames);
      }
    });
  }
  return false;
}

// TODO
function scbt_handler_for_mention_menu_click(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  var str = '';

  if (e.target.classList.contains('chat-history--message') ) {
    var elemArr = document.body.getElementsByClassName('chat--input');

    // not a sub or mod chatting
    if (e.target && e.target.previousElementSibling) {
      var elem = e.target.previousElementSibling;

      if (elem && elem.textContent) {
        str = elem.textContent.trim();
        str = '@' + str + ' ';
        window.scbtChatInputRef.value = str;
        window.scbtChatSearchInputTextRef.value = str;
        if (elemArr[0]) {
          elemArr[0].focus();
        }
        return false;

      } else {
        // sub or mod chatting
        if (elem.previousElementSibling && elem.previousElementSibling.textContent) {
          str = elem.previousElementSibling.textContent.trim();
          str = '@' + str + ' ';
          window.scbtChatInputRef.value = str;
          window.scbtChatSearchInputTextRef.value = str;
          if (elemArr[0]) {
            elemArr[0].focus();
          }
          return false;
        }
      }

    }
  }
  return false;
};



function scbt_handler_sort_saved_streams_by_serviceid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.serviceid.toLowerCase() > b.serviceid.toLowerCase()) ? 1 : ((b.serviceid.toLowerCase() > a.serviceid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_channelid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.channelid.toLowerCase() > b.channelid.toLowerCase()) ? 1 : ((b.channelid.toLowerCase() > a.channelid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_videoid(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}


function scbt_handler_sort_saved_streams_by_current(e) {
  if (e) { if (e.preventDefault) { e.preventDefault(); } }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));

  var arrl = window.scbtSavedStreamsArr.length;
  var arr = [];
  var str = scbt_get_str_channelid();
  if (str) {
    str = str.toLowerCase();
  }
  
  for (var i = 0; i < arrl; i++) {
    if (window.scbtSavedStreamsArr[i].channelid.toLowerCase() == str) {
      arr.unshift(window.scbtSavedStreamsArr[i]);
    } else {
      arr.push(window.scbtSavedStreamsArr[i]);
    }
  }
  scbt_helper_build_list_of_saved_stream_chat_by_arr(arr);
  scbt_add_listener_for_saved_chat_from_streams(arr);
  e = a = b = i = arrl = arr = null; return false;
}


function scbt_handler_click_username_insert_into_search(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.target) {
      if (e.target.textContent) {
        var elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
        if (elemArr[0]) {
          elemArr[0].value = e.target.textContent;
        }
        elemArr = null; e = null;
      }
    }
  }
  return false;
}


// odysee document.body.querySelector('.livestream__comments');
// youtube window.scbtYTChatIframeRef.contentWindow.document.body.querySelectorAll('#item-scroller.yt-live-chat-item-list-renderer #items.yt-live-chat-item-list-renderer');
// rumble document.body.querySelector('#chat-history-list');
// twitch document.body.querySelector('.chat-scrollable-area__message-container');
// tiktok tiktok-1c9cfuz-DivChatMessageList
function scbt_helper_chat_listen() {
  if (window.scbtOptions.observer) { return false; }
  if (window.scbtYoutubeIs) {
    targetNode = window.scbtYTChatIframeRef.contentWindow.document.body.querySelectorAll('#item-scroller.yt-live-chat-item-list-renderer #items.yt-live-chat-item-list-renderer');
  } else {
    targetNode = scbt_get_arr_chatbox_elem();  
  }

  if (targetNode[0]) {
    var config = { childList: true,
                 attributes: false,
                 characterData: false,
                 subtree: false,
                 attributeOldValue: false,
                 characterDataOldValue: false 
               };
    var callback = function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              if (mutation.addedNodes) {
                var arrl = mutation.addedNodes.length;
                for (var i=0; i < arrl; i++) { 
                  scbt_helper_process_chat_line(mutation.addedNodes[i], true);
                  if (window.scbtOptions.scbtfeature8 === true) {
                    var elem = document.body.querySelector('.overflow-y-scroll.py-3');
                    var str = elem.scrollHeight;
                    elem.scrollTop = "-" + str;
                  }
                }
              }  // if (mutation.addedNodes) {
            }   // end if (mutation.type === 'childList') {      
       } // end for(const mutation of mutationsList) {
    };  // end var callback = function(mutationsList, observer) {

    if (window.scbtOptions) {
      window.scbtOptions.observer = new MutationObserver(callback);
      window.scbtOptions.observer.observe(targetNode[0], config);
    }
  }
  return false;
}


function scbt_helper_chat_blur(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.borderBottom = '1px dotted ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_on(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.borderBottom = '2px solid ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_off(elem) {
  elem.style.paddingLeft = 'initial';
  elem.style.paddingRight = 'initial';
  elem.style.borderBottom = '0px';
}

function scbt_helper_chat_set_to_hide(elem) {
  elem.style.opacity = 0;
  return false;
}

function scbt_helper_chat_set_to_highlight(elem, color) {
  elem.style.setProperty('border-left', '2px solid ' + color, 'important');
  elem.style.setProperty('border-right', '2px solid ' + color, 'important');
  return false;
}

function scbt_helper_chat_set_to_mute(elem) {
  elem.style.opacity = '.3';
  return false;
}

function scbt_helper_chat_set_to_show(elem) {
  elem.style.opacity = '1';
  return false;
}

function scbt_helper_copy_text_to_clipboard(str) {
  var toShare = window.location.href;
  if (typeof str == 'string') {
    toShare = str;
  }
  navigator.clipboard.writeText(toShare).then(function() {
    setTimeout(function(){ scbt_helper_toast('copied to clipboard'); str = toShare = null; return false; }, 500);
  }, function(err) {
    alert(err);
    console.error(err);
    str = toShare = null; return false;
  });
}


function scbt_helper_comments_set_up() {
  window.scbtVODCommentsLoadedIs = true;
  var elemArr = document.body.querySelectorAll('#video-comments');
  if (elemArr[0]) {
    var commentElemArr = elemArr[0].querySelectorAll('.comment-item .comment-text');
    [].forEach.call(commentElemArr, function(commentElem) {
      if (commentElem.textContent) {
        var arr = commentElem.textContent.split(' ');
        var arrl = arr.length;
        for (var i=0; i < arrl; i++) {
          var str = arr[i];
          if (str) {
            str = str.trim();  
          }
          var isTimeHas = /:\d\d/.test(str);
          if (isTimeHas === true) {
            var seconds = scbt_get_str_seconds_from_hour_minute_time(str);
            commentElem.setAttribute('data-seconds', seconds);
            commentElem.addEventListener('click', scbt_helper_go_to_timestamp_in_video);
            commentElem.style.cursor = 'pointer';
          }
        }
      }
    });
  }
  return false;
}


function scbt_helper_go_to_timestamp_in_video(e) {
  window.scbtVODLoadedIs = true;
  var seconds = e;
  if (e) {
    if (e.target) {
      if (e.target.dataset) {
        if (e.target.dataset.seconds) {
         seconds = e.target.dataset.seconds;
        }
      }
    }
  }
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    if (videoEl[0].readyState > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      videoEl[0].currentTime = Number(seconds);
      videoEl[0].play();
      videoEl = null;
    }
  }
  return false;
}


function scbt_helper_do_coming_soon_message() {
  scbt_helper_toast('Status: Coming soon in later versions in 2023');
  return false;
}


function scbt_helper_share_native_disabled(e) { 
  if (e) {
    if (navigator.share) { } else {
      e.classList.add('disabled');
    }
  }
  e = null; return false;
}


function scbt_helper_toast(theText) {
  window.scbtSnackbarRef.textContent = theText;
  window.scbtSnackbarRef.className = 'show';
  setTimeout(function(){ window.scbtSnackbarRef.className = window.scbtSnackbarRef.className.replace('show', ''); }, 2500);
  return false;
}


// put cursor into chat box to type via keybind
function scbt_user_chat_focus(e) {
  window.scbtChatInputRef.focus();
  e = null; return false;
}


function scbt_helper_toggle_options_wrapper(e) {
  var elemArr = document.body.getElementsByClassName('scbttwelveOptionsWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  elemArr = null; return false;
}





function scbt_helper_is_element_visible(el) {
  var rect     = el.getBoundingClientRect();
  var vWidth   = window.innerWidth || document.documentElement.clientWidth;
  var vHeight  = window.innerHeight || document.documentElement.clientHeight;
  var efp      = function(x, y) { return document.elementFromPoint(x, y) };     
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
    return false;
  }
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}


function scbt_helper_process_chat_line(elem, currentChatLine) {
  var obj = {};
  obj.isHighlighted = 0;
  obj.isMuted = 0;
  obj.isHidden = 0;
  obj.isBot = 0;
  obj.hashtag = 0;
  obj.mention = 0;

  obj.anevent = 0;
  obj.donation = 0;
  obj.founder = 0;
  obj.gifter = 0;
  obj.moderator = 0;
  obj.newSub = 0;
  obj.og = 0;
  obj.owner = 0;
  obj.staff = 0;
  obj.sub = 0;
  obj.timestamp = '00:02AM';
  obj.verified = 0;

  obj = scbt_helper_chat_clean(obj, elem);

  if (window.scbtOptions.scbthidden9) {
    obj = scbt_get_obj_filter_blocked_links_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden7) {
    obj = scbt_get_obj_filter_blocked_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted7) {
    obj = scbt_get_obj_filter_highlighted_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted6) {
    obj = scbt_get_obj_filter_vip_users_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden8) {
    obj = scbt_get_obj_filter_blocked_users_from_obj(obj, elem);
  }

  obj = scbt_helper_chat_make_decisions(obj, elem);

  if (obj.isHighlighted != 0) {
    scbt_helper_chat_set_to_highlight(elem, obj.isHighlighted);
  }
  if (obj.isMuted === 1) {
    scbt_helper_chat_set_to_mute(elem);
  }
  if (obj.isHidden === 1) {
    scbt_helper_chat_set_to_hide(elem);
  }

  // click on message to mention in chat (for mobile)
  if (window.scbtOptions.scbtfeature11 === true) {
    var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
    if (elemArr[0]) {
      elemArr[0].addEventListener('click', scbt_handler_for_mention_menu_click, false);  
      elemArr = null;
    }
  }

  // speak out loud chat with keywords
  if (window.scbtOptions.scbtfeature12 && window.scbtOptions.scbtfeature12 != '' && currentChatLine === true) {
    scbt_helper_chat_speak(obj.message);
  }

  // console.log('because we are saving?   going to save this chat line: ' + obj.username + ' MMM ' + obj.message + ' ' + obj.isBot + ' to DBNAME ' + window.scbtDbName);
  // console.log(obj); ' + window.scbtOptions.scbtfeature4 + ' ' + currentChatLine + '
  // return false;

  if (window.scbtDbName) { } else {  elem = currentChatLine = obj = null; return false; }
  if (obj.isBot > 0) {  elem = currentChatLine = obj = null; return false; }
  if ( (obj.itemid) && (obj.username) && (obj.message) ) { } else { elem = currentChatLine = obj = null; return false; }

  if ( (window.scbtOptions.scbtfeature4 === true) && (currentChatLine === true) && window.scbtDbName && obj ) {
    delete obj.isHighlighted;
    delete obj.isMuted;
    delete obj.isHidden;
    delete obj.isBot;
    delete obj.hashtag;
    delete obj.mention;
    try {
      scbt_set_db_save_chat_obj(obj);
      // obj.service = window.scbtserviceid;
      // obj.channelid = window.scbtchannelid;
      // notifyBackgroundPage(obj);
      elem = currentChatLine = obj = null; return false;
    } catch (errorx) {
      console.error('chat save error ', errorx);
      elem = currentChatLine = obj = errorx = null; return false;
    }
  } 
}


function notifyBackgroundPage(obj) {
  var sending = chrome.runtime.sendMessage({
    greeting: obj,
  });
  sending.then(handleResponse, handleError);
}
function handleResponse(message) {

}
function handleError(error) {
  console.error('chat save error ', error);
  return false;
}


function scbt_set_chat_parameter(parameter, visibility) {
  var str = '';
  
  if (parameter == 'owner') {
    if (visibility == 1) {
      str = ' - broadcaster chats -';
    }
    if (visibility == 2) {
      str = ' - non broadcaster chats -';
    }
  }

  if (parameter == 'moderator') {
    if (visibility == 1) {
      str = ' - mod chats -';
    }
    if (visibility == 2) {
      str = ' - non mod chats -';
    }
  }

  if (parameter == 'sub') {
    if (visibility == 1) {
      str = ' - sub chats -';
    }
    if (visibility == 2) {
      str = ' - non sub chats -';
    }
  }

  if (parameter == 'newSub') {
    if (visibility == 1) {
      str = ' - new sub chats -';
    }
    if (visibility == 2) {
      str = ' - non new sub events -';
    }
  }

  if (parameter == 'mod_sub') {
    if (visibility == 1) {
      str = ' - sub+mod chats -';
    }
    if (visibility == 2) {
      str = ' - non sub+mod chats -';
    }
  }

  if ( (parameter == 'vip') || (parameter == 'verified') ) {
    if (visibility == 1) {
      str = ' - vip/verified chats -';
    }
    if (visibility == 2) {
      str = ' - non vip/verified chats -';
    }
  }

  if (parameter == 'donation') {
    if (visibility == 1) {
      str = ' - donation chats -';
    }
    if (visibility == 2) {
      str = ' - non donation chats -';
    }
  }
  
  if (parameter == 'mention') {
    if (visibility == 1) {
      str = ' - mention chats -';
    }
    if (visibility == 2) {
      str = ' - non mention chats -';
    }
  }

  if (parameter == 'hashtag') {
    if (visibility == 1) {
      str = ' - hashtag chats -';
    }
    if (visibility == 2) {
      str = ' - non hashtag chats -';
    }
  }

  parameter = null; visibility = null; return str;
}


function scbt_user_chat_load_by_videoid(e) {
  if (!e) { return false; }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.dbname) { return false; }
  if (e.preventDefault) { e.preventDefault(); }
  
  scbt_helper_build_chat_by_dbname_string(e.srcElement.dataset.dbname);

  if (window.scbtMobileIs === true) {
    window.scbtSideMenuRef.classList.add('scbt-fl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatWrapperRef.classList.add('scbt-bl');
  window.scbtChatTitleRef.classList.add('scbt-bl');
  // window.scbtChatContentRef.classList.add('scbt-bl');
  window.scbtChatMenuRef.classList.add('scbt-fl');  
  window.scbtSearchBarActiveIs = true;
  return false;
}


function scbt_user_chat_close_mention_menu(username) {
  if (!username.target) {
      if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
          var str = window.scbtChatSearchInputTextRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatSearchInputTextRef.value = '@' + username + ' ';
          }
          window.scbtChatSearchInputTextRef.focus();
      } else {
          var str = window.scbtChatInputRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatInputRef.value = str + username + ' ';
          }
          window.scbtChatInputRef.focus();
      }
  }
  window.scbtMentionMenuRef.classList.remove('scbt-bl');
  username = str = null; return false;
}


// view stream in full screen mode
function scbt_full_screen_video() {
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    videoEl[0].requestFullscreen();
  }
  videoEl = null; return false;
}


function scbt_user_go_to_stream(e) {
  if (!e) { return false; }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.channelid) { return false; }

  var str = e.target.dataset.channelid;
  if (e.target.dataset.serviceid == 'odysee') {
    window.open('https://odysee.com/$/search?q=' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'rumble') {
    str = str.replace(/ /g, '');
    str = str.replace(/_+/g, '');
    window.open('https://rumble.com/c/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'kick') {
    window.open('https://kick.com/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'tiktok') {
    window.open('https://www.tiktok.com/@' + str, '_blank');
  }
  if (e.target.dataset.serviceid == 'twitch') {
    window.open('https://twitch.tv/' + str, '_blank');
  }
  if (e.target.dataset.serviceID == 'youtube') {
    str = str.replace(/ /g, '+');
    window.open('https://www.youtube.com/results?search_query=' + str,'_blank');
  }
  e = null; str = null; return false;
}


function scbt_user_search_chat_toggle(e) {
  if (!window.scbtDbNameToSearch) { 
    window.scbtChatTitleRef.classList.remove('scbt-bl');
    scbt_user_search_chat_toggle_close();
    scbt_helper_toast( ' No active stream or VOD chat '); 
    return false;
  } 

  var str = 'abcxyz';
  if (e) {
    if (e.target) {
      str = e.target.id;
    }
  }

  if ( (window.scbtvideoid && window.scbtDbName) || (window.scbtDbNameToSearch != null) || (window.scbtMobileIs === true) || (str == 'scbtCloseButton') ) { } else { scbt_helper_toast('You can only search a stream chat on a livestream. Please find an active livestream.'); return false; }
  window.scbtChatTitleRef.classList.add('scbt-bl');

  if (e) {
    if (e.target) {
      if (e.target.id == 'scbt22') {
        window.scbtSearchChat = 'current';
        window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
      }
      if (e.target.id == 'scbt23') {
        window.scbtSearchChat = 'previous';
        window.scbtChatSearchStartsWithButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.add('scbt-multiple');

        if (window.scbtChatMenuRef.classList.contains('scbt-fl') ) {
          return false;
        }

      }
    }
  }

  // opening
  if (window.scbtSearchBarActiveIs === false) {
    scbt_user_search_chat_toggle_open();
    return false;
  }
  // closing
  if (window.scbtSearchBarActiveIs === true) {
    scbt_user_search_chat_toggle_close();
    return false;
  }
}


function scbt_user_search_chat_toggle_open() {
    window.scbtChatContentRef.innerHTML = '';
    if (window.scbtSearchChat == 'current') {
      window.scbtChatARef.textContent = 'Search this stream chat';
    } else {
      window.scbtChatARef.textContent = 'Search previous stream chat';
    }
    if (window.scbtMobileIs === true) {
      window.scbtSideMenuRef.classList.add('scbt-fl');
    }
    
    window.scbtChatMenuRef.classList.add('scbt-fl');
    window.scbtChatWrapperRef.classList.add('scbt-bl');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.focus();
    window.scbtSearchBarActiveIs = true;
    return false;
}


function scbt_user_search_chat_toggle_close() {
    window.scbtChatContentRef.innerHTML = '';
    window.scbtChatARef.textContent = '';
    window.scbtChatBRef.textContent = '';
    if (window.scbtMobileIs === true) { 
      window.scbtSideMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
    }
    window.scbtChatMenuRef.classList.remove('scbt-fl');
    window.scbtChatWrapperRef.classList.remove('scbt-bl');
    window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.blur();
    window.scbtSearchBarActiveIs = false;
    window.scbtDbNameToSearch = window.scbtDbName;
    return false;
}


function scbt_user_search_chat_by_keyword(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchKeywordButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_by_user(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchUserButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_by_events(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchEventsButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_full(e) {
scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchFullButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_starts_with(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchStartsWithButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_toggle_chat_filter_menu() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtMobileIs === true) {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      window.scbtChatToggleMenuRef.classList.remove('scbt-fl');
      // window.scbtChatTitleRef.classList.remove('scbt-bl');
      window.scbtChatARef.textContent = '';
      window.scbtChatBRef.textContent = '';
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      window.scbtChatToggleMenuRef.classList.add('scbt-fl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
    }
  }
  return false;
}


function scbt_user_toggle_chat_menu() {
  var elemArr = [];

  if (window.scbtDbName || window.scbtDbNameToSearch) {
    
  } else {

  }

  if (window.scbtMobileIs === true) {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  }
  return false;
}


function scbt_user_toggle_options_menu(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (e.target) {
      if (e.target.id == 'scbt2') {
        if (e.target.classList.contains('focused') ) {
          e.target.classList.remove('focused');
        } else {
          e.target.classList.add('focused');
        }
      } 
    }
  }

  var elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
  if (elemArr[0]) {
    if (elemArr[0].className.match('scbt-bl') ) { 
      elemArr[0].classList.remove('scbt-bl');
      
      var elem2Arr = document.body.getElementsByClassName('scbtClipsMenuWrapper');
      if (elem2Arr[0]) {
        elem2Arr[0].remove('scbt-bl');
      }
      elem2Arr = document.body.getElementsByClassName('scbtClipsMenuTitle');
      if (elem2Arr[0]) {
        elem2Arr[0].innerHTML = '';
      }
      elem2Arr = document.body.getElementsByClassName('scbtClipsMenuContent');
      if (elem2Arr[0]) {
        elem2Arr[0].innerHTML = '';
      }
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  e = elemArr = elem2Arr = null; return false;
}


function scbt_handler_click_timestamp_go_to_video(e) {
  if (e) { } else { console.error('error1', e); return false; }
  if (e.target) { } else { console.error('error2', e);  return false; }
  if (e.target.innerText) { } else { console.error('error3', e);  return false; }      

  var startTimeEl = document.body.getElementsByClassName('scbt-chat-timestamp');
  if (startTimeEl[1]) {
    var startTime = startTimeEl[1].innerText; // 12:42PM 
    if (startTime) {
      startTime = startTime.trim();
      if (startTime.indexOf('AM') > -1) {
        startTime = startTime.replace('AM', '');
      }
      if (startTime.indexOf('PM') > -1) {
        startTime = startTime.replace('PM', '');
        var arr = startTime.split(':');
        var hours = parseInt(arr[0]);
        if (hours > 12) {
          hours = hours + 12;
        }
        startTime = hours + ':' + arr[1];
      }
    }
  }

  var timeToCompare = e.target.innerText; // 02:42PM 
  if (timeToCompare) {
    timeToCompare = timeToCompare.trim();
    if (timeToCompare.indexOf('AM') > -1) {
      timeToCompare = timeToCompare.replace('AM', '');
    }
    if (timeToCompare.indexOf('PM') > -1) {
      timeToCompare = timeToCompare.replace('PM', '');
      var arr = timeToCompare.split(':');
      var hours = parseInt(arr[0]);
      if (hours < 12) {
        hours = hours + 12;
      }
      timeToCompare = hours + ':' + arr[1];
    }
  }

  if (startTime && timeToCompare) {
    var diff1 = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
    var diff2 = Math.floor((diff1/1000)/60);
    var seconds = diff2 * 60;
    scbt_helper_go_to_timestamp_in_video(seconds);
  }
  return false;
}





function scbt_set_db_error_message(error) {
  console.error('Error: getting and displaying saved chat failed or blocked for db: ' + window.scbtDbName);
  if (error) {
    console.error(error);
    if (typeof error === 'string') {
      // console.error(error);
    }
    if (error.target) {
      if (error.target.transaction) {
        if (error.target.transaction.error) {
          // console.error('typeof error.target.transaction.error');
          // console.error(typeof error.target.transaction.error);
          // console.error(error.target.transaction.error);
          if (error.target.transaction.error.message) {
            // console.error('typeof error.target.transaction.error.message');
            // console.error(typeof error.target.transaction.error.message);
            // console.error(error.target.transaction.error.message);
          }
          if (error.target.transaction.error.message.indexOf('uniqueness requirements') > -1) {
            // console.error('no unique id cannot be saved');
          }
        } 
      } 
    }
  }
}


function scbt_set_vod_length() {
  // duration is 30449.461 SECONDS, minutes is: 507,  seconds is: 29.46099999999933
  var elemArr = scbt_get_arr_video_elem();
  if (elemArr[0]) {
    if (elemArr[0].readyState > 0) {
      window.scbtVODSecondsTotal = parseInt(elemArr[0].duration);
      window.scbtVODMinutesLong = parseInt(elemArr[0].duration / 60, 10);
      window.scbtVODSecondsLong = parseInt(elemArr[0].duration % 60);
    }
  }
  elemArr = null; return false;
}


























// DIFFERENT FUNCTIONS - these functions are different bewtween extentions

function scbt_get_arr_message_elems_from_parent_element(elem) {
  var elemArr = [];
  if (elem) {
    if (window.scbtKickIs) {
      elemArr = elem.getElementsByClassName('chat-entry-content');
    }
    if (window.scbtOdyseeIs) {
      elemArr = elem.getElementsByClassName('livestream-comment__text');
    }
    if (window.scbtRumbleIs) {
      elemArr = elem.getElementsByClassName('chat-history--message');
    }
    if (window.scbtTiktokIs) {
      elemArr = elem.querySelectorAll("div[class*='DivComment']");
    }
    if (window.scbtTwitchIs) {
      // TODO
    }
    if (window.scbtYoutubeIs) {
      elemArr = elem.querySelectorAll('#message');
      if (elemArr[0]) {
        return elemArr;
      }
    }
  }
  elem = null; return elemArr;
}


function scbt_get_arr_username_elems_from_parent_element(elem) {
  var elemArr = [];
  if (elem) {
    if (window.scbtKickIs) {
      elemArr = elem.getElementsByClassName('chat-entry-username');
    }
    if (window.scbtOdyseeIs) {
      elemArr = elem.getElementsByClassName('livestream-comment__meta-information');
    }
    if (window.scbtRumbleIs) {
      elemArr = elem.getElementsByClassName('chat-history--message');
    }
    if (window.scbtTiktokIs) {
      elemArr = [];
    }
    if (window.scbtTwitchIs) {
      elemArr = elem.querySelectorAll('.video-chat__message-author');
      if (elemArr[0]) {
        return elemArr;
      }
      elemArr = elem.querySelectorAll('.chatter-name'); 
      if (elemArr[0]) {
        return elemArr;
      }
      elemArr = elem.querySelectorAll('.chat-author__display-name');
      if (elemArr[0]) {
        return elemArr;
      }
      elemArr = elem.querySelectorAll('.chat-line__username');
      if (elemArr[0]) {
        return elemArr;
      }
      if (elem.classList.contains('user-notice-line') ) {
        return elem;
      }
    }
    if (window.scbtYoutubeIs) {
      // TODO
    }
  }
  elem = null; return elemArr;
}


function scbt_get_arr_chats() {
  var elemArr = [];
  if (window.scbtKickIs) {
    elemArr = document.body.getElementsByClassName('mt-0.5');
  }
  if (window.scbtOdyseeIs) {
    elemArr = document.body.getElementsByClassName('livestream__comment');
  }
  if (window.scbtRumbleIs) {
    elemArr = document.body.getElementsByClassName('chat-history--row');
  }
  if (window.scbtTiktokIs) {
    elemArr = document.body.querySelectorAll('[data-e2e="chat-message"]');
  }
  if (window.scbtTwitchIs) {
    if (window.scbtVODIs) {
      elemArr = document.body.getElementsByClassName('.video-chat__message');
    } else {
      // elemArr = document.body.querySelectorAll('.text-fragment, .mention-fragment, .user-notice-line, .chat-line__message--cheer-amount');
      elemArr = document.body.querySelectorAll('.chat-line__message, .user-notice-line, .chat-line__message--cheer-amount');
    }
  }
  if (window.scbtYoutubeIs) {
    if (window.scbtYTChatIframeRef) {
      var elemArr2 = window.scbtYTChatIframeRef.contentWindow.document.body.querySelectorAll('#items.yt-live-chat-item-list-renderer .yt-live-chat-item-list-renderer');
      if (elemArr2[0]) {
        elemArr = elemArr2;
      }
    }
  }
  return elemArr;
}


// does this create the scbtvideoid?
// on VOD
// on livestream
// on popoutchat
function scbt_get_str_videoid() {
  if (window.scbtvideoid) { return window.scbtvideoid; }
  var str = '';
  if (window.scbtKickIs) {
    str = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
  }
  if (window.scbtOdyseeIs) {
    // TODO
    var arr = window.location.pathname.split(':');
    if (arr[0]) {
      videoid = ':' + arr[1] + ':' + arr[2];
    }
  }
  if (window.scbtRumbleIs) {
    var arr = window.location.pathname.split('/');
    if (arr[1]) {
      str = arr[1].trim();
      str = str.replace('.html', '');  
    }
  }
  if (window.scbtTiktokIs) {
    str = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
  }
  if (window.scbtTwitchIs) {
    str = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
  }
  if (window.scbtYoutubeIs) {
    if (window.location.search) {
      var arr = window.location.search.split('v='); // ['?', 'abc']
      if (arr[1]) {
        window.scbtVODIs = true;
        var arr2 = arr[1].split('&');
        if (arr2[0]) {
          str = arr2[0];
          setTimeout(function() { scbt_get_vod_length(); }, 2000);
        }
      }
    } else {
      var path = window.location.pathname;
      if (path.indexOf('live') > -1) {
        var arr = path.split('/');
        str = new Date().toISOString().slice(0, 10) + '&' + arr[2];
      }
    }
  }

  arr = null; return str;
}


function scbt_get_str_channelid() {
  if (window.scbtchannelid) { return window.scbtchannelid; }
  var channelid = null;
  if (window.scbtKickIs) {
    var channelid = window.location.pathname.substr(1);
    if (channelid) {
      if (channelid.indexOf('video/') > -1) {
        channelid = document.body.getElementsByClassName('stream-username')[0].innerText;
      }  
    }
  }
  if (window.scbtOdyseeIs) {
    var arr1 = window.location.pathname.split('/@');
    var str = arr1[1];
    var arr2 = str.split(':');
    var channelid = arr2[0];
    arr1 = str = arr2 = null;
  }
  if (window.scbtRumbleIs) {
    var elemArr = document.body.getElementsByClassName('media-heading-name');
    var elem2Arr = document.body.getElementsByClassName('channel-header--title');
    if (elem2Arr[0]) {
      elem2Arr[0] = elem2Arr[0].getElementsByTagName('h1');
    }
    var channelElem = '';
    if (elemArr[0]) {
      channelElem = elemArr[0];
    } 
    if (elem2Arr[0]) {
      channelElem = elem2Arr[0];
    }
    if (channelElem) {
      channelid = channelElem.textContent;
      if (channelid) {
        channelid = channelid.trim();
        channelid = channelid.replace(/ /g, '_');
        channelid = channelid.replace(/\W/g, '');
      }
    }
  }
  if (window.scbtTiktokIs) {
  }
  if (window.scbtTwitchIs) {
    if (window.location.pathname.indexOf('popout') > -1) {
      var arr = window.location.pathname.split('/');
      channelid = arr[2];
      window.scbtPopoutIs = true;
    } else {
      channelid = window.location.pathname.substr(1);
    }
  }
  if (window.scbtYoutubeIs) {
    var elemArr = [];
    var myInterval = setInterval(function () {
      if (window.scbtMobileIs === true) {
        elemArr = document.body.querySelectorAll('.slim-owner-channel-name');
      } else {
        elemArr = document.body.querySelectorAll('.ytd-video-owner-renderer .ytd-channel-name');
      }
      if (elemArr[0]) {
        if ( elemArr[0].innerText ) {
          window.scbtchannelid = elemArr[0].innerText.trim();
          window.scbtchannelid = window.scbtchannelid.replace(/ /g, '_');
          window.scbtchannelid = window.scbtchannelid.replace(/\W/g, '');
          clearInterval(myInterval);
          elemArr = null; return window.scbtchannelid;
        }
      }
    }, 1500);
  }
  
  window.scbtchannelid = channelid; return channelid;
}


function scbt_get_arr_chatbox_elem() {
  var elemArr = [];
  if (window.scbtKickIs) {
    elemArr = document.body.getElementsByClassName('overflow-y-scroll py-3');
  }
  if (window.scbtOdyseeIs) {
    elemArr = document.body.getElementsByClassName('chat__wrapper');
  }
  if (window.scbtRumbleIs) {
    elemArr = document.body.querySelectorAll('#chat-history-list');
  }
  if (window.scbtTiktokIs) {
    elemArr = document.body.querySelectorAll("div[class*='DivChatMessageList']");
  }
  if (window.scbtTwitchIs) {
    if (window.scbtVODIs) {
      elemArr = document.body.querySelectorAll('.video-chat__message-list-wrapper ul');
  } else {
      elemArr = document.body.getElementsByClassName('chat-scrollable-area__message-container');
    }
  }
  if (window.scbtYoutubeIs) {
    if (window.scbtYTChatIframeRef) {
      var elemArr2 = window.scbtYTChatIframeRef.contentWindow.document.body.querySelectorAll('#item-scroller.yt-live-chat-item-list-renderer');
      if (elemArr2[0]) {
        elemArr = elemArr2;
      }
    }  
  }
  return elemArr;
}


function scbt_helper_chat_clean(obj, elem) {
  if (window.scbtKickIs) {
    obj = scbt_helper_chat_clean_kick(obj, elem);
  }
  if (window.scbtOdyseeIs) {
    obj = scbt_helper_chat_clean_odysee(obj, elem);
  }
  if (window.scbtRumbleIs) {
    obj = scbt_helper_chat_clean_rumble(obj, elem);
  }
  if (window.scbtTiktokIs) {
    obj = scbt_helper_chat_clean_tiktok(obj, elem);
  }
  if (window.scbtTwitchIs) {
    obj = scbt_helper_chat_clean_twitch(obj, elem);
  }
  if (window.scbtYoutubeIs) {
    obj = scbt_helper_chat_clean_youtube(obj, elem);
  }
  return obj;
} 


function scbt_helper_chat_clean_tiktok(obj, elem) {
  var elemArr = [];
  var str = null;
  var special = false;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  var timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);
  obj.timestamp = timestamp;
  // HOST EVENT

  // SUB EVENT

  // GIFT EVENT

  // username
  elemArr = elem.querySelectorAll("[data-e2e='message-owner-name']");
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  obj.username = null;
  if (str) {
    obj.username = str;
    obj = scbt_get_obj_cleaned_username_from_obj(obj);
  }

  str = null;
  // chat message
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  obj.message = null;
  if (str) {
    obj.message = str;
    obj = scbt_get_obj_cleaned_message_from_obj(obj);
    if (obj.message.indexOf('@') > -1) {
      obj.mention = 1;
    }
    if (obj.message.indexOf('#') > -1) {
      obj.hashtag = 1;
    }
    if (obj.message == null || obj.message.trim() === '') { } else {
      obj.message = obj.message.replace(/(?:\r\n|\r|\n)/g, '');
      obj.message = obj.message.split("\t").join("");
      obj.message = obj.message.split("\"").join("");
      obj.message = obj.message.split("\'").join("");
    }
  }

  var imgElemArr = elem.getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var srcStr = imgElm.getAttribute('src');
    if (srcStr) {
      if (srcStr.indexOf('broadcaster') > -1) {
        obj.owner = 1;
      }
      if (srcStr.indexOf('staff') > -1) {
        obj.staff = 1;
      }
      if (srcStr.indexOf('subs') > -1) {
        obj.sub = 1;
      }
      if (srcStr.indexOf('moderater') > -1) {
        obj.moderator = 1;
      }
      if (srcStr.indexOf('gifter') > -1) {
        obj.gifter = 1;
      }
      if (srcStr.indexOf('fans_badge') > -1) {
        obj.og = 1;
      }
    }
  });

  if (elem.classList.contains('vip')) {
    obj.verified = 1;
  }

  if (obj.username && obj.message) {
    var um = obj.message;
    obj.itemid = obj.username + um.substring(0, 7); // + Math.floor(Math.random() * 100)
  }
  
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
}


function scbt_helper_chat_clean_kick(obj, elem) {
  var elemArr = [];
  var str = null;
  var special = false;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  var timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);

  // HOST EVENT
  var elemArr = elem.getElementsByClassName('chatroom-event-host__container');
  if (elemArr[0]) {
    special = true;
    var elem2Arr = elem.getElementsByClassName('chatroom-event-host__label .text-white');
    obj.username = 'anonymous';
    obj.message = 'just hosted with viewers';
    if (elem2Arr[0] && elem2Arr[0].textContent) { 
      obj.username = elem2Arr[0].textContent;
    }
    var elemArr3 = elem.getElementsByClassName('chatroom-event-host__label');
    if (elemArr3[0] && elemArr3[0].textContent) { 
      obj.message = elemArr3[0].textContent;
    }
    obj.timestamp = timestamp;
    obj.anevent = 1;
  }

  // SUB EVENT
  var elemArr = elem.getElementsByClassName('chatroom-event-sub__container');
  if (elemArr[0]) {
    special = true;
    obj.username = 'anonymous';
    obj.message = 'just subscribed for 1 month';
    var elem2Arr = elem.getElementsByClassName('chatroom-event-sub__label .text-white');
    if (elem2Arr[0] && elem2Arr[0].textContent) { 
      obj.username = elem2Arr[0].textContent;
    }
    var elem3Arr = elem.getElementsByClassName('chatroom-event-sub__label');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      obj.message = elem3Arr[0].textContent;
    }
    obj.timestamp = timestamp;
    obj.sub = 1;
    obj.newSub = 1;
    obj.anevent = 1;
  }

  // GIFT EVENT
  var elemArr = elem.getElementsByClassName('chatroom-event-subgift__container');
  if (elemArr[0]) {
    special = true;
    obj.username = 'anonymous';
    obj.message = 'has gifted 1 subscription to the community';
    var elem2Arr = elem.getElementsByClassName('chatroom-event-subgift__label .text-white');
    if (elem2Arr[0] && elem2Arr[0].textContent) { 
      obj.username = elem2Arr[0].textContent;
    }
    var elem3Arr = elem.getElementsByClassName('chatroom-event-subgift__label');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      obj.message = elem3Arr[0].textContent;
    }
    obj.timestamp = timestamp;
    obj.sub = 1;
    obj.gifter = 1;
    obj.newSub = 1;
    obj.anevent = 1;
  }

  // CLIP EVENT
  var elemArr = elem.getElementsByClassName('chat-entry-clip');
  if (elemArr[0]) {
    special = true;
    obj.username = 'anonymous';
    obj.message = 'made a nice clip.';

    var elem2Arr = elemArr[0].getElementsByClassName('text-primary');

    if (elem2Arr[0] && elem2Arr[0].textContent) { 
      obj.username = elem2Arr[0].textContent;
    }
    var elem3Arr = elemArr[0].getElementsByClassName('chat-entry-clip-info');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      obj.message = elem3Arr[0].textContent;
    }
    var imgElemArr = elemArr[0].getElementsByTagName('img');
    if (imgElemArr[0]) {
      obj.message = obj.message + ' img ' + imgElemArr[0].src;
    }
    obj.timestamp = timestamp;
    obj.anevent = 1;
  }

  // regular chat
  if (special === false) {
    var elemArr = elem.querySelectorAll('.inline-block.text-xs.font-semibold.text-gray-400');
    if (elemArr[0] && elemArr[0].textContent) { 
      obj.timestamp = elemArr[0].textContent;
    }

    var elemArr = elem.getElementsByClassName('chat-entry-username');
    if (elemArr[0]) { } else {
      var elemArr = elem.getElementsByClassName('chat-message-identity');
    }
    
    obj.username = null;
    if (elemArr[0] && elemArr[0].textContent) { 
      obj.username = elemArr[0].textContent;
      obj = scbt_get_obj_cleaned_username_from_obj(obj);
    }

    var elemArr = elem.getElementsByClassName('chat-entry-content');
    obj.message = null;
    if (elemArr[0] && elemArr[0].textContent) {
      obj.message = elemArr[0].textContent;
      obj = scbt_get_obj_cleaned_message_from_obj(obj);
      if (obj.message.indexOf('@') > -1) {
        obj.mention = 1;
      }
      if (obj.message.indexOf('#') > -1) {
        obj.hashtag = 1;
      }

      if (obj.message == null || obj.message.trim() === '') { } else { 
        obj.message = obj.message.replace(/(?:\r\n|\r|\n)/g, '');
        obj.message = obj.message.split("\t").join("");
        obj.message = obj.message.split("\"").join("");
        obj.message = obj.message.split("\'").join("");
      }
    }

    if (elem.classList.contains('kicks') ) {
      obj.donation = 1;
      obj.anevent = 1;
    }

    obj.sub = scbt_get_binary_role_from_chat_message(elem, 'sub'); // 0 or 1
    obj.moderator = scbt_get_binary_role_from_chat_message(elem, 'moderator');
    obj.founder = scbt_get_binary_role_from_chat_message(elem, 'founder');
    obj.verified = scbt_get_binary_role_from_chat_message(elem, 'verified');
    obj.og = scbt_get_binary_role_from_chat_message(elem, 'og');
    obj.owner = scbt_get_binary_role_from_chat_message(elem, 'owner');
    obj.gifter = scbt_get_binary_role_from_chat_message(elem, 'gifter');
    obj.staff = scbt_get_binary_role_from_chat_message(elem, 'staff');
  }

  if (obj.username && obj.message) {
    if (special === true) {
      obj.itemid = Date.now();
    } else {
      if (elem.dataset.chatEntry) {
        obj.itemid = elem.dataset.chatEntry;
      } else {
        var um = obj.message;
        obj.itemid = obj.username + um.substring(0, 6);  
      }
    }
  }
  
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
} // end scbt_helper_chat_clean_kick


function scbt_helper_chat_clean_odysee(obj, elem) {
  var elemArr = [];
  var str = null;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  obj.timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);
  
  // username
  elemArr = elem.getElementsByClassName('comment__author');
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  obj.username = null;
  if (str) {
    obj.username = str;
    obj = scbt_get_obj_cleaned_username_from_obj(obj);
  }

  str = null;
  // chat message
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  if (!str) {
    elemArr = elem.getElementsByClassName('chat-history--rant-text');
    if (elemArr[0] && elemArr[0].textContent) { 
      obj.donation = 1;
      obj.anevent = 1;
      var elem2Arr = elem.getElementsByClassName('chat-history--rant-price');
      if (elem2Arr[0] && elem2Arr[0].textContent) { 
        str = elem2Arr[0].textContent + ' ' + str;
      }
      str = str + ' ' + elemArr[0].textContent;
    }
    var elem3Arr = elem.getElementsByClassName('chat-history--notification-text');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      str = obj.username + ' ' + elem3Arr[0].textContent;
      obj.newSub = 1;
      obj.anevent = 1;
    }
  }

  obj.message = null;
  if (str) {
    obj.message = str;
    obj = scbt_get_obj_cleaned_message_from_obj(obj);
    if (obj.message.indexOf('@') > -1) {
      obj.mention = 1;
    }
    if (obj.message.indexOf('#') > -1) {
      obj.hashtag = 1;
    }

  if (obj.message == null || obj.message.trim() === '') { } else { 
    obj.message = obj.message.replace(/(?:\r\n|\r|\n)/g, '');
    obj.message = obj.message.split("\t").join("");
    obj.message = obj.message.split("\"").join("");
    obj.message = obj.message.split("\'").join("");
  }

  var imgElemArr = elem.getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var alt = imgElm.getAttribute('alt');
    if (alt) {
      var a = alt.toLowerCase().trim();
      if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) || (a.indexOf('admin') > -1) ) {
        obj.owner = 1;
      }
      if ( (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1) ) {
        obj.sub = 1;
      }
      if (a.indexOf('moderator') > -1) {
        obj.moderator = 1;
      }
    }
  });

  if (elem.classList.contains('vip') ) {
    obj.verified = 1;
  }

  if (obj.username && obj.message) {
    var um = obj.message;
    obj.itemid = obj.username + um.substring(0, 7); // + Math.floor(Math.random() * 100)
  }
  
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
  }
} // end scbt_helper_chat_clean_odysee


function scbt_helper_chat_clean_rumble(obj, elem) {
  var elemArr = [];
  var str = null;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  obj.timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);
  
  var classArr = elem.classList;
  if (classArr.contains('user-notice-line') || classArr.contains('donation') || classArr.contains('anevent') ) {
    obj.anevent = 1;
  }
  if (classArr.contains('sub') ) {
    obj.sub = 1;
  }
  if (classArr.contains('moderator') ) {
    obj.moderator = 1;
  }
  if (classArr.contains('founder') ) {
    obj.founder = 1;
  }
  if ( classArr.contains('vip') || classArr.contains('verified') ) {
    obj.verified = 1;
  }
  if (classArr.contains('owner') ) {
    obj.owner = 1;
  }
  if (classArr.contains('staff') ) {
    obj.staff = 1;
  }
  if (classArr.contains('gifter') ) {
    obj.gifter = 1;
  }

  // username
  elemArr = elem.getElementsByClassName('chat-history--username');
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }
  
  if (!str) {
    elemArr = elem.getElementsByClassName('chat-history--rant-username');
    if (elemArr[0] && elemArr[0].textContent) { 
      str = elemArr[0].textContent;
    }
    elemArr = elem.getElementsByClassName('chat-history--notification-username');
    if (elemArr[0] && elemArr[0].textContent) { 
      str = elemArr[0].textContent;
    }
  }

  obj.username = null;
  if (str) {
    obj.username = str;
    obj = scbt_get_obj_cleaned_username_from_obj(obj);
  }

  str = null;
  // chat message
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) { 
    str = elemArr[0].textContent;
  }

  if (!str) {
    elemArr = elem.getElementsByClassName('chat-history--rant-text');
    if (elemArr[0] && elemArr[0].textContent) { 
      obj.donation = 1;
      obj.anevent = 1;
      var elem2Arr = elem.getElementsByClassName('chat-history--rant-price');
      if (elem2Arr[0] && elem2Arr[0].textContent) { 
        str = elem2Arr[0].textContent + ' ' + str;
      }
      str = str + ' ' + elemArr[0].textContent;
    }
    var elem3Arr = elem.getElementsByClassName('chat-history--notification-text');
    if (elem3Arr[0] && elem3Arr[0].textContent) { 
      str = obj.username + ' ' + elem3Arr[0].textContent;
      obj.newSub = 1;
      obj.anevent = 1;
    }
  }

  obj.message = null;
  if (str) {
    obj.message = str;
    obj = scbt_get_obj_cleaned_message_from_obj(obj);
    if (obj.message.indexOf('@') > -1) {
      obj.mention = 1;
    }
    if (obj.message.indexOf('#') > -1) {
      obj.hashtag = 1;
    }

  if (obj.message == null || obj.message.trim() === '') { } else { 
    obj.message = obj.message.replace(/(?:\r\n|\r|\n)/g, '');
    obj.message = obj.message.split("\t").join("");
    obj.message = obj.message.split("\"").join("");
    obj.message = obj.message.split("\'").join("");
  }

  var imgElemArr = elem.getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var alt = imgElm.getAttribute('alt');
    if (alt) {
      var a = alt.toLowerCase().trim();
      if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) || (a.indexOf('admin') > -1) ) {
        obj.owner = 1;
      }
      if ( (a.indexOf('supporter') > -1) || (a.indexOf('supporter+') > -1) || (a.indexOf('sub') > -1) ) {
        obj.sub = 1;
      }
      if (a.indexOf('moderator') > -1) {
        obj.moderator = 1;
      }
    }
  });

  if (elem.classList.contains('vip') ) {
    obj.verified = 1;
  }

  if (obj.username && obj.message) {
    var um = obj.message;
    var itemId = elem.getAttribute('data-message-id'); // timeout here
    if (itemId) {
      obj.itemid = itemId;
    } else {
      obj.itemid = obj.username + um.substring(0, 6) + Math.floor(Math.random() * 100);  
    }
  }
  
  }
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
} // end scbt_helper_chat_clean_rumble


function scbt_helper_chat_clean_twitch(obj, elem) {
  var elemArr = [];
  var str = null;

  var elemArr = elem.getElementsByClassName('chat-line__timestamp');
  if (elemArr[0]) {
    var timestamp = elemArr[0].textContent;
    var timestr = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
    var timeArr = timestr.split(' ');
    if (timeArr[1]) {
      timestamp = timestamp + timeArr[1];
    }
  } else {
     var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
     var timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);
  }
  obj.timestamp = timestamp;

  var classArr = elem.classList;
  if (classArr.contains('user-notice-line') || classArr.contains('donation') || classArr.contains('anevent') ) {
    obj.anevent = 1;
  }
  if (classArr.contains('sub') ) {
    obj.sub = 1;
  }
  if (classArr.contains('moderator') ) {
    obj.moderator = 1;
  }
  if (classArr.contains('founder') ) {
    obj.founder = 1;
  }
  if ( classArr.contains('vip') || classArr.contains('verified') ) {
    obj.verified = 1;
  }
  if (classArr.contains('owner') ) {
    obj.owner = 1;
  }
  if (classArr.contains('staff') ) {
    obj.staff = 1;
  }
  if (classArr.contains('gifter') ) {
    obj.gifter = 1;
  }

  var imgElemArr = elem.getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var a = imgElm.getAttribute('alt').toLowerCase();
    if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) ) {
      obj.sub = 1;
    }
    if (a.indexOf('moderator') > -1) {
      obj.moderator = 1;
    }
    if (a.indexOf('broadcaster') > -1) {
      obj.owner = 1;
    }
    if ( (a.indexOf('cheer') > -1) && (!imgElm.classList.contains('chat-badge')) ) {
      obj.donation = 1;
      obj.anevent = 1;
    }
    if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
      obj.verified = 1;
    }
  });

  obj = scbt_helper_chat_get_username(obj, elem);
  obj = scbt_get_obj_cleaned_username_from_obj(obj);

  obj = scbt_helper_chat_get_message(obj, elem);
  obj = scbt_get_obj_cleaned_message_from_obj(obj);

  if ( (obj.timestamp) && (obj.username) && (obj.message) ) {
    var str = obj.message.substring(0,33);
    str = str.replace(/[^a-zA-Z0-9_\-@\s]/g,'');
    obj.itemid = obj.username + str;
  }

  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
} // end scbt_helper_chat_clean_twitch


function scbt_helper_chat_clean_youtube(obj, elem) {
  var elemArr = [];
  var str = null;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  var timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);

  var classArr = elem.classList;
  if (classArr.contains('user-notice-line') || classArr.contains('donation') || classArr.contains('anevent') ) {
    obj.anevent = 1;
  }
  if (classArr.contains('sub') ) {
    obj.sub = 1;
  }
  if (classArr.contains('moderator') ) {
    obj.moderator = 1;
  }
  if (classArr.contains('founder') ) {
    obj.founder = 1;
  }
  if ( classArr.contains('vip') || classArr.contains('verified') ) {
    obj.verified = 1;
  }
  if (classArr.contains('owner') ) {
    obj.owner = 1;
  }
  if (classArr.contains('staff') ) {
    obj.staff = 1;
  }
  if (classArr.contains('gifter') ) {
    obj.gifter = 1;
  }

  if (elem.id) {
    obj.itemid = elem.id;
  }

  var elemArr = elem.querySelectorAll('#timestamp');
  if (elemArr[0]) { 
    if (elemArr[0].textContent) {
      obj.timestamp = elemArr[0].textContent;  
    }
  }

  obj.username = null;
  var elemArr = elem.querySelectorAll('#author-name');
  if (elemArr[0]) { 
    if (elemArr[0].textContent) {
      str = elemArr[0].textContent;
      if (str) {
        obj.username = str;
        obj = scbt_get_obj_cleaned_username_from_obj(obj);
      }
    }
  }

  obj.message = null;
  var elemArr = elem.querySelectorAll('#message');
  if (elemArr[0]) {
    if (elemArr[0].textContent) {
      str = elemArr[0].textContent;
      obj.message = str;
      if (str.indexOf('@') > -1) {
        obj.mention = 1;
      }
      if (str.indexOf('#') > -1) {
        obj.hashtag = 1;
      }
      obj = scbt_get_obj_cleaned_message_from_obj(obj);
      if (obj.message == null || obj.message.trim() === '') { } else {
        str = str.replace(/(?:\r\n|\r|\n)/g, '');
        str = str.split("\t").join("");
        str = str.split("\"").join("");
        str = str.split("\'").join("");
        obj.message = str;
      }
    }
  }
  
  if ( elem.getAttribute('author-type') == 'member') {
    obj.sub = 1;
  }

  if ( elem.getAttribute('author-type') == 'moderator') {
    obj.moderator = 1;
  }

  if ( elem.getAttribute('author-type') == 'owner') {
    obj.owner = 1;
  }

  var elemArr = elem.querySelectorAll('#chip-badges .yt-live-chat-author-chip');
  if (elemArr[0]) {
    if (elemArr[0].ariaLabel == 'Verified') {
      obj.verified = 1;
    }
  }
  
  var elemArr = elem.getElementsByClassName('yt-live-chat-paid-message-renderer');
  if (elemArr[0]) {
    obj.itemid = elem.id;
    obj.donation = 1;
    obj.anevent = 1;
    str = elem.textContent;
    str = str.replace(/\/‘’‚“”„"`~«´<>/g, '');
    str = str.replaceAll(',', ' ');
    obj.message = str;
    // var n = $( elem ).find( '#author-name' );
    // obj.username = n[0].textContent;
    obj.timestamp = timestamp;
  }

  var elemArr = elem.getElementsByClassName('yt-live-chat-membership-item-renderer');
  if (elemArr[0]) {
    obj.itemid = elem.id;
    obj.newSub = 1;
    obj.anevent = 1;
    str = elem.textContent;
    str = str.replace(/\/‘’‚“”„"`~«´<>/g, '');
    str = str.replaceAll(',', ' ');
    obj.message = str;
    // var n = $( elem ).find( '#author-name' );
    // obj.username = n[0].textContent;
    obj.timestamp = timestamp;
  }

  var elemArr = elem.getElementsByClassName('yt-live-chat-paid-sticker-renderer');
  if (elemArr[0]) {
    obj.itemid = elem.id;
    obj.donation = 1;
    obj.anevent = 1;
    str = elem.textContent;
    str = str.replace(/\/‘’‚“”„"`~«´<>/g, '');
    str = str.replaceAll(',', ' ');
    obj.message = str;
    // var n = $( elem ).find( '#author-name' );
    // obj.username = n[0].textContent;
    obj.timestamp = timestamp;
  }

  if ( (obj.itemid == 'contents' ) || (obj.itemid == 'item-scroller' ) || (obj.itemid == 'docked-messages' ) || (obj.itemid == 'item-offset' ) || (obj.itemid == 'items' ) || (obj.itemid == 'empty-state-message' ) || (obj.itemid == 'show-more' ) ) {
    var obj = {};
  }

  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
} // end scbt_helper_chat_clean_youtube



function scbt_helper_start_chat_logging() {
  if (window.scbtYoutubeIs) {
    window.scbtVODIs = true;  
    if (window.scbtchannelid && window.scbtYTChatIframeRef) { } else {
      scbt_helper_youtube_setup_1();  
    }
    return false;
  }

  if (window.scbtTwitchIs || window.scbtTiktokIs || window.scbtKickIs) {
    if (window.scbtserviceid && window.scbtchannelid && window.scbtvideoid) {
      window.scbtDbNameToSearch = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
      
      if (!window.scbtDbName) {
        var elemArr = document.body.getElementsByTagName('video');
        if (elemArr[0]) {
          setTimeout(function() {
            scbt_get_str_dbname('startSaving');
            var chatElmArr = scbt_get_arr_chats();
            [].forEach.call(chatElmArr, function(chatElm) {
              scbt_helper_process_chat_line(chatElm, true);
            });
            scbt_helper_chat_listen();
            return false;
          }, 2500);
        }
      }

    }
  }
}



function scbt_helper_build_all_menus() {
  if (
    window.scbtSideMenuLoadedIs === true && 
    window.scbtChatWrapperLoadedIs === true && 
    window.scbtChatMenuLoadedIs === true && 
    window.scbtOptionsMenuLoadedIs === true && 
    window.scbtMentionMenuLoadedIs === true
  ) {
    scbt_helper_start_chat_logging();
    return false;
  }

  if (window.scbtSideMenuLoadedIs === false) {
    window.scbtSideMenuLoadedIs = true;
    scbt_helper_build_side_menu();
  }
  if (window.scbtChatWrapperLoadedIs === false) {
    window.scbtChatWrapperLoadedIs = true;
    scbt_helper_build_chat_wrapper();
  }
  if (window.scbtChatMenuLoadedIs === false) {
    window.scbtChatMenuLoadedIs = true;
    scbt_helper_build_chat_menu();
  }
  if (window.scbtOptionsMenuLoadedIs === false) {
    window.scbtOptionsMenuLoadedIs = true;
    scbt_helper_build_options_menu();
  }
  if (window.scbtMentionMenuLoadedIs === false) {
    window.scbtMentionMenuLoadedIs = true;
    scbt_helper_build_mention_menu();
  }
  return false;
}



function scbt_helper_build_side_menu() {
  var url = chrome.runtime.getURL('side_menu.html');
  fetch(url).then((response) => response.text()).then((html) => {
    window.scbtXRef.insertAdjacentHTML('afterbegin', html );
    var elemArr = document.body.getElementsByClassName('scbtSideMenu');
    if (elemArr[0]) { window.scbtSideMenuRef = elemArr[0]; }
    
    elemArr = document.body.getElementsByClassName('scbtChatToggleMenu');
    if (elemArr[0]) { window.scbtChatToggleMenuRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbt0');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chat_filter_menu); }

    elemArr = document.body.getElementsByClassName('scbt2');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_options_menu); }

    elemArr = document.body.getElementsByClassName('scbt4');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt5');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt6');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt7');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt8');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt9');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt10');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_non_bot); }

    elemArr = document.body.getElementsByClassName('scbt11');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt12');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

    elemArr = document.body.getElementsByClassName('scbt13');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_text_only); }

    elemArr = document.body.getElementsByClassName('scbt14');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_up_to_top); }

    elemArr = document.body.getElementsByClassName('scbt15');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_down_to_bottom); }

    elemArr = document.body.getElementsByClassName('scbt16');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_full_screen_width); }

    elemArr = document.body.getElementsByClassName('scbt17');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_full_screen_video_height_chat); }

    elemArr = document.body.getElementsByClassName('scbt20');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_font_size); }

    elemArr = document.body.getElementsByClassName('scbt22');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

    elemArr = document.body.getElementsByClassName('scbt23');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

    elemArr = document.body.getElementsByClassName('scbt24');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_load_refresh_menu); }

    elemArr = document.body.getElementsByClassName('scbt30');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt31');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt32');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt33');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt34');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt35');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt36');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_load_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt30d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt31d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt32d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt33d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt34d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt35d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    elemArr = document.body.getElementsByClassName('scbt36d');
    if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_clear_recent_clips_begin); }

    url = html = response = elemArr = null; return false;
  }).catch((error) => {
    console.error(error);
    window.scbtSideMenuLoadedIs = false; url = html = response = elemArr = error = null; return false;
  });
}


function scbt_helper_build_chat_wrapper() {
  var url = chrome.runtime.getURL('wrappers_menu.html');
  fetch(url).then((response) => response.text()).then((html) => {
    window.scbtXRef.insertAdjacentHTML('afterbegin', html );
    var elemArr = document.body.getElementsByClassName('scbtChatWrapper');
    if (elemArr[0]) { window.scbtChatWrapperRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtCloseButton');
    if (elemArr[0]) { window.scbtCloseButtonRef = elemArr[0]; window.scbtCloseButtonRef.addEventListener('click', scbt_user_search_chat_toggle); }

    elemArr = document.body.getElementsByClassName('scbtChatA');
    if (elemArr[0]) { window.scbtChatARef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatB');
    if (elemArr[0]) { window.scbtChatBRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatTitle');
    if (elemArr[0]) { window.scbtChatTitleRef = elemArr[0]; }
    
    elemArr = document.body.getElementsByClassName('scbtChatContent');
    if (elemArr[0]) { window.scbtChatContentRef = elemArr[0]; }

    url = html = response = elemArr = null; return false;
  }).catch((error) => {
    console.error(error);
    window.scbtChatWrapperLoadedIs = false; url = html = response = elemArr = error = null; return false;
  });
}


function scbt_helper_build_chat_menu() {
  var url = chrome.runtime.getURL('chat_menu.html');
  fetch(url).then((response) => response.text()).then((html) => {
    window.scbtXRef.insertAdjacentHTML('afterbegin', html );
    elemArr = document.body.getElementsByClassName('scbtChatMenu');
    if (elemArr[0]) { window.scbtChatMenuRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
    if (elemArr[0]) { window.scbtChatSearchInputTextRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatSearchStartsWithButton');
    if (elemArr[0]) { window.scbtChatSearchStartsWithButtonRef = elemArr[0]; window.scbtChatSearchStartsWithButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
    
    elemArr = document.body.getElementsByClassName('scbtChatSearchUserButton');
    if (elemArr[0]) { window.scbtChatSearchUserButtonRef = elemArr[0]; window.scbtChatSearchUserButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
    
    elemArr = document.body.getElementsByClassName('scbtChatSearchKeywordButton');
    if (elemArr[0]) { window.scbtChatSearchKeywordButtonRef = elemArr[0]; window.scbtChatSearchKeywordButtonRef.addEventListener('click', scbt_user_search_saved_chat); }

    elemArr = document.body.getElementsByClassName('scbtChatSearchEventsButton');
    if (elemArr[0]) { window.scbtChatSearchEventsButtonRef = elemArr[0]; window.scbtChatSearchEventsButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
    
    elemArr = document.body.getElementsByClassName('scbtChatSearchFullButton');
    if (elemArr[0]) { window.scbtChatSearchFullButtonRef = elemArr[0]; window.scbtChatSearchFullButtonRef.addEventListener('click', scbt_user_search_saved_chat); }

    url = html = response = elemArr = null; return false;
  }).catch((error) => {
    console.error(error);
    window.scbtChatMenuLoadedIs = false; url = html = response = elemArr = error = null; return false;
  });
}


function scbt_helper_build_options_menu() {
  var url = chrome.runtime.getURL('options_menu.html');
  fetch(url).then((response) => response.text()).then((html) => {
    window.scbtXRef.insertAdjacentHTML('afterbegin', html );
    elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
    if (elemArr[0]) { window.scbtOptionsMenuRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatPreviousTitle');
    if (elemArr[0]) { window.scbtChatPreviousTitleRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatPreviousWrapper');
    if (elemArr[0]) { window.scbtChatPreviousWrapperRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtOptionsTitle');
    if (elemArr[0]) { window.scbtOptionsTitleRef = elemArr[0]; }
    
    elemArr = document.body.getElementsByClassName('scbtOptionsWrapper');
    if (elemArr[0]) { window.scbtOptionsWrapperRef = elemArr[0]; }
    
    elemArr = document.body.getElementsByClassName('scbtChatLog');
    if (elemArr[0]) { window.scbtChatLogRef = elemArr[0]; }

    elemArr = document.body.getElementsByClassName('scbtChatPreviousContent');
    if (elemArr[0]) { window.scbtChatPreviousContentRef = elemArr[0]; }
    
    elemArr = document.body.getElementsByClassName('scbt2');
    if (elemArr[0]) { elemArr[0].classList.add('lawngreen'); }

    scbt_user_toggle_chat_menu();
    setTimeout(function() {
      if (elemArr[0]) { elemArr[0].classList.remove('lawngreen'); }
        scbt_user_toggle_chat_menu();
        scbt_helper_save_options();
        scbt_helper_get_options();
        scbt_add_listener_for_uploading_chatlog();
        scbt_add_listener_for_options_menu();
        url = html = response = elemArr = null; return false;
    }, 2500);
  }).catch((error) => {
    console.error(error);
    window.scbtOptionsMenuLoadedIs = false; url = html = response = elemArr = error = null; return false;
  });
}


function scbt_helper_build_mention_menu() {

  return false;
}


function scbt_helper_chat_auto_show() {
  scbt_user_chat_full_screen_width();
  scbt_full_screen_video_height_chat();

  if (window.scbtOptions.scbtfeature5 === true) {
    
    if (window.scbtOptions.scbthidden10 === true) {
      var css = ' ';
      if (window.scbtKickIs) {
        css = ' .chat-entry-username, .inline-block.text-xs.font-semibold.text-gray-400 { display: none; } ';
      }
      if (window.scbtOdyseeIs) {
        css = '  { .livestream-comment__meta-information display: none; } ';
      }
      if (window.scbtRumbleIs) {
        css = '  { .chat-history--message display: none; } ';
      }
      if (window.scbtTiktokIs) {
      }
      if (window.scbtTwitchIs) {
        css = '  { .video-chat__message-author, .chatter-name, .chat-author__display-name, .chat-line__username, .user-notice-line { display: none; } ';
      }
      if (window.scbtYoutubeIs) {
        css = ' .yt-live-chat-item-list-renderer #author-name { display: none; } ';
      }
      
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      head.appendChild(style);
      style.type = 'text/css';
      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      if (window.scbtYTChatIframeRef) {
        style = document.createElement('style');
        style = 'text/css';
        head = window.scbtYTChatIframeRef.contentWindow.document.head;
        head.appendChild(style);
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }
    }

    if (window.scbtMobileIs == false) {
      
      if (window.scbtKickIs) {
        var elemArr = document.querySelectorAll('.channel.relative.h-full > div > div:last-of-type');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
        }
        var elemArr = document.querySelectorAll('.chat-container');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
          elemArr[0].style.top = '1px';
          elemArr[0].style.marginTop = '0 auto';
          elemArr[0].style.zIndex = '100000000';
          elemArr[0].style.display = 'block';
          elemArr[0].style.height = (window.screen.height - 100) + 'px';
          elemArr[0].style.background = '#111';
          elemArr[0].style.opacity = '.66';
        }
        var elemArr = document.querySelectorAll('.chat-content');
        if (elemArr[0]) {
          elemArr[0].style.background = 'transparent';
        }
      }


      if (window.scbtOdyseeIs) {
        var elemArr = document.getElementsByClassName('chat__wrapper');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
        }
        var elemArr = document.getElementsByClassName('chat__wrapper');
        if (elemArr[0]) {
          // elemArr[0].style.position = 'absolute';
          // elemArr[0].style.top = '1px';
          // elemArr[0].style.marginTop = '0 auto';
          elemArr[0].style.zIndex = '100000000';
          elemArr[0].style.display = 'block';
          elemArr[0].style.height = (window.screen.height - 100) + 'px';
          elemArr[0].setAttribute('style', 'background-color:transparent !important');
          // elemArr[0].style.opacity = '.66';
          elemArr[0].style.textShadow = '1px 1px 4px #000';
        }
        var elemArr = document.querySelectorAll('.chat');
        if (elemArr[0]) {
          elemArr[0].style.background = 'transparent';
        }
      }

      if (window.scbtRumbleIs) {
        var elemArr = document.body.getElementsByClassName('media-page-chat-aside-chat-wrapper-fixed');
        if (elemArr[0]) {
          // position: absolute;
          // top: 0px;
          elemArr[0].style.position = 'absolute';
          elemArr[0].style.top = '1px';
          elemArr[0].style.height = '104vh';
        }
        var elemArr = document.body.getElementsByClassName('media-page-chat-aside-chat');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
          elemArr[0].style.top = '0px';
          elemArr[0].style.left = '0px';
          elemArr[0].style.right = 'initial';
        }
        var elemArr = document.body.getElementsByClassName('chat');
        if (elemArr[0]) {
          elemArr[0].style.backgroundColor = 'transparent';
        }
        var elemArr = document.body.getElementsByClassName('chat-form-overflow-wrapper');
        if (elemArr[0]) {
          elemArr[0].style.backgroundColor = '#000';
        }
      }

      if (window.scbtTiktokIs) {
      }

      if (window.scbtTwitchIs) {
        var elemArr = document.querySelectorAll('.channel.relative.h-full > div > div:last-of-type');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
        }
        var elemArr = document.querySelectorAll('.chat-container');
        if (elemArr[0]) {
          elemArr[0].style.position = 'absolute';
          elemArr[0].style.top = '1px';
          elemArr[0].style.marginTop = '0 auto';
          elemArr[0].style.zIndex = '100000000';
          elemArr[0].style.display = 'block';
          elemArr[0].style.height = (window.screen.height - 100) + 'px';
          elemArr[0].style.background = '#111';
          elemArr[0].style.opacity = '.66';
        }
        var elemArr = document.querySelectorAll('.chat-content');
        if (elemArr[0]) {
          elemArr[0].style.background = 'transparent';
        }
      }

      if (window.scbtYoutubeIs) {
      }
    }
  }
  return false;
}


function scbt_helper_apply_css_from_option(obj) {
  var css = '';
  if (typeof obj == 'object') {
    // Background of chat bubble in this hex colour. Use black #000 for transparent bubble.
    if (obj.a == 'scbttheme1') {
      if (obj.b == '#ffffff' || obj.b == '') {
        css = css + ' body.scbt-kick #chatroom { background-color: initial !important; } ';
        css = css + ' body.scbt-odysee .livestream-comments__wrapper { background-color: initial !important; } ';
        css = css + ' body.scbt-rumble #chat-history-list { background-color: initial !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="chat-room"] { background-color: initial !important; }'; 
        css = css + ' body.scbt-twitch .video-chat__message-list-wrapper, .chat-scrollable-area__message-container { background-color: initial !important; } ';
        css = css + ' .yt-live-chat-item-list-renderer { background-color: initial !important; } ';
        css = css + ' .scbtChatWrapper { background-color: initial; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' body.scbt-kick #chatroom { background-color: transparent !important; } ';
        css = css + ' body.scbt-odysee .livestream-comments__wrapper { background-color: transparent !important; } ';
        css = css + ' body.scbt-rumble #chat-history-list { background-color: transparent !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="chat-room"] { background-color: transparent !important; }'; 
        css = css + ' body.scbt-twitch .video-chat__message-list-wrapper, .chat-scrollable-area__message-container { background-color: transparent !important; } ';
        css = css + ' .yt-live-chat-item-list-renderer { background-color: transparent !important; } ';
        css = css + ' .scbtChatWrapper { background-color: transparent; } ';
      }   
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' body.scbt-kick #chatroom { background-color:' + obj.b + ' !important; }  ';
        css = css + ' body.scbt-odysee .livestream-comments__wrapper { background-color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-rumble #chat-history-list { background-color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="chat-room"] { background-color:' + obj.b + ' !important; }'; 
        css = css + ' body.scbt-twitch .video-chat__message-list-wrapper, .chat-scrollable-area__message-container { background-color:' + obj.b + ' !important;} ';
        css = css + ' .yt-live-chat-item-list-renderer { background-color:' + obj.b + ' !important;} ';
        css = css + ' .scbtChatWrapper { background-color:' + obj.b + '; } '; 
      }
    }

    // User names in chat in this hex colour 
    if (obj.a == 'scbttheme2') {
      if (obj.b == '#ffffff') {
        css = css + ' body.scbt-kick .chat-entry-username { color: unset !important; } ';
        css = css + ' body.scbt-odysee .livestream__comments .comment__author { color: unset !important; } ';
        css = css + ' body.scbt-rumble .chat-history--username a { color: unset !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="message-owner-name"] { color: unset !important; } ';
        css = css + ' body.scbt-twitch .video-chat__message-author, .chat-author__display-name, .pinned-chat__pinned-by { color: unset !important; } ';
        css = css + ' #author-name { color: initial !important; } #author-name.yt-live-chat-author-chip { color: var(--yt-live-chat-secondary-text-color) !important; } #author-name.member.yt-live-chat-author-chip { color: var(--yt-live-chat-sponsor-color) !important; } #author-name.moderator.yt-live-chat-author-chip { color: var(--yt-live-chat-moderator-color) !important; } ';
        css = css + ' .scbt-chat-username { color: unset; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' body.scbt-kick .chat-entry-username { color: transparent !important; } ';
        css = css + ' body.scbt-odysee .chat-entry-username { color: transparent !important; } ';
        css = css + ' body.scbt-rumble .chat-history--username a { color: transparent !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="message-owner-name"] { color: transparent !important; } ';
        css = css + ' body.scbt-twitch .video-chat__message-author, .chat-author__display-name, .pinned-chat__pinned-by { color: unset !important; } ';
        css = css + ' #author-name { color: transparent !important; } #author-name.yt-live-chat-author-chip { color: var(--yt-live-chat-secondary-text-color) !important; } #author-name.member.yt-live-chat-author-chip { color: var(--yt-live-chat-sponsor-color) !important; } #author-name.moderator.yt-live-chat-author-chip { color: var(--yt-live-chat-moderator-color) !important; } ';
        css = css + ' .scbt-chat-username { color: transparent; } ';
      }
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' body.scbt-kick .chat-entry-username { color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-odysee .livestream__comments .comment__author { color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-rumble .chat-history--username a { color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="message-owner-name"] { color:' + obj.b + ' !important; } ';
        css = css + ' body.scbt-twitch .video-chat__message-author, .chat-author__display-name, .pinned-chat__pinned-by { color:' + obj.b + ' !important; } ';
        css = css + ' .yt-live-chat-item-list-renderer #author-name { color:' + obj.b + ' !important; } .scbt-chat-username { color: ' + obj.b + ' ; } ';
        css = css + ' .scbt-chat-username { color: ' + obj.b + ' ; } ';
      }
    }

    // Highlighted chat text in this hex colour
    if (obj.a == 'scbttheme3') {
      if (obj.b != '#ffffff') {
        window.scbtOptions.scbtBorderColor = obj.b;
      } else {
        window.scbtOptions.scbtBorderColor = '#ff0000';
      }
    }

    // Text in chat in this hex colour
    if (obj.a == 'scbttheme4') {
      if (obj.b == '#ffffff') {
        css = css + ' body.scbt-kick .chat-entry-content { color: unset !important; text-shadow: 0px; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text { color: unset !important; text-shadow: 0px; } ';
        css = css + ' body.scbt-rumble .chat-history--message { color: unset !important; text-shadow: 0px; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"], body.scbt-tiktok [data-e2e="social-message"], body.scbt-tiktok [data-e2e="enter-message"], body.scbt-tiktok .tiktok-15hhtcj { color: unset !important; text-shadow: 0px; } ';
        css = css + ' body.scbt-twitch .text-fragment, .mention-fragment { color: unset !important; text-shadow: 0px; } ';
        css = css + ' .yt-live-chat-item-list-renderer #message { color: var(--yt-live-chat-primary-text-color,var(--yt-spec-text-primary)) !important; text-shadow: 0px; } ';
        css = css + ' .scbt-chat-message { color: unset; text-shadow: 0px; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' body.scbt-kick .chat-entry-content { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' body.scbt-rumble .chat-history--message { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"], body.scbt-tiktok [data-e2e="social-message"], body.scbt-tiktok [data-e2e="enter-message"], body.scbt-tiktok .tiktok-15hhtcj { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' body.scbt-twitch .text-fragment, .mention-fragment { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' .yt-live-chat-item-list-renderer #message { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } ';
        css = css + ' .scbt-chat-message { color: #111111; text-shadow: 0.5px 0.5px silver; } ';
      }  
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' body.scbt-kick .chat-entry-content { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' body.scbt-rumble .chat-history--message { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"], body.scbt-tiktok [data-e2e="social-message"], body.scbt-tiktok [data-e2e="enter-message"], body.scbt-tiktok .tiktok-15hhtcj { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' body.scbt-twitch .text-fragment, .mention-fragment { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' .yt-live-chat-item-list-renderer #message { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } ';
        css = css + ' .scbt-chat-message { color:' + obj.b + ' ; text-shadow: 0.5px 0.5px darkslategrey; } ';
      }
    }

    // Chat font size should be this times of normal, try 1.25
    // {a: 'scbttheme5', b: '5'}
    if (obj.a == 'scbttheme5') {
      if (obj.b > 0) {
        var str = obj.b + 'rem';
        css = css + ' body.scbt-kick .chat-entry-content { font-size: ' + str + '; line-height: ' + str  + '; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text { font-size: ' + str + '; line-height: ' + obj.b  + '; } ';
        css = css + ' body.scbt-rumble .chat-history--message { font-size: ' + str + '; line-height: ' + obj.b  + '; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"], body.scbt-tiktok [data-e2e="social-message"], body.scbt-tiktok [data-e2e="enter-message"], body.scbt-tiktok .tiktok-15hhtcj { font-size: ' + str + '; line-height: ' + str  + '; } ';
        css = css + ' body.scbt-twitch .video-chat__message-list-wrapper, .chat-scrollable-area__message-container { font-size: ' + str + '; line-height: ' + str  + '; } ';
        css = css + ' #content.yt-live-chat-text-message-renderer #message { font-size: ' + str + '; line-height: ' + obj.b  + '; } ';
        css = css + ' .scbt-chat-message { font-size: ' + str + '; line-height: ' + str  + '; } ';
      } else {
        css = css + ' body.scbt-kick .chat-entry-content { font-size: initial; line-height: unset; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text { font-size: initial; line-height: unset; } ';
        css = css + ' body.scbt-rumble .chat-history--message { font-size: initial; line-height: unset; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"], body.scbt-tiktok [data-e2e="social-message"], body.scbt-tiktok [data-e2e="enter-message"], body.scbt-tiktok .tiktok-15hhtcj { font-size: initial; line-height: unset; }'; 
        css = css + ' body.scbt-twitch .video-chat__message-list-wrapper, .chat-scrollable-area__message-container { font-size: initial; line-height: unset; } ';
        css = css + ' #content.yt-live-chat-text-message-renderer #message { font-size: initial; line-height: unset; } ';
        css = css + ' .scbt-chat-message { font-size: initial; line-height: unset; } ';
      }
    }

    // Text only
    if (obj.a == 'scbttheme6') {
      if (obj.b === true) {
        css = css + ' body.scbt-kick .chat-entry img, .chat-entry svg, .chat-entry i { visibility: hidden !important; } ';
        css = css + ' body.scbt-odysee .livestream__comment canvas, .livestream__comment img, .livestream__comment svg, .livestream__comments .comment__author, .chat-history--badges-wrapper { visibility: hidden !important; } ';
        css = css + ' body.scbt-rumble .chat-history--row img, .chat-history--row svg, .chat-history--username, .chat-history--badges-wrapper { visibility: hidden !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="chat-room"] img, body.scbt-tiktok [data-e2e="chat-room"] svg, body.scbt-tiktok [data-e2e="chat-room"] i, body.scbt-tiktok [data-e2e="chat-room"] canvas { visibility: hidden !important; } ';
        css = css + ' body.scbt-twitch .text-fragment img, .text-fragment svg, .text-fragment i, .mention-fragment img, .mention-fragment svg, .mention-fragment i, .chat-line__message-container img, .chat-line__message-container svg, .video-chat__message-author, .pinned-chat__pinned-by, .chat-author__display-name { visibility: hidden !important; } ';
        css = css + ' #author-name, #author-photo, #chat-badges, #message img, #message svg, #timestamp { visibility: hidden !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: hidden; } ';
        css = css + ' .scbt-chat-username, .scbt-chat-timestamp { visibility: hidden !important; } ';
      } else {
        css = css + ' body.scbt-kick .chat-entry img, .chat-entry svg, .chat-entry i { visibility: visible !important; } ';
        css = css + ' body.scbt-odysee .livestream__comment canvas, .livestream__comment img, .livestream__comment svg, .livestream__comments .comment__author, .chat-history--badges-wrapper  { visibility: visible !important; } ';
        css = css + ' body.scbt-tiktok [data-e2e="chat-room"] img, body.scbt-tiktok [data-e2e="chat-room"] svg, body.scbt-tiktok [data-e2e="chat-room"] i, body.scbt-tiktok [data-e2e="chat-room"] canvas { visibility: visible !important; } ';
        css = css + ' body.scbt-rumble .chat-history--row img, .chat-history--row svg, .chat-history--username, .chat-history--badges-wrapper { visibility: hidden !important; } ';
        css = css + ' body.scbt-twitch .text-fragment img, .text-fragment svg, .text-fragment i, .mention-fragment img, .mention-fragment svg, .mention-fragment i, .chat-line__message-container img, .chat-line__message-container svg, .video-chat__message-author, .pinned-chat__pinned-by, .chat-author__display-name { visibility: visible !important; } ';
        css = css + ' #author-name, #author-photo, #chat-badges, #message img, #message svg, #timestamp { visibility: visible !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: visible; } ';
        css = css + ' .scbt-chat-username, .scbt-chat-timestamp { visibility: visible !important; } ';
      }
    }

    // Left handed screen. Flip screen so video is on the right and chat is on the left.
    if (obj.a == 'scbtfeature7') {
      if (obj.b === true) {
          css = css + ' body.scbt-kick #main-view .relative.flex.h-full.w-full { flex-direction: row-reverse; } ';
          css = css + ' body.scbt-odysee .main-and-sidebar { flex-direction: row-reverse; } .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
          css = css + ' body.scbt-rumble .main-and-sidebar { flex-direction: row-reverse; } .media-page-chat-aside-chat-wrapper-fixed { position: initial; } ';
          css = css + ' body.scbt-tiktok { flex-direction: row-reverse; } ';
          // tw TODO
          // tw YT
          css = css + ' .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
      } else {
          if (window.scbtMobileIs === true) { 
            css = css + ' body.scbt-kick #main-view .relative.flex.h-full.w-full { flex-direction: initial; } ';
            css = css + ' body.scbt-odysee .main-and-sidebar { flex-direction: column; } .scbtChatWrapper { display: block; } ';
            css = css + ' body.scbt-rumble .main-and-sidebar { flex-direction: column; } .scbtChatWrapper { display: block; } ';
            css = css + ' body.scbt-tiktok { flex-direction: initial; } ';
            css = css + ' .scbtChatWrapper { display: block; } ';
          } else {
            css = css + ' body.scbt-kick #main-view .relative.flex.h-full.w-full { flex-direction: initial; } ';
            css = css + ' body.scbt-odysee .main-and-sidebar { flex-direction: row; } .scbtChatWrapper { display: block; } ';
            css = css + ' body.scbt-rumble .main-and-sidebar { flex-direction: row; } .scbtChatWrapper { display: block; } ';
            css = css + ' body.scbt-tiktok { flex-direction: initial; } ';
            css = css + ' .scbtChatWrapper { display: block; } ';
          }
      }
    }

    // Upside down chat screen. Newest chat is on the top, oldest chat is on the bottom   
    if (obj.a == 'scbtfeature8') {
      if (obj.b === true) {
          css = css + ' body.scbt-kick #chatroom .overflow-y-scroll.py-3 { flex-direction: column-reverse; display: flex; } ';
          css = css + ' body.scbt-odysee #chat-history-list { display: flex; flex-direction: column-reverse; } ';
          css = css + ' body.scbt-rumble #chat-history-list { display: flex; flex-direction: column-reverse; } ';
          css = css + ' body.scbt-tiktok { flex-direction: column-reverse; display: flex; } ';
          css = css + ' .scbtChatWrapper { display: flex; flex-direction: column-reverse; } ';
          // tw TODO
          // tw YT
      } else {
          css = css + ' body.scbt-kick #chatroom .overflow-y-scroll.py-3 { flex-direction: initial; display: block; } ';
          css = css + ' body.scbt-odysee #chat-history-list { display: block; flex-direction: initial; } ';
          css = css + ' body.scbt-rumble #chat-history-list { display: block; flex-direction: initial; } ';
          css = css + ' body.scbt-tiktok { flex-direction: initial; display: block; } ';
          css = css + ' .scbtChatWrapper { display: block; flex-direction: initial; } ';
      }
    }

    // mouseover
    if (obj.a == 'scbtfeature9') {
      if (obj.b === true) {
        css = css + ' body.scbt-kick .chat-entry-content:hover { font-size: 250% !important; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text:hover { font-size: 175% !important; } ';
        css = css + ' body.scbt-rumble .chat-history--message:hover { font-size: 175% !important; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"]:hover, body.scbt-tiktok [data-e2e="social-message"]:hover, body.scbt-tiktok [data-e2e="enter-message"]:hover, body.scbt-tiktok .tiktok-15hhtcj:hover { font-size: 175% !important; } ';
        css = css + ' .yt-live-chat-item-list-renderer #message:hover { font-size: 4rem !important; } .yt-live-chat-item-list-renderer img:hover, .yt-live-chat-item-list-renderer svg:hover { height: 8rem !important; width: auto !important; font-size: 4rem; } ';
        css = css + ' .scbtChatWrapper { font-size: 175% !important; } ';
        // tw TODO
       } else {
        css = css + ' body.scbt-kick .chat-entry-content:hover { font-size: initial !important; } ';
        css = css + ' body.scbt-odysee .livestream-comment__text:hover { font-size: initial !important; } ';
        css = css + ' body.scbt-rumble .chat-history--message:hover { font-size: initial !important; } ';
        css = css + ' body.scbt-tiktok div[class*="DivComment"]:hover, body.scbt-tiktok [data-e2e="social-message"]:hover, body.scbt-tiktok [data-e2e="enter-message"]:hover, body.scbt-tiktok .tiktok-15hhtcj:hover { font-size: initial !important; } ';
        css = css + ' .yt-live-chat-item-list-renderer #message:hover { font-size: initial !important; } .yt-live-chat-item-list-renderer img:hover, .yt-live-chat-item-list-renderer svg:hover { height: initial !important; width: auto !important; font-size: initial; } ';
        css = css + ' .scbtChatWrapper { font-size: initial !important; } ';
      }
    }

  }

  if (css != '') {
    if (window.scbtYoutubeIs) {
      var style1 = document.createElement('style');
      style1.type = 'text/css';
      var head1 = document.getElementsByTagName('head')[0];
      head1.appendChild(style1);
      if (window.scbtYTChatIframeRef) {
        var style2 = document.createElement('style');
        style2.type = 'text/css';
        var head2 = window.scbtYTChatIframeRef.contentWindow.document.head;
        head2.appendChild(style2);
        if (style2.styleSheet){
          style2.styleSheet.cssText = css;
        } else {
          style2.appendChild(document.createTextNode(css));
        }
      }
      if (style1.styleSheet) {
        style1.styleSheet.cssText = css;
      } else {
        style1.appendChild(document.createTextNode(css));
      }
    } else {
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      head.appendChild(style);
      style.type = 'text/css';
      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
  }
  obj = css = a = head = head1 = head2 = style = style1 = style2 = null; return false;
}


function scbt_user_chat_down_to_bottom() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = window.scbtChatWrapperRef.scrollHeight - window.scbtChatWrapperRef.clientHeight;
    return false;
  } else {
    var elemArr = [];
    if (window.scbtKickIs) {
      elemArr = document.body.querySelectorAll('.overflow-y-scroll.py-3');
      if (elemArr[0]) {
        elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
      }
    }
    if (window.scbtOdyseeIs) {
      elemArr = document.body.getElementsByClassName('livestream__comments');
      if (elemArr[0]) {
        elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
      }
    }
    if (window.scbtRumbleIs) {
      elemArr = document.body.querySelectorAll('#chat-history-list')
      if (elemArr[0]) {
        elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
      }
    }
    if (window.scbtTiktokIs) {
      var elemArr = document.body.querySelectorAll("div[class*='DivChatMessageList']");
      if (elemArr[0]) {
        elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
      }
    }
    if (window.scbtTwitchIs) {
      elemArr = document.body.getElementsByClassName('simplebar-scroll-content');
      if (elemArr[4]) {
        elemArr[4].scrollTop = elemArr[4].scrollHeight - elemArr[4].clientHeight;
      }
      if (elemArr[2]) {
        elemArr[2].scrollTop = elemArr[2].scrollHeight - elemArr[2].clientHeight;
      }
    }
    if (window.scbtYoutubeIs) {
      elemArr = scbt_get_arr_chatbox_elem();
      if (elemArr[0]) {
        elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
      }
    }

  }
  elemArr = null; return false;
}


function scbt_user_chat_font_size() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
  } else {
    
    if (window.scbtTwitchIs || window.scbtYoutubeIs) {
      var elemArr = scbt_get_arr_chats();
    } else {
      var elemArr = scbt_get_arr_message_elems_from_parent_element(document.body);
    }

    if (window.scbtFontUp < 6) {
      if (window.scbtFontSize == 'initial') {
        window.scbtFontSize = 1;
      }
      if (window.scbtHeightSize == 'initial') {
        window.scbtHeightSize = 'auto'; 
      }
      window.scbtFontSize = window.scbtFontSize - -.25;
      var str = window.scbtFontSize + 'em';
      window.scbtFontUp = window.scbtFontUp - -1;
    } else {
      window.scbtFontSize = 'initial';
      var str = 'initial';
      window.scbtHeightSize = 'initial';
      var str2 = 'initial';
      window.scbtFontUp = 1;
    }

    [].forEach.call(elemArr, function(elem) {
        elem.style.setProperty('font-size', str, 'important');
        elem.style.height = str2;
    });
  }
    str = str2 = elem = elemArr = null; return false;
}


function scbt_user_chat_full_screen_width() {
  if (window.scbtKickIs) {
    if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.querySelectorAll('div.cursor-pointer.opacity-100');
    if (elemArr[0]) {
      elemArr[0].click();
    }
    var elemArr = document.body.querySelectorAll('.main-html.h-screen.w-screen .flex.h-full.w-full > .flex.grow.overflow-hidden:first-of-type > div.relative:first-of-type');
    if (elemArr[0]) {
      elemArr[0].style.display = 'none';
    }
    window.scbtFullScreenWidthIs = true;
    elemArr = null; return false;
  }
  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.querySelectorAll('div.cursor-pointer.base-icon');
    if (elemArr[0]) {
      elemArr[0].click();
    }
    var elemArr = document.body.querySelectorAll('.main-html.h-screen.w-screen .flex.h-full.w-full > .flex.grow.overflow-hidden:first-of-type > div.relative:first-of-type');
    if (elemArr[0]) {
      elemArr[0].style.display = 'flex';
    }
    window.scbtFullScreenWidthIs = false;
    elemArr = null; return false;
    }  
  }

  if (window.scbtOdyseeIs) {
    if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.getElementsByClassName('file-page__video');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = '0.1rem';
      elemArr[0].style.paddingLeft = '0.1rem';
      elemArr[0].style.maxWidth = 'none';
    }
    elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '-1rem';
      elemArr[0].style.width = '350px';
    }
    window.scbtFullScreenWidthIs = true;
    elemArr = null; return false;
  }

  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.getElementsByClassName('file-page__video');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = '2rem';
      elemArr[0].style.paddingLeft = '2rem';
      elemArr[0].style.maxWidth = '1700px';
    }
    elemArr = document.body.getElementsByClassName('chat__wrapper');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '0';
      elemArr[0].style.width = '350px';
    }
    window.scbtFullScreenWidthIs = false;
    elemArr = null; return false;
    }
  }

  if (window.scbtRumbleIs) {
    if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.getElementsByClassName('nonconstrained');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '0px';
    }
    elemArr = document.body.getElementsByClassName('navs');
    if (elemArr[0]) {
      elemArr[0].style.display = 'none';
    }
    window.scbtFullScreenWidthIs = true;
    elemArr = null; return false;
  }
  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.getElementsByClassName('nonconstrained');
    if (elemArr[0]) {
      elemArr[0].style.marginLeft = '80px';
    }
    elemArr = document.body.getElementsByClassName('navs');
    if (elemArr[0]) {
      elemArr[0].style.display = 'block';
    }
    window.scbtFullScreenWidthIs = false;
    elemArr = null; return false;
    }
  }

  if (window.scbtTiktokIs) {
    if (window.scbtFullScreenWidthIs === false) {
      var elemArr = document.body.querySelectorAll('[data-e2e="chat-close-button"]');
      if (elemArr[0]) {
        elemArr[0].click();  
      } 
      elemArr = document.body.querySelectorAll("div[class*='DivSideNavContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      window.scbtFullScreenWidthIs = true;
      elemArr = null; return false;
    }
    if (window.scbtFullScreenWidthIs === true) {
      var elemArr = document.body.querySelectorAll('[data-e2e="open-chat-button"]');
      if (elemArr[0]) {
        elemArr[0].click();  
      }
      elemArr = document.body.querySelectorAll("div[class*='DivSideNavContainer']");
      if (elemArr[0]) {
         elemArr[0].style.display = 'block';
      }
      window.scbtFullScreenWidthIs = false;
      elemArr = null; return false;
    }

  }


  if (window.scbtTwitchIs) {
    if (window.scbtFullScreenWidthIs === false) {
      var elemArr = document.body.querySelectorAll("[data-a-target='right-column__toggle-collapse-btn']");
      if (elemArr[0]) {
        elemArr[0].click();  
      }
      var elemArr = document.body.getElementsByClassName('side-nav');
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      window.scbtFullScreenWidthIs = true;
      elemArr = null; return false;
    }
    if (window.scbtFullScreenWidthIs === true) {
      var elemArr = document.body.querySelectorAll("[data-a-target='right-column__toggle-collapse-btn']");
      if (elemArr[0]) {
        elemArr[0].click();  
      }
      var elemArr = document.body.getElementsByClassName('side-nav');
      if (elemArr[0]) {
         elemArr[0].style.display = 'block';
      }
      window.scbtFullScreenWidthIs = false;
      elemArr = null; return false;
    }
  }

  if (window.scbtYoutubeIs) {
    if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.querySelectorAll('#chat');
    if (elemArr[0]) {
      elemArr[0].style.width = '34vw';
    }
    var elemArr = document.body.querySelectorAll('#primary');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = '0px';
    }
    window.scbtFullScreenWidthIs = true;
    elemArr = null; return false;
  }

  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.querySelectorAll('#chat');
    if (elemArr[0]) {
      elemArr[0].style.width = 'initial';
    }
    var elemArr = document.body.querySelectorAll('#primary');
    if (elemArr[0]) {
      elemArr[0].style.paddingRight = 'initial';
    }
    window.scbtFullScreenWidthIs = false;
    elemArr = null; return false;
    }
  }

}


function scbt_user_chat_non_bot() {
  

  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
  } else {
      
      if (window.scbtTwitchIs === false) {
        var elemArr = scbt_get_arr_chats();
        if (window.scbtNonBotChatShow === 1) {
            window.scbtChatBRef.textContent = ' - non bot chats -';
            [].forEach.call(elemArr, function(elem) {
              elem.style.opacity = 1;
              var elem2Arr = scbt_get_arr_message_elems_from_parent_element(elem);
              if (elem2Arr[0]) {
                var str = elem2Arr[0].textContent;
                if (str) {
                  if (str.indexOf('!') == '0') {
                    elem.style.opacity = '.25';
                  }
                }
              }
              var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
              if (elem2Arr[0]) {
                var str = elem2Arr[0].textContent;
                if (str) {
                  str = str.toLowerCase();
                  if ( ( str.indexOf('bot') > -1 ) || ( str == 'streamelements') || ( str == 'streamlabs') ) {
                    elem.style.opacity = '.25';
                  }
                }
              }
          });
          window.scbtNonBotChatShow = 2;
          elemArr = elem2Arr = str = elem = null; return false;
        }
      }


      if (window.scbtTwitchIs) {
        var elemArr = document.body.getElementsByClassName('va-vod-chat');
        if (elemArr[0]) {
          var elemArr = document.body.getElementsByClassName('video-chat__message');
        } else {
          var elemArr = document.body.querySelectorAll('.chat-line-message-body, .chat-line__message');  
        }
        var toSearchFor = '.text-fragment';
        var toSearchFor2 = '.chat-author__display-name';
        if (window.scbtNonBotChatShow === 1) {
            window.scbtChatBRef.textContent = ' - non bot chats -';
            [].forEach.call(elemArr, function(elem) {
              elem.style.opacity = 1;
              var m = elem.querySelector(toSearchFor);
              if (m) {
                var um = m.textContent;
                if (um) {
                  if (um.indexOf('!') == '0') {
                    elem.style.opacity = '.25';
                  }
                }
              }
              var arr = elem.querySelectorAll(toSearchFor2);
              [].forEach.call(arr, function(username) {
                if (username) {
                  var u = username.textContent;
                  if (u) {
                    u = u.toLowerCase();
                    if ( ( u.indexOf('bot') > -1 ) || ( u == 'streamelements') || ( u == 'streamlabs') ) {
                      elem.style.opacity = '.25';
                    }
                  }
                }
              });
            });
        window.scbtNonBotChatShow = 2;
        elemArr = elem2Arr = str = elem = null; return false;
      }
    }

      if (window.scbtNonBotChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
          elem.parentElement.style.opacity = 1;
        });
        window.scbtNonBotChatShow = 1;
        elemArr = elem2Arr = str = elem = null; return false;
      }

    }
}


function scbt_user_chat_text_only() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('span');

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'none';
        });
        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) { 
        window.scbtChatBRef.textContent = ' - non text only chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.display = 'inline-block';
            scbt_helper_chat_blur(elem);
        });
        window.scbtTextOnlyChatShow = 3;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'inline-block';
          scbt_helper_chat_off(elem);
        });
        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      
      var elemArr = scbt_get_arr_chats();

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';

        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'hidden';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'hidden';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'hidden';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'hidden';
          });
          var canvasElemArr = elem.getElementsByTagName('canvas');
          [].forEach.call(canvasElemArr, function(canvasElem) {
            canvasElem.style.visibility = 'hidden';
          });
        });

        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = canvasElemArr = canvasElem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        
        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'visible';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'visible';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'visible';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'visible';
          });
          var canvasElemArr = elem.getElementsByTagName('canvas');
          [].forEach.call(canvasElemArr, function(canvasElem) {
            canvasElem.style.visibility = 'visible';
          });
        });

        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = canvasElemArr = canvasElem = null; return false;
      } //if (window.scbtTextOnlyChatShow === 2)
    } // if livechat
}


function scbt_user_chat_up_to_top() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = 0;
  } else {
    
    if (window.scbtKickIs) {
      var elemArr = document.body.querySelectorAll('.overflow-y-scroll.py-3');
      if (elemArr[0]) {
        elemArr[0].scroll({top:0,behavior:'smooth'});
        elemArr[0].animate({ scrollTop: 0 }, 100);
        elemArr[0].scrollTop = 0;
      }
    }
    if (window.scbtOdyseeIs) {
    }
    if (window.scbtRumbleIs) {
    }
    if (window.scbtTiktokIs) {
      var elemArr = document.body.querySelectorAll("div[class*='DivChatMessageList']");
      if (elemArr[0]) {
        elemArr[0].scroll({top:0,behavior:'smooth'});
        elemArr[0].animate({ scrollTop: 0 }, 100);
        elemArr[0].scrollTop = 0;
      }
    }
    if (window.scbtTwitchIs) {
      var elemArr = document.body.getElementsByClassName('simplebar-scroll-content');
      if (elemArr[4]) {
        elemArr[4].scroll({top:0,behavior:'smooth'});
        elemArr[4].animate({ scrollTop: 0 }, 100);
        elemArr[4].scrollTop = 0;
      }
      if (elemArr[2]) {
        elemArr[2].scroll({top:0,behavior:'smooth'});
        elemArr[2].animate({ scrollTop: 0 }, 100);
        elemArr[2].scrollTop = 0;
      }
    }
    if (window.scbtYoutubeIs) {
      var elemArr = scbt_get_arr_chatbox_elem();
      if (elemArr[0]) {
        elemArr[0].scroll({top:0,behavior:'smooth'});
        elemArr[0].animate({ scrollTop: 0 }, 100);
        elemArr[0].scrollTop = 0;
      }
    }

    
  }
  elemArr = null; return false;
}


function scbt_full_screen_video_height_chat() {
  
  if (window.scbtKickIs) {
      if (window.scbtFullScreenHeightIs === false) {
      var elemArr = document.body.querySelectorAll('.flex.h-full.w-full.flex-col.overflow-hidden > .flex.grow.overflow-hidden');
      if (elemArr[0]) {
        elemArr[0].style.height = '100vh';
        elemArr[0].style.overflow = 'visible';
        elemArr[0].style.zIndex = '100';
        elemArr[0].style.marginTop = '-3rem';
      }
      window.scbtFullScreenHeightIs = true;
      scbt_user_chat_down_to_bottom();
      elemArr = null; return false;
    }

    if (window.scbtFullScreenHeightIs === true) {
      var elemArr = document.body.querySelectorAll('.flex.h-full.w-full.flex-col.overflow-hidden > .flex.grow.overflow-hidden');
      if (elemArr[0]) {
        elemArr[0].style.height = 'initial';
        elemArr[0].style.overflow = 'hidden';
        elemArr[0].style.zIndex = '1';
        elemArr[0].style.marginTop = 'initial';
      }
      window.scbtFullScreenHeightIs = false;
      scbt_user_chat_down_to_bottom();
      elemArr = null; return false;
    }
  }
  if (window.scbtOdyseeIs) {
  }
  if (window.scbtRumbleIs) {
  }
  if (window.scbtTiktokIs) {
    if (window.scbtFullScreenHeightIs === false) {
      var elemArr = document.body.querySelectorAll("div[class*='DivHeaderContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivSideNavContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivChatRoomHeader']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivTopViewersContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivRoomMessage']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivEnterMessage']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivChatRoomAnimationContainer']");
      if (elemArr[0]) {
        elemArr[0].style.height = '105vh';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivLiveContentContainer']");
      if (elemArr[0]) {
        elemArr[0].style.marginTop = '-50px';
      }
      window.scbtFullScreenHeightIs = true;
      scbt_user_chat_down_to_bottom();
      elemArr = null; return false;
    }
    if (window.scbtFullScreenHeightIs === true) {
      var elemArr = document.body.querySelectorAll("div[class*='DivHeaderContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'flex';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivSideNavContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'block';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivChatRoomHeader']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'flex';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivTopViewersContainer']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'flex';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivRoomMessage']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'flex';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivEnterMessage']");
      if (elemArr[0]) {
        elemArr[0].style.display = 'flex';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivChatRoomAnimationContainer']");
      if (elemArr[0]) {
        elemArr[0].style.height = 'calc(100vh - 60px)';
      }
      elemArr = document.body.querySelectorAll("div[class*='DivLiveContentContainer']");
      if (elemArr[0]) {
        elemArr[0].style.marginTop = '0px';
      }
      window.scbtFullScreenHeightIs = false;
      scbt_user_chat_down_to_bottom();
      elemArr = null; return false;
    }
  }
  if (window.scbtTwitchIs) {
  }
  if (window.scbtYoutubeIs) {
    if (window.scbtFullScreenHeightIs === false) {
       var elemArr = document.body.querySelectorAll('#chat');
       if (elemArr[0]) {
        elemArr[0].style.height = '96vh'; 
       }
       var elemArr = document.body.querySelectorAll('#secondary');
       if (elemArr[0]) {
        elemArr[0].style.paddingTop = '0px';
       }
       window.scbtFullScreenHeightIs = true;
       scbt_user_chat_down_to_bottom();
       elemArr = null; return false;
      }

      if (window.scbtFullScreenHeightIs === true) {
        var elemArr = document.body.querySelectorAll('#chat');
        if (elemArr[0]) {
          elemArr[0].style.height = 'initial';
        }
        var elemArr = document.body.querySelectorAll('#secondary');
        if (elemArr[0]) {
          elemArr[0].style.paddingTop = 'initial';
        }
        window.scbtFullScreenHeightIs = false;
        scbt_user_chat_down_to_bottom();
        elemArr = null; return false;
      }
  }

  
}


// view stream in theatre mode
function scbt_user_theatre_mode() {
 
  if (window.scbtKickIs) {
  }
  if (window.scbtOdyseeIs) {
  }
  if (window.scbtRumbleIs) {
  }
  if (window.scbtTiktokIs) {
    scbt_user_chat_full_screen_width();
  }
  if (window.scbtTwitchIs) {
    var elemArr = document.body.querySelectorAll('.toggle-visibility__right-column button');
    if (elemArr[0]) {
      elemArr[0].click();
    }
  }
  if (window.scbtYoutubeIs) {
    var elemArr = document.body.querySelectorAll('#secondary');
    if (elemArr[0]) {
      if (elemArr[0].style.display == 'none') {
        elemArr[0].style.display = 'block';
      } else {
        elemArr[0].style.display = 'none';
      }
    }
  }

 var elemArr = document.body.getElementsByClassName('chat-container');
 if (elemArr[0]) {
  if (elemArr[0].style.display == 'block') {
    elemArr[0].style.display = 'none';
  } else {
    elemArr[0].style.display = 'block';
  }
 }
 var elemArr = document.body.getElementsByClassName('sidebar');
 if (elemArr[0]) {
  if (elemArr[0].style.display == 'block') {
    elemArr[0].style.display = 'none';
  } else {
    elemArr[0].style.display = 'block';
  }
 }
  elemArr = null; return false;
}


function scbt_user_toggle_chats(e) {

  var parameter = '';
  if (e) {
    if (typeof e == 'string') {
      parameter = e;
    } else {
      if (e.preventDefault) { e.preventDefault(); }
      if (e.target) {
        if (e.target.id) {
          switch ( e.target.id ) {
            case 'scbt4':
              parameter = 'owner';
              break;
            case 'scbt5':
              parameter = 'moderator';
              break;
            case 'scbt6':
               parameter = 'sub';
              break;
            case 'scbt7':
              parameter = 'mod_sub';
              break;
            case 'scbt8':
              parameter = 'vip';
              break;
            case 'scbt9':
              parameter = 'donation';
              break;
            case 'scbt11':
              parameter = 'mention';
              break;
            case 'scbt12':
              parameter = 'hashtag';
              break;
            case 'scbt29':
              parameter = 'newSub';
              break;
          } // end switch
        } // if e target id
      }   // e target
    }     // if e is not a string 

  }       // if e

  if (parameter) {
    
    if (parameter == 'vip') {
      parameter = 'verified';
    }
    // saved chat 
    if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
      
      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          }
        });
        window.scbtVisibilityChatShow = 2; 
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          }
        });
        window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      // live chat
    } else {
      if (window.scbtKickIs) {
        scbt_something_for_kick(); return false;
      }
      if (window.scbtOdyseeIs) {
        scbt_something_for_kick(); return false;
      }
      if (window.scbtRumbleIs) {
        scbt_something_for_kick(); return false;
      }
      if (window.scbtTiktokIs) {
        scbt_something_for_tiktok(parameter); return false;
      }
      if (window.scbtTwitchIs) {
        scbt_something_for_twitch(parameter); return false;
      }
      if (window.scbtYoutubeIs) {
        scbt_something_for_youtube(parameter); return false;
      }
  }
  return false;
}


function scbt_something_for_tiktok(parameter) {
  var elemArr = document.body.querySelectorAll('[data-e2e="chat-message"], [data-e2e="social-message"], [data-e2e="enter-message"], .tiktok-15hhtcj');
  if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;

          if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('broadcaster') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          } 
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('sub_') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('moderater') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('sub_') > -1 || srcStr.indexOf('moderater') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if ( (parameter == 'vip') || (parameter == 'verified') ) {
            if (elem.classList.contains('vip') ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('gifter') > -1 || srcStr.indexOf('fans_badge') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mention') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('@') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
          }
          if (parameter == 'hashtag') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('#') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            }
          if (parameter == 'donation') {
            var elem3Arr = elem.querySelectorAll('.tiktok-9wfq77');
            if (elem3Arr[0]) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
      });
      window.scbtVisibilityChatShow = 2;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }


      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            
            if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('broadcaster') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          } 
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('sub_') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('moderater') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('sub_') > -1 || srcStr.indexOf('moderater') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if ( (parameter == 'vip') || (parameter == 'verified') ) {
            if (elem.classList.contains('vip') ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElm) {
              var srcStr = imgElm.getAttribute('src');
              if (srcStr) {
                if (srcStr.indexOf('gifter') > -1 || srcStr.indexOf('fans_badge') > -1) {
                  elem.style.opacity = 0;
                }
              }
            });
          }
          if (parameter == 'mention') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('@') > -1 ) {
                  elem.style.opacity = 0;
                }
              }
          }
          if (parameter == 'hashtag') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('#') > -1 ) {
                  elem.style.opacity = 0;
                }
              }
            }
          if (parameter == 'donation') {
            var elem3Arr = elem.querySelectorAll('.tiktok-9wfq77');
            if (elem3Arr[0]) {
              elem.style.opacity = 0;
            }
          }
          // end
          });
          window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }
  return false;
}



























function scbt_something_for_twitch(parameter) {
      if (window.scbtMobileIs === true) {
        var elemArr = document.body.querySelectorAll('main div div ul li, .user-notice-line');
        var toSearchFor = '.chat-badge';
      }
      if (window.scbtMobileIs != true) {
        var elem2Arr = document.body.getElementsByClassName('va-vod-chat');
        if (elem2Arr[0]) {
          var elemArr = document.body.querySelectorAll('.video-chat__message-list-wrapper li .vod-message');
        } else {
          var elemArr = document.body.querySelectorAll('.chat-line__message, .user-notice-line');
        }
        toSearchFor = '.chat-badge';
      }

      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;

          if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if (a.indexOf('moderator') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('moderator') > -1) || (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1)  ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if ( (parameter == 'vip') || (parameter == 'verified') ) {
            if (elem.classList.contains('vip') ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mention') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('@') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
          }
          if (parameter == 'hashtag') {
              var str = elem.textContent;
              if (str) {
                if ( str.indexOf('#') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            }
          if (parameter == 'donation') {
            var elem3Arr = elem.getElementsByClassName('chat-line__message--cheer-amount');
            if (elem3Arr[0]) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }

      });
      window.scbtVisibilityChatShow = 2;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }


      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            
            if (parameter == 'owner') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'sub') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'moderator') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if (a.indexOf('moderator') > -1) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'mod_sub') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('moderator') > -1) || (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1)  ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
             if ( (parameter == 'vip') || (parameter == 'verified') ) {
              if (elem.classList.contains('vip') ) {
                elem.style.opacity = 0;
              }
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'mention') {
                var str = elem.textContent;
                if (str) {
                  if ( str.indexOf('@') > -1 ) {
                    elem.style.opacity = 0;
                  }
                }
            }
            if (parameter == 'hashtag') {
                var str = elem.textContent;
                if (str) {
                  if ( str.indexOf('#') > -1 ) {
                    elem.style.opacity = 0;
                  }
                }
              }
            if (parameter == 'donation') {
              var elem3Arr = elem.getElementsByClassName('chat-line__message--cheer-amount');
              if (elem3Arr[0]) {
                elem.style.opacity = 0;
              }
            }

          });
          window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }
  return false;
}


function scbt_something_for_youtube(parameter) {
  var elemArr = [];
  var toSearchFor = '';

    if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
      elemArr = window.scbtYTChatIframeRef.contentWindow.document.body.querySelectorAll('.yt-live-chat-text-message-renderer .yt-live-chat-text-message-renderer');
    } else {
      elemArr = scbt_get_arr_chats();
    }
    toSearchFor = 'xyz';

    if (window.scbtVisibilityChatShow === 1) {
      window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
      [].forEach.call(elemArr, function(elem) {
        elem.style.opacity = 0;
        if ( (parameter == 'owner') || (parameter == 'moderator') || (parameter == 'sub') || (parameter == 'member') || (parameter == 'mod_sub') ) {
          if (parameter == 'sub') { parameter = 'member'; }
          if ( elem.getAttribute('author-type') ) { 
            toSearchFor = elem.getAttribute('author-type');
          } else {
            toSearchFor = 'xyz';
          }
          if ( (parameter != 'mod_sub' && toSearchFor == parameter) || (parameter == 'mod_sub' && toSearchFor != 'xyz') ) {
            // if (toSearchFor.indexOf(parameter) > -1 ) {
            scbt_helper_chat_on(elem);
            elem.style.opacity = 1;
          }
        }
        
        if ( (parameter == 'vip') || (parameter == 'verified') ) {
          if (elem.classList.contains('vip') ) {
            scbt_helper_chat_on(elem);
            elem.style.opacity = 1;
          }
          var elem2Arr = elem.querySelectorAll('#chip-badges .yt-live-chat-author-chip');
          if (elem2Arr[0]) {
            if (elem2Arr[0].ariaLabel == 'Verified') {
              elem.style.opacity = 1;
            }
          }
          var elem3Arr = elem.getElementsByClassName('vip');
          [].forEach.call(elem3Arr, function(elem3) {
              elem.style.opacity = 1;
          });
        }

        if (parameter == 'donation') {
          var elem2Arr = elem.querySelectorAll('#card.yt-live-chat-paid-sticker-renderer, #card.yt-live-chat-paid-message-renderer');
          [].forEach.call(elem2Arr, function(elem2) {
            elem.style.opacity = 1;
          });
        }

        if (parameter == 'mention') {
          if (elem.id == 'message') {
            var str = elem.textContent;
            if ( str.indexOf('@') > -1 ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
        }

        if (parameter == 'hashtag') {
          if (elem.id == 'message') {
            var str = elem.textContent;
            if ( str.indexOf('#') > -1 ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
        }
    });
    window.scbtVisibilityChatShow = 2;
    parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
  }

  if (window.scbtVisibilityChatShow === 2) {
    window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
    [].forEach.call(elemArr, function(elem) {
        elem.style.opacity = 1;
        scbt_helper_chat_blur(elem);

        if ( (parameter == 'owner') || (parameter == 'moderator') || (parameter == 'sub') || (parameter == 'member') || (parameter == 'mod_sub') ) {
          if (parameter == 'sub') { parameter = 'member'; }
          if (parameter == 'sub') { parameter = 'member'; }
          if ( elem.getAttribute('author-type') ) { 
            toSearchFor = elem.getAttribute('author-type');
          } else {
            toSearchFor = 'xyz';
          }
          if ( (parameter != 'mod_sub' && toSearchFor == parameter) || (parameter == 'mod_sub' && toSearchFor != 'xyz') ) {
            elem.style.opacity = 0;
          }
        }

        if ( (parameter == 'vip') || (parameter == 'verified') ) {
          var elem2Arr = elem.querySelectorAll('#chip-badges .yt-live-chat-author-chip');
          if (elem2Arr[0]) {
            if (elem2Arr[0].ariaLabel == 'Verified') {
              elem.style.opacity = 0;
            }
          }
          var elem3Arr = elem.getElementsByClassName('vip');
          [].forEach.call(elem3Arr, function(elem3) {
            elem.style.opacity = 0;
          });
          if (elem.classList.contains('vip') ) {
            elem.style.opacity = 0;
          }
        }

        if (parameter == 'donation') {
          var elem2Arr = elem.querySelectorAll('#card.yt-live-chat-paid-sticker-renderer, #card.yt-live-chat-paid-message-renderer');
          [].forEach.call(elem2Arr, function(elem2) {
            elem.style.opacity = 0;
          });
        }

        if (parameter == 'mention') {
          if (elem.id == 'message') {
            var str = elem.textContent;
            if ( str.indexOf('@') > -1 ) {
              elem.style.opacity = 0;
            }
          }
        }

        if (parameter == 'hashtag') {
          if (elem.id == 'message') {
            var str = elem.textContent;
            if ( str.indexOf('#') > -1 ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 0;
            }
          }
        }
      });
      window.scbtVisibilityChatShow = 3;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }

    if (window.scbtVisibilityChatShow === 3) {
      window.scbtChatBRef.textContent = '';
      [].forEach.call(elemArr, function(elem) {
        scbt_helper_chat_off(elem);
        elem.style.opacity = 1;
      });
      window.scbtVisibilityChatShow = 1;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }
} // end scbt_something_for_youtube




function scbt_something_for_kick() {

  elemArr = scbt_get_arr_chats();

      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          if (parameter == 'mention') {
            var str = elem.textContent;
            if (str) {
              if ( str.indexOf('@') > -1 ) {
                scbt_helper_chat_on(elem);
                elem.style.opacity = 1;
              }
            }
          }
          if (parameter == 'hashtag') {
            var str = elem.textContent;
            if (str) {
              if ( str.indexOf('#') > -1 ) {
                scbt_helper_chat_on(elem);
                elem.style.opacity = 1;
              }
            }
          }
          if (parameter == 'owner') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'owner');
            if (binary > 0) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
          if (parameter == 'sub') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'sub');
            if (binary > 0) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
          if (parameter == 'moderator') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'moderator');
            if (binary > 0) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
          if (parameter == 'mod_sub') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'sub');
            var binary2 = scbt_get_binary_role_from_chat_message(elem, 'moderator');
            if ( (binary > 0) || (binary2 > 0)) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
          if ( (parameter == 'vip') || (parameter == 'verified') ) {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'verified');
            if (binary > 0) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }
        });
        window.scbtVisibilityChatShow = 2;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
          scbt_helper_chat_blur(elem);
          if (parameter == 'mention') {
            var str = elem.textContent;
            if (str) {
              if ( str.indexOf('@') > -1 ) {
                elem.style.opacity = 0;
              }
            }
          }
          if (parameter == 'hashtag') {
            var str = elem.textContent;
            if (str) {
              if ( str.indexOf('#') > -1 ) {
                elem.style.opacity = 0;
              }
            }
          }
          if (parameter == 'owner') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'owner');
            if (binary > 0) {
              elem.style.opacity = 0;
            }
          }
          if (parameter == 'sub') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'sub');
            if (binary > 0) {
              elem.style.opacity = 0;
            }
          }
          if (parameter == 'moderator') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'moderator');
            if (binary > 0) {
              elem.style.opacity = 0;
            }
          }
          if (parameter == 'mod_sub') {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'sub');
            var binary2 = scbt_get_binary_role_from_chat_message(elem, 'moderator');
            if ( (binary > 0) || (binary2 > 0)) {
              elem.style.opacity = 0;
            }
          }
         if ( (parameter == 'vip') || (parameter == 'verified') ) {
            var binary = scbt_get_binary_role_from_chat_message(elem, 'verified');
            if (binary > 0) {
              elem.style.opacity = 0;
            }
          }
        });
        window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }
    }

}




function scbt_user_toggle_sub_event_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtSubChatShow === 1) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtSubChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtSubChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtSubChatShow = 3;
        elemArr = elem = null; return false;
      }


      if (window.scbtSubChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtSubChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      if (window.scbtKickIs) {
      }
      if (window.scbtOdyseeIs) {
      }
      if (window.scbtRumbleIs) {
      }
      if (window.scbtTiktokIs) {
      }
      if (window.scbtTwitchIs) {
      }
      if (window.scbtYoutubeIs) {
      }
      var elemArr = scbt_get_arr_chats();

      if (window.scbtSubChatShow === 1) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          if (elem.classList.contains('bg-secondary') ) {
            elem.style.opacity = 1;
          }            
        });
        window.scbtSubChatShow = 2;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtSubChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            if (elem.classList.contains('bg-secondary') ) {
              elem.style.opacity = 0;
            }            
        });
        window.scbtSubChatShow = 3;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtSubChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
        });
        window.scbtSubChatShow = 1;
        elemArr = null; elem = null; return false;
      }
  }
  return false;
}


function scbt_user_toggle_verified_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtVerifiedChatShow = 3;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem = null; return false;
      }

    } else {
      
      if (window.scbtKickIs) {
      }
      if (window.scbtOdyseeIs) {
      }
      if (window.scbtRumbleIs) {
      }
      if (window.scbtTiktokIs) {
      }
      if (window.scbtTwitchIs) {
      }
      if (window.scbtYoutubeIs) {
      }

      var elemArr = scbt_get_arr_chats();

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          var elem2Arr = elem.querySelectorAll('.badge');
          [].forEach.call(elem2Arr, function(elem2) {
            var str = elem2.textContent;
            if (str == 'VIP') {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          });            
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            var elem2Arr = elem.querySelectorAll('.badge');
            [].forEach.call(elem2Arr, function(elem2) {
              var str = elem2.textContent;
              if (str == 'VIP') {
                elem.style.opacity = 0;
              }
            });            
          });
          window.scbtVerifiedChatShow = 3;
          elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem2Arr = null; elem = null; str = null; return false;
      }
    }
  return false;
}


function scbt_shuffle_array(arr) {
  var currentIndex = arr.length;
  var randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}


function scbt_get_videoObj() {
  var videoObj = {};
  videoObj.video_id = '';                  
  videoObj.video_thumbnail = '';           
  videoObj.video_title = '';               
  
  videoObj.video_url = '';                 
  videoObj.video_duration = '';            
  videoObj.video_view_count = '';          
  videoObj.video_likes_count = '';         
  videoObj.video_created_at = '';          
   
  videoObj.video_parent_category = '';     
  videoObj.video_category_slug = '';       
  videoObj.video_category_responsive = ''; 

  videoObj.video_channel_slug = '';        
  videoObj.video_channel_username = '';    

  videoObj.video_creator_slug = '';        
  videoObj.video_creator_username = '';    
  return videoObj;
}


function scbt_get_videoObj_populated(videoObj, clipObj) {
  if (clipObj) {
      if (clipObj.id) {
        videoObj.video_id = clipObj.id;
      }
      if (clipObj.thumbnail_url) {
        videoObj.video_thumbnail = clipObj.thumbnail_url;
      }
      if (clipObj.title) {
        videoObj.video_title = clipObj.title;
      }

      if (clipObj.video_url) {
        videoObj.video_url = clipObj.video_url;
      }
      if (clipObj.duration) {
        videoObj.video_duration = clipObj.duration;
      }
      if (clipObj.view_count) {
        videoObj.video_view_count = clipObj.view_count;
      }
      if (clipObj.likes_count) {
        videoObj.video_likes_count = clipObj.likes_count;
      }

      if (clipObj.created_at) {
        var created_atArr = clipObj.created_at.split('T');
        videoObj.video_created_at = created_atArr[0];
      }

      if (clipObj.category && clipObj.category.parent_category) {
        videoObj.video_parent_category = clipObj.category.parent_category;
      }
      if (clipObj.category && clipObj.category.slug) {
        videoObj.video_category_slug = clipObj.category.slug;
      }
      if (clipObj.category && clipObj.category.responsive) {
        videoObj.video_category_responsive = clipObj.category.responsive;
      }

      if (clipObj.channel && clipObj.channel.slug) {
        videoObj.video_channel_slug = clipObj.channel.slug;
      }
      if (clipObj.channel && clipObj.channel.username) {
        videoObj.video_channel_username = clipObj.channel.username;
      }

      if (clipObj.creator && clipObj.creator.slug) {
        videoObj.video_creator_slug = clipObj.creator.slug;
      }
      if (clipObj.creator && clipObj.creator.username) {
        videoObj.video_creator_username = clipObj.creator.username;
      }
    }
  return videoObj;
}


function scbt_user_clear_recent_clips_begin(e) {
  if (!e) { return false; }
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (!e.target) { return false; }
    if (!e.target.id) { return false; }

    // Followed Feed Clips
    if (e.target.id == 'scbt30d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtFollowedClip') > -1) {
            localStorage.removeItem(str);
          }
          if ( str.indexOf('scbtFollowedChannels') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: followed feed cache cleared.');
      return false;
    }

    // Followed Feed Streams
    if (e.target.id == 'scbt31d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtFollowedStream') > -1) {
            localStorage.removeItem(str);
          }
          if ( str.indexOf('scbtFollowedChannels') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: followed feed cache cleared.');
      return false;
    }

    // Fortnite Clips
    if (e.target.id == 'scbt32d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtfortniteClip') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: Fortnite feed cache cleared.');
      return false;
    }

    // Call of Duty Warzone Clips
    if (e.target.id == 'scbt33d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtcall-of-duty-warzone-2.0Clip') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: Call of Duty Warzone feed cache cleared.');
      return false;
    }

    // Valorant Clips
    if (e.target.id == 'scbt34d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtvalorantClip') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: Valorant feed cache cleared.');
      return false;
    }

    // Music Clips
    if (e.target.id == 'scbt35d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtlive-musicClip') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: Live Music feed cache cleared.');
      return false;
    }

    // Chatting Clips
    if (e.target.id == 'scbt36d') {
      for (var str in localStorage) {
        if (str) {
          if ( str.indexOf('scbtjust-chattingClip') > -1) {
            localStorage.removeItem(str);
          }
        }
      }
      scbt_helper_toast('Success: Just Chatting feed cache cleared.');
      return false;
    }

  }
  return false;
}


function scbt_user_load_recent_clips_begin(e) {
  if (!e) {  return false; }
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
    if (!e.target) {  return false; }
    if (!e.target.id) {  return false; }
      
      window.scbtOptionsMenuRef.classList.remove('scbt-bl');
      
      var elemArr = document.body.getElementsByClassName('scbtLoading');
      if (elemArr[0]) {
        elemArr[0].style.display = 'block';
      }
      var elemArr = document.body.getElementsByClassName('scbtClipsMenuContent');
      if (elemArr[0]) {
        elemArr[0].innerHTML = '';
      }
      var elemArr = document.body.getElementsByClassName('scbtClipsMenuTitle');
      if (elemArr[0]) {
        elemArr[0].innerHTML = '';
      }

      var today = 'scbtFollowedChannels' + new Date().toISOString().slice(0, 10);
      var str = localStorage.getItem(today);
      if (str) {
        window.scbtFollowedChannelsArr = JSON.parse(str);
        window.scbtFollowedChannelsArr = scbt_shuffle_array(window.scbtFollowedChannelsArr);
      }
      // Followed Feed Clips 
      if (e.target.id == 'scbt30') {
        elemArr[0].innerHTML = '<h3>Recent Clips from Followed</h3>';
        if (str) {
          scbt_loop_through_followed('Clip');
          return false;
        } else {
          scbt_get_followed_channels_from_api('Clip');
          return false;
        }
      }
      // Followed Feed Streams
      if (e.target.id == 'scbt31') {
        elemArr[0].innerHTML = '<h3>Recent Stream from Followed</h3>';
        if (str) {
          scbt_loop_through_followed('Stream');
          return false;
        } else {
          scbt_get_followed_channels_from_api('Stream');
          return false;
        }
      }

      // Fortnite Clips
      if (e.target.id == 'scbt32') {
        elemArr[0].innerHTML = '<h3>Recent Fortnite Clips</h3>';
        var today = 'scbtfortniteClip' + new Date().toISOString().slice(0, 10) + '1';
        var str = localStorage.getItem(today);
        if (str) {
          scbt_loop_through_recent('fortnite');
          return false;
        } else {
          scbt_get_recent_clips_from_api('fortnite');
          return false;
        }
      }

      // Call of Duty Warzone Clips
      if (e.target.id == 'scbt33') {
        elemArr[0].innerHTML = '<h3>Recent Call of Duty Clips</h3>';
        var today = 'scbtcall-of-duty-warzone-2.0Clip' + new Date().toISOString().slice(0, 10) + '1';
        var str = localStorage.getItem(today);
        if (str) {
          scbt_loop_through_recent('call-of-duty-warzone-2.0');
          return false;
        } else {
          scbt_get_recent_clips_from_api('call-of-duty-warzone-2.0');
          return false;
        }
      }

      // Valorant Clips
      if (e.target.id == 'scbt34') {
        elemArr[0].innerHTML = '<h3>Recent Valorant Clips</h3>';
        var today = 'scbtvalorantClip' + new Date().toISOString().slice(0, 10) + '1';
        var str = localStorage.getItem(today);
        if (str) {
          scbt_loop_through_recent('valorant');
          return false;
        } else {
          scbt_get_recent_clips_from_api('valorant');
          return false;
        }
      }

      // Music Clips
      if (e.target.id == 'scbt35') {
        elemArr[0].innerHTML = '<h3>Recent Music Clips</h3>';
        var today = 'scbtlive-musicClip' + new Date().toISOString().slice(0, 10) + '1';
        var str = localStorage.getItem(today);
        if (str) {
          scbt_loop_through_recent('live-music');
          return false;
        } else {
          scbt_get_recent_clips_from_api('live-music');
          return false;
        }
      }

      // Chatting Clips
      if (e.target.id == 'scbt36') {
        elemArr[0].innerHTML = '<h3>Recent Chatting Clips</h3>';
        var today = 'scbtjust-chattingClip' + new Date().toISOString().slice(0, 10) + '1';
        var str = localStorage.getItem(today);
        if (str) {
          scbt_loop_through_recent('just-chatting');
          return false;
        } else {
          scbt_get_recent_clips_from_api('just-chatting');
          return false;
        }
      }

    }
  return false;
} 


async function scbt_loop_through_followed(videoTypeStr) {
  var arrl = window.scbtFollowedChannelsArr.length;
  for (var i = 0; i < arrl; i++) {
    var today = 'scbtFollowed' + videoTypeStr + new Date().toISOString().slice(0, 10) + window.scbtFollowedChannelsArr[i];
    var str = localStorage.getItem(today); 
    if (str) { 
      var videoObj = JSON.parse(str);
      scbt_helper_build_recent_feed(videoObj);
    } else {
      if (videoTypeStr == 'Clip') {
        await scbt_get_clips_from_api(window.scbtFollowedChannelsArr[i]);
      }
      if (videoTypeStr == 'Stream') {
        await scbt_get_stream_from_api(window.scbtFollowedChannelsArr[i]);
      }
    }
  }
  var elemArr = document.body.getElementsByClassName('scbtLoading');
  if (elemArr[0]) {
    elemArr[0].style.display = 'none';
  }
  return false;
}


async function scbt_loop_through_recent(categoryStr) {
  for (var i = 0; i < 20; i++) {
    var today = 'scbt' + categoryStr + 'Clip' + new Date().toISOString().slice(0, 10)  + i;
    var str = localStorage.getItem(today); 
    if (str) { 
      var videoObj = JSON.parse(str);
      scbt_helper_build_recent_feed(videoObj);
    } else {
      await scbt_get_recent_clips_from_api(categoryStr);
    }
  }
  
  var ul = document.querySelector('.scbtClipsMenuContent');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  var elemArr = document.body.getElementsByClassName('scbtLoading');
  if (elemArr[0]) {
    elemArr[0].style.display = 'none';
  }
  return false;
}


function scbt_get_followed_channels_from_api(nextCursor) {
  if (nextCursor == 'Clip') {
    nextCursor = 0;
    window.scbtGetWhat = 'clips';
  }
  if (nextCursor == 'Stream') {
    nextCursor = 0;
    window.scbtGetWhat = 'streams';
  }

  fetch('https://kick.com/api/v2/channels/followed?cursor=' + nextCursor,
  {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })
    .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
    .then(function(resp){ 
    if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.error('api error1', resp); } else {
      if (resp == 'error') {
        console.log('api error2'); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
      } else {
        if (typeof resp != 'object') { console.error('api error2', resp); return false; }

          if (resp.nextCursor && resp.nextCursor != '0') {
            window.scbtnextCursor = resp.nextCursor;
          } else {
            window.scbtnextCursor = null;
          }
          if (resp.channels) { } else { console.error('api error3', resp); return false; }

          var arrl = resp.channels.length;
          for (var i = 0; i < arrl; i++) {
            window.scbtFollowedChannelsArr.push(resp.channels[i].user_username);
          }

          if (window.scbtnextCursor) {
            setTimeout(function(){ scbt_get_followed_channels_from_api(window.scbtnextCursor); }, 3000); return false;
          } else {
            var today = 'scbtFollowedChannels' + new Date().toISOString().slice(0, 10);
            localStorage.setItem(today, JSON.stringify(window.scbtFollowedChannelsArr)); 

            if (window.scbtGetWhat == 'clips') {
              scbt_loop_through_followed('Clip');
            }
            if (window.scbtGetWhat == 'streams') {
              scbt_loop_through_followed('Stream');
            }
          }

        }
      }
    })
  .catch(error => {
     console.error(error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
  });
}


function scbt_get_stream_from_api(username) {
  fetch('https://kick.com/api/v2/channels/' + username + '/videos/latest',
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })
    .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
    .then(function(resp){ 
    if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.error('api error1', resp); return false; } else {
      if (resp == 'error') {
        console.error('api error2', resp); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
      } else {

        if (typeof resp != 'object') { console.error('api error2', resp); return false; }
        if (resp.data) { } else { console.error('api error3', resp); return false; }
          var videoObj = scbt_get_videoObj();
          if (resp.data.video && resp.data.video.uuid) {
            videoObj.video_id = resp.data.video.uuid;  
          }
          if (resp.data.thumbnail && resp.data.thumbnail.src) {
            videoObj.video_thumbnail = resp.data.thumbnail.src;
          }
          if (resp.data && resp.data.session_title) {
            videoObj.video_title = resp.data.session_title;  
          }
          var today = 'scbtFollowedStream' + new Date().toISOString().slice(0, 10) + username;
          localStorage.setItem(today, JSON.stringify(videoObj)); 
          scbt_helper_build_recent_feed(videoObj);
        }
      }
    })
  .catch(error => {
     console.log(error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
  });
}


function scbt_get_clips_from_api(username) {
  fetch('https://kick.com/api/v2/channels/' + username + '/clips?cursor=0&sort=date&time=all',
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })
    .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
    .then(function(resp){ 
    if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.error('api error1', resp); return false; } else {
      if (resp == 'error') {
        console.error('api error2', resp); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
      } else {
        if (typeof resp != 'object') { console.error('api error2', resp); return false; }
        if (resp.clips) { } else { console.error('api error3', resp); return false; }

        var arrl = resp.clips.length;
        if (arrl > 3) { arrl = 3; }
        for (var i = 0; i < arrl; i++) {
          var videoObj = scbt_get_videoObj();
          videoObj = scbt_get_videoObj_populated(videoObj, resp.clips[i]);
          var today = 'scbtFollowedClip' + new Date().toISOString().slice(0, 10) + username;
          localStorage.setItem(today, JSON.stringify(videoObj));
          scbt_helper_build_recent_feed(videoObj);
        }

        }
      }
    })
  .catch(error => {
     console.error(error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
  });
}


function scbt_get_recent_clips_from_api(categoryStr) {
  if (!categoryStr) {  return false; }
  var endpoint = 'https://kick.com/api/v2/categories/' + categoryStr + '/clips?cursor=0&sort=date&time=day';
  fetch(endpoint,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  })
  .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
  .then(function(resp){ 
  if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.error('api error1', resp); return false; } else {
    if (resp == 'error') {
      console.log('api error2', resp); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
    } else {
      if (typeof resp != 'object') { console.log('api error2', resp); return false; }
      if (resp.clips) { } else { console.log('api error3', resp); return false; }

      var arrl = resp.clips.length;
      if (arrl > 20) { arrl = 20; }
      for (var i = 0; i < arrl; i++) {
        var videoObj = scbt_get_videoObj();
        videoObj = scbt_get_videoObj_populated(videoObj, resp.clips[i]);
        var today = 'scbt' + categoryStr + 'Clip' + new Date().toISOString().slice(0, 10) + i;
        localStorage.setItem(today, JSON.stringify(videoObj));
        scbt_helper_build_recent_feed(videoObj);
      }

      var elemArr = document.body.getElementsByClassName('scbtLoading');
      if (elemArr[0]) {
        elemArr[0].style.display = 'none';
      }

    }
  }
  })
  .catch(error => {
     console.log(error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
  });
  return false;
}




function scbt_helper_build_recent_feed(videoObj) {
  var theHTML = '';
  theHTML = theHTML + '<div class="rounded p-2 transition-all duration-300 ease-trail hover:bg-secondary-lighter">';
  theHTML = theHTML + '<div class="group relative block aspect-video cursor-pointer overflow-hidden">';
  theHTML = theHTML + '<div class="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-full rounded opacity-0 lg:block"></div>';
  
  theHTML = theHTML + '<div class="absolute left-0 top-0 h-full w-full bg-secondary">';
  theHTML = theHTML + '<div data-v-36ee32dd="" class="relative h-full w-full">';
  
  if ( videoObj.video_url && videoObj.video_url.indexOf('.mp4') > -1 ) {
    theHTML = theHTML + '<video class="vjs-tech w-full object-cover h-full" webkit-playsinline="" playsinline="" controls poster="' + videoObj.video_thumbnail + '" src="' + videoObj.video_url + '" sizes="18vw"></video>';
  } 
  else if ( videoObj.video_url && videoObj.video_url.indexOf('playlist') > -1 ) {
    theHTML = theHTML + '<a href="https://kick.com/' + videoObj.video_channel_slug + '?clip=' + videoObj.video_id + '">' + '<video class="vjs-tech w-full object-cover h-full" webkit-playsinline="" playsinline="" controls poster="' + videoObj.video_thumbnail + '" sizes="18vw"></video></a>';
  }
  else {
    theHTML = theHTML + '<a href="https://kick.com/video/' + videoObj.video_id + '"><video class="vjs-tech w-full object-cover h-full" webkit-playsinline="" playsinline=""  poster="' + videoObj.video_thumbnail + '" sizes="18vw"></video></a>';
  }

  theHTML = theHTML + '</div>';
  theHTML = theHTML + '</div>';

  if (videoObj.video_duration) {
    theHTML = theHTML + '<span class="absolute left-2 top-2 rounded bg-black/80 px-1 text-xs font-light text-white">' + videoObj.video_duration + ' sec</span>';
  }

  if (videoObj.video_view_count) {
    theHTML = theHTML + '<span class="absolute bottom-2 left-2 block truncate rounded bg-black/80 px-1 text-right text-xs font-light text-white" style="max-width: 45%;">' + videoObj.video_view_count + 'views-' + videoObj.video_likes_count + '</span>';
    theHTML = theHTML + '<span class="absolute bottom-2 right-2 block truncate rounded bg-black/80 px-1 text-right text-sm font-light text-white" style="max-width: 45%;">' + videoObj.video_created_at + '</span>';
  }

  theHTML = theHTML + '</div>';

  theHTML = theHTML + '<div class="mt-3 flex w-full items-start justify-between overflow-hidden">';
  theHTML = theHTML + '<div class="flex w-full grow items-stretch space-x-3">';
  theHTML = theHTML + '<div class="leading-tight">';
  
  if (videoObj.video_parent_category) {
    theHTML = theHTML + '<a target="_blank" href="/categories/' + videoObj.video_parent_category + '/' + videoObj.video_category_slug + '" class="block h-full w-12 bg-secondary-light">';
    theHTML = theHTML + '<div data-v-36ee32dd="" class="relative h-full w-full">';
    theHTML = theHTML + '<img data-v-36ee32dd="" srcset="' + videoObj.video_category_responsive + '" src="' + videoObj.video_category_responsive + '" class="w-full object-cover h-full" alt="' + videoObj.video_category_slug + '" sizes="4vw"></div></a>';
  }
  theHTML = theHTML + '</div>';
  
  theHTML = theHTML + '<div class="grow overflow-hidden">';
  
  if ( videoObj.video_id && videoObj.video_id.indexOf('clip') > -1 ) {
    theHTML = theHTML + '<a href="https://kick.com/' + videoObj.video_channel_slug + '?clip=' + videoObj.video_id + '"  class="block cursor-pointer truncate font-semibold lg:hover:text-primary">' + videoObj.video_title + '</a>';
  } else {
    theHTML = theHTML + '<a href="https://kick.com/video/' + videoObj.video_id + '"  class="block cursor-pointer truncate font-semibold lg:hover:text-primary">' + videoObj.video_title + '</a>';
  }

  theHTML = theHTML + '<div class="truncate leading-none">';
  theHTML = theHTML + '<a aria-current="page" href="/' + videoObj.video_channel_slug + '" class="router-link-active router-link-exact-active text-xs font-semibold lg:hover:text-primary">' + videoObj.video_channel_username + '</a>';
  theHTML = theHTML + '</div>';

  if (videoObj.video_creator_slug) {
    theHTML = theHTML + '<div class="truncate leading-none">';
    theHTML = theHTML + '<a target="_blank"  href="/' + videoObj.video_creator_slug + '" class="text-xs font-semibold text-gray-400 lg:hover:text-primary">Clipped by' + videoObj.video_creator_username + '</a>';
    theHTML = theHTML + '</div>';
  }

  theHTML = theHTML + '</div></div></div></div>';

  var elemArr = document.getElementsByClassName('scbtClipsMenuContent');
  if (elemArr[0]) {
    elemArr[0].insertAdjacentHTML('beforeend', theHTML);
  }

  theHTML = null; elemArr = null; return false;
}



function scbt_helper_hide_mature_elements_on_page_load() {
  if ( (window.scbthidden15 != '1') && (window.scbthidden16 != '1') && (window.scbthidden17 != '1') && (window.scbthidden18 != '1') && (window.scbthidden19 != '1') && (window.scbthidden20 != '1') && (window.scbthidden21 != '1') && (window.scbthidden22 != '1') ) {
    return false;
  }

  var elems = document.body.querySelectorAll('.sidebar .item-categories');
  var elems2 = document.body.querySelectorAll('.carousel__slide a');
  var elems3 = document.body.querySelectorAll('.subcategory-card img');
  var as = document.body.getElementsByTagName('a');
  var elems4 = document.body.querySelectorAll('.card-content .card-category-name');

  // scbthidden22
  // 18+
  if (window.scbthidden22 > 0) {
    var tags = document.body.querySelectorAll('.card-category-tags .category-tag-component');
    [].forEach.call(tags, function(tag) {
      if (tag) {
        if (tag.textContent == '18+') {
          var p1 = tag.parentElement;
          if (p1) {
            var p2 = p1.parentElement;
            if (p2) {
              var p3 = p2.parentElement;
              if (p3) {
                  var p4 = p3.parentElement;
                  if (p4) {
                    p4.style.visibility = 'hidden';
                  }
              }
            }
          }
        }
      }
    });
  }

// scbthidden15
// https://kick.com/categories/alternative/other-tv-shows-movies
  if (window.scbthidden15 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if ( elem.textContent == 'Other TV Shows Movies' || elem.textContent == 'Other, Watch Party') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if ( elem2.textContent == 'Other TV Shows Movies' || elem2.textContent == 'Other, Watch Party') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Other TV Shows Movies' || elem3.alt == 'Other, Watch Party') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Other TV Shows Movies' || elem4.textContent == 'Other, Watch Party') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('movies') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
  }

// scbthidden16
// https://kick.com/categories/alternative/just-sleeping
  if (window.scbthidden16 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'Just Sleeping') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'Just Sleeping') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Just Sleeping') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Just Sleeping') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('just-sleeping') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
  }


// scbthidden17
// https://kick.com/categories/irl/asmr
  if (window.scbthidden17 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'ASMR') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'ASMR') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'ASMR') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'ASMR') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('asmr') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
  }


// scbthidden18
// https://kick.com/categories/creative/body-art
  if (window.scbthidden18 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'Body Art') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'Body Art') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Body Art') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Body Art') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('body-art') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
  }

// scbthidden19
// https://kick.com/categories/gambling
  if (window.scbthidden19 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'Slots & Casino') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'Slots & Casino') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Slots & Casino') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Slots & Casino') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('gambling') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
  }

// scbthidden20
// https://kick.com/categories/irl/pools-hot-tubs-bikinis  
  if (window.scbthidden20 > 0) {
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'Pools, Hot Tubs & Bikinis') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'Pools, Hot Tubs & Bikinis') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Pools, Hot Tubs & Bikinis') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Pools, Hot Tubs & Bikinis') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('pools-hot-tubs-bikinis') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
    }

// scbthidden21
// https://kick.com/categories/irl/just-chatting
   if (window.scbthidden21 > 0) {
      // Following Recommended
      
      [].forEach.call(elems, function(elem) {
        if (elem) {
          if (elem.textContent == 'Just Chatting') {
            var p1 = elem.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems2, function(elem2) {
        if (elem2) {
          if (elem2.textContent == 'Just Chatting') {
            var p1 = elem2.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                p2.style.visibility = 'hidden';
              }
            }
          }
        }
      });

      [].forEach.call(elems3, function(elem3) {
        if (elem3) {
          if (elem3.alt == 'Just Chatting') {
            var p1 = elem3.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(elems4, function(elem4) {
        if (elem4) {
          if (elem4.textContent == 'Just Chatting') {
            var p1 = elem4.parentElement;
            if (p1) {
              var p2 = p1.parentElement;
              if (p2) {
                var p3 = p2.parentElement;
                if (p3) {
                  p3.style.visibility = 'hidden';
                }
              }
            }
          }
        }
      });

      [].forEach.call(as, function(atag) {
        if (atag) {
          if (atag.href) {
            if ( atag.href.indexOf('just-chatting') > -1 ) {
              atag.style.visibility = 'hidden';
            }
          }
        }
      });
    }




  return false;
}



function scbt_helper_hide_mature_categories_on_scroll() {
  targetNode2 = null;
  if (window.scbtCategoryLoading) {
    if (window.scbtCategoryLoading.observer) {
      window.scbtCategoryLoading.observer.disconnect();
      window.scbtCategoryLoading.observer = null;
      targetNode2 = null;
      config2 = null;
      callback2 = null;
    }
  }
  targetNode2 = document.body.querySelector('.place-content-stretch');
  if (targetNode2) {
    var config2 = { 
                 childList: true,
                 attributes: false,
                 characterData: false,
                 subtree: false,
                 attributeOldValue: false,
                 characterDataOldValue: false 
               };

    var callback2 = function(mutationsList2, observer2) {
      for (let mutation2 of mutationsList2) {
          if (mutation2.type === 'childList') {
              if (mutation2.addedNodes) {
                var arrl2 = mutation2.addedNodes.length;
                for (var i=0; i < arrl2; i++) { 
                  
                  if (mutation2.addedNodes[0].nodeName == '#text' || mutation2.addedNodes[0].nodeName == '#comment') {
                    continue;
                  }
                  if (mutation2.addedNodes[i].nodeName == '#text' || mutation2.addedNodes[i].nodeName == '#comment') {
                    continue;
                  }

                  var xxx = mutation2.addedNodes[i].querySelectorAll('.category-tag-component');
                  if ( window.scbthidden22 > 0 ) {
if ( 
  (mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[0] && mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[0].innerText == '18+' ) || 
  (mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[1] && mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[1].innerText == '18+' ) || 
  (mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[2] && mutation2.addedNodes[i].querySelectorAll('.category-tag-component')[2].innerText == '18+' ) 
  ) {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden15 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Slots & Casino') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden16 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Just Sleeping') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden17 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'ASMR') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden18 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Body Art') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden19 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Slots & Casino') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden20 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Pools, Hot Tubs & Bikinis') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden21 > 0 ) {
                    if ( mutation2.addedNodes[i].querySelector('img').alt == 'Just Chatting') {
                      mutation2.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                }
                      
              }  // if (mutation.addedNodes) {
            }   // end if (mutation.type === 'childList') {      
       } // end for(const mutation of mutationsList) {
    };  // end var callback = function(mutationsList, observer) {

    if (window.scbtCategoryLoading) {
      window.scbtCategoryLoading.observer = new MutationObserver(callback2);
      window.scbtCategoryLoading.observer.observe(targetNode2, config2);
    }
    
  }
  return false;
}



function scbt_helper_hide_mature_livestreams_on_scroll() {
  targetNode3 = null;
  if (window.scbtLivestreamsLoading) {
    if (window.scbtLivestreamsLoading.observer) {
      window.scbtLivestreamsLoading.observer.disconnect();
      window.scbtLivestreamsLoading.observer = null;
      targetNode3 = null;
      config3 = null;
      callback3 = null;
    }
  }
  targetNode3 = document.body.querySelectorAll('#livestreams .place-content-stretch')[0];
  if (targetNode3) {
    var config3 = { childList: true,
                 attributes: false,
                 characterData: false,
                 subtree: false,
                 attributeOldValue: false,
                 characterDataOldValue: false 
               };

    var callback3 = function(mutationsList3, observer3) {
      for (let mutation3 of mutationsList3) {
          if (mutation3.type === 'childList') {
              if (mutation3.addedNodes) {
                var arrl3 = mutation3.addedNodes.length;
                for (var i=0; i < arrl3; i++) { 

                  if (mutation3.addedNodes[i]) {

                    if (mutation3.addedNodes[i].nodeName == '#text' || mutation3.addedNodes[i].nodeName == '#comment') {
                      continue;
                    }
                    if (mutation3.addedNodes[i] instanceof HTMLElement) {

                  if ( window.scbthidden15 > 0 ) {
if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Other TV Shows Movies' || mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Other, Watch Party' ) {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden16 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Just Sleeping') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden17 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'ASMR') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden18 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Body Art') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden19 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Slots & Casino') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden20 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Pools, Hot Tubs & Bikinis') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden21 > 0 ) {
                    if ( mutation3.addedNodes[i].querySelector('.card-category-name').textContent == 'Just Chatting') {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }

                  if ( window.scbthidden22 > 0 ) {
if ( 
  (mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[0] && mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[0].innerText == '18+' ) || 
  (mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[1] && mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[1].innerText == '18+' ) || 
  (mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[2] && mutation3.addedNodes[i].querySelectorAll('.category-tag-component')[2].innerText == '18+' ) 
  ) {
                      mutation3.addedNodes[i].style.visibility = 'hidden';
                    }
                  }


                } // if (mutation3.addedNodes[i] instanceof HTMLElement)
              }   // if (mutation3.addedNodes[i]) {

            } // for (var i=0; i < mLength3; i++) { 

              }  // if (mutation.addedNodes) {
            }   // end if (mutation.type === 'childList') {      
       } // end for(const mutation of mutationsList) {
    };  // end var callback = function(mutationsList, observer) {

    if (window.scbtLivestreamsLoading) {
      window.scbtLivestreamsLoading.observer = new MutationObserver(callback3);
      window.scbtLivestreamsLoading.observer.observe(targetNode3, config3);
    }

  }
  return false;
}


function scbt_user_check_video_speed(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
      if (e.target) {
        if (e.target.id) {
        } else {
          var parentElm = e.target.parentElement;
          if (parentElm.id) {
            if (parentElm.id == 'scbtSpeed25') {
              document.body.getElementsByTagName('video')[0].playbackRate = 0.25;
            }
            if (parentElm.id == 'scbtSpeed50') {
              document.body.getElementsByTagName('video')[0].playbackRate = 0.50;
            }
            if (parentElm.id == 'scbtSpeed75') {
              document.body.getElementsByTagName('video')[0].playbackRate = 0.75;
            }
            if (parentElm.id == 'scbtSpeed1') {
              document.body.getElementsByTagName('video')[0].playbackRate = 1.0;
            }
            if (parentElm.id == 'scbtSpeed11') {
              document.body.getElementsByTagName('video')[0].playbackRate = 1.1;
            }
            if (parentElm.id == 'scbtSpeed125') {
              document.body.getElementsByTagName('video')[0].playbackRate = 1.25;
            }
            if (parentElm.id == 'scbtSpeed15') {
              document.body.getElementsByTagName('video')[0].playbackRate = 1.5;
            }
            if (parentElm.id == 'scbtSpeed2') {
              document.body.getElementsByTagName('video')[0].playbackRate = 2.0;
            }

          }


        }


      }
    }


  return false;
}


function scbt_toggle_video_speed_menu(e) {
  if (e) {
    if (e.preventDefault) { e.preventDefault(); }
  }
  var elemArr = document.body.querySelectorAll('.video-js .vjs-custom-control-spacer');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('vjs-hover') ) {
      elemArr[0].classList.remove('vjs-hover');
    } else {
      elemArr[0].classList.add('vjs-hover');
    }
  }
  return false;
}


function scbt_helper_build_speed_button() {
  var elemArr = document.body.querySelectorAll('.video-js .vjs-custom-control-spacer');
  if (elemArr[0]) {
    elemArr[0].classList.add('vjs-menu-button-popup');
    var theHTML = '<button class="vjs-icon-hd vjs-icon-placeholder vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" aria-haspopup="true" aria-expanded="false"><span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Video Speed</span></button><div class="vjs-menu scbt-speed"><ul class="vjs-menu-content" role="menu"><li id="scbtSpeed1" class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">1</span><span class="vjs-control-text" aria-live="polite">, selected</span></li><li id="scbtSpeed25" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">.25</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed50" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">.5</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed75" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">.75</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed11" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">1.1</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed125" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">1.25</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed15" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">1.5</span><span class="vjs-control-text" aria-live="polite"></span></li><li id="scbtSpeed2" class="vjs-menu-item" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="false"><span class="vjs-menu-item-text">2</span><span class="vjs-control-text" aria-live="polite"></span></li></ul></div>';
    elemArr[0].insertAdjacentHTML('afterbegin', theHTML);
    elemArr[0].style.display = 'block';
    elemArr[0].addEventListener('click', scbt_toggle_video_speed_menu);
  }

  setTimeout(function() { 
    var speeds = document.body.querySelectorAll('.scbt-speed')[0].getElementsByClassName('vjs-menu-item');
    var arrl = speeds.length;
    for (var i = 0; i < arrl; i++) {
      speeds[i].addEventListener('click', scbt_user_check_video_speed);
    }
  }, 1000);
  return false;
}


function scbt_helper_build_share_button() {
  var elemArr = document.body.querySelectorAll('#main-view .items-center.justify-end');
  if (elemArr[0]) {
    var theHTML = '<button data-v-80dcaa82="" class="scbtCopyTimeStampButton variant-action size-sm !hidden sm:!flex" id="scbtCopyTimeStampButton"><div data-v-80dcaa82="" class="button-content"><div data-v-80dcaa82="" class="inner-label">Copy timestamp at <span id="scbtCopyTimeStamp" class="scbtCopyTimeStamp"></span></div></div></button>';
    elemArr[0].insertAdjacentHTML('afterbegin', theHTML);
    setTimeout(function() { 
      var elem2Arr = document.body.getElementsByClassName('scbtCopyTimeStampButton');
      if (elem2Arr[0]) {
        elem2Arr[0].addEventListener('click', scbt_user_share_button_handler);
      }
    }, 1000);
  }

  return false;
}


function scbt_user_share_button_handler(e) {
  var video = document.body.querySelectorAll('video')[0];
  if (video.readyState > 0) {
    var theTime = document.body.querySelectorAll('video')[0].currentTime;
    var minutes = parseInt(theTime / 60, 10);
    var seconds = parseInt(theTime % 60);
    var x = document.body.querySelector('#scbtCopyTimeStamp');
    if (x) {
      x.textContent = minutes + ':' + seconds + ' into the video';
    }
    window.scbtLinkToShare = window.location.origin + window.location.pathname + '?t=' + parseInt(theTime, 10);
    scbt_helper_copy_text_to_clipboard(window.scbtLinkToShare);
      if (navigator.share) {
        navigator.share({
          title: 'From ' + window.scbtchannelid + ' on ' + window.scbtserviceid,
          text: window.scbtLinkToShare,
          url: window.scbtLinkToShare,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
      }
  } 
  return false;
}


function scbt_helper_load_local_chat_from_api(serviceid, channelid, videoid) {
  fetch('https://kick.com/api/v1' + window.location.pathname,
  {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  })
  .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
  .then(function(resp){ 
  if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.log('api error1', resp); } else {
    if (resp == 'error') {
      console.error('api error2', resp); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
    } else {

      if (typeof resp === 'object') {
        if (resp.created_at) {
          var arr = resp.created_at.split('T');
          if (arr[0]) {
            channelid = channelid.toLowerCase();
            var dbStr = 'savedchat' + '&' + serviceid + '&' + channelid + '&' + arr[0] + "-" + channelid;
            scbt_helper_load_local_chat(dbStr);
            dbStr = serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
          }
        }
      } else {
        console.error('api error3', resp); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
      }

      }
    }
  })
  .catch(error => {
     console.error('api error4', error); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = error = null; return false;
  });
  return false;
}


async function scbt_helper_load_local_chat(dbStr) {
  var dbExists = await scbt_get_binary_if_db_exists(dbStr);
  if (dbExists === true) {
    // loading chat database from localStorage
    var e = {};
    e.srcElement = {};
    e.srcElement.dataset = {};
    e.srcElement.dataset.dbname = dbStr;
    scbt_user_chat_load_by_videoid(e);
  }
  return false;
}



function scbt_helper_chat_get_username(obj, elem) {  
  var elemArr = elem.querySelectorAll('.video-chat__message-author');
  if (elemArr[0]) {
    obj.username = elemArr[0].textContent;
    return obj;
  }
  var elemArr = elem.querySelectorAll('.chatter-name'); 
  if (elemArr[0]) {
    obj.username = elemArr[0].textContent;
    return obj;
  }
  elemArr = elem.querySelectorAll('.chat-author__display-name');
  if (elemArr[0]) {
    obj.username = elemArr[0].textContent;
    return obj;
  }
  elemArr = elem.querySelectorAll('.chat-line__username');
  if (elemArr[0]) {
    obj.username = elemArr[0].textContent;
    return obj;
  }
  if (elem.classList.contains('user-notice-line') ) {
    obj.username = 'Twitch';
  }
  return obj;
}


function scbt_helper_chat_get_message(obj, elem) {
  if (elem.classList.contains('user-notice-line') ) {
    obj.message = elem.textContent;
  } else {
    obj.message = '';
    var elemArr = elem.querySelectorAll('.text-fragment');
    if (elemArr[0]) {
      [].forEach.call(elemArr, function(chat) {
        if (chat.textContent) {
          obj.message = obj.message + chat.textContent + ' ';
        }
      });
    }
    var elemArr = elem.querySelectorAll('.mention-fragment');
    if (elemArr[0]) {
      obj.mention = 1;
      [].forEach.call(elemArr, function(chat) {
        if (chat.textContent) {
          obj.message = obj.message + ' ' + chat.textContent;
        }
      });
    }
    var elemArr = elem.querySelectorAll('.chat-line__message--cheer-amount');
    if (elemArr[0]) {
      [].forEach.call(elemArr, function(chat) {
        var msg = chat.textContent;
        obj.donation = 1;
        if (msg != '') {
          obj.message = obj.message + ' ' + msg + ' bit cheer - ' + msg;
        }
      });
    }
  }
  return obj;
}




function scbt_get_str_serviceid() {
  var str = window.location.hostname;
  str = str.toLowerCase();
  if (str === 'kick.com' || str === 'm.kick.com' || str === 'www.kick.com') {
    window.scbtserviceid = 'kick';
    window.scbtKickIs = true;
    str = null; return window.scbtserviceid;
  }
  if (str === 'odysee.com' || str === 'm.odysee.com' || str === 'www.odysee.com') {
    window.scbtserviceid = 'odysee';
    window.scbtOdyseeIs = true;
    str = null; return window.scbtserviceid;
  }
  if (str === 'rumble.com' || str === 'm.rumble.com' || str === 'www.rumble.com') {
    window.scbtserviceid = 'rumble';
    window.scbtRumbleIs = true;
    str = null; return window.scbtserviceid;
  }
  if (str === 'tiktok.com' || str === 'm.tiktok.com' || str === 'www.tiktok.com') {
    window.scbtserviceid = 'tiktok';
    window.scbtTiktokIs = true;
    str = null; return window.scbtserviceid;
  }
  if (str === 'twitch.tv' || str === 'm.twitch.tv' || str === 'www.twitch.tv') {
    window.scbtserviceid = 'twitch';
    window.scbtTwitchIs = true;
    str = null; return window.scbtserviceid;
  }
  if (str === 'youtube.com' || str === 'm.youtube.com' || str === 'www.youtube.com') {
    window.scbtserviceid = 'youtube';
    window.scbtYoutubeIs = true;
    str = null; return window.scbtserviceid;
  }
}


function scbt_get_blacklisted_page_boolean(U) {
  var pageBlackListedIs = false;
  var arr = [];
  if (window.scbtserviceid === 'kick') {
    arr = [
      'https://kick.com/community-guidelines',
      'https://kick.com/dmca-policy',
      'https://kick.com/privacy-policy',
      'https://kick.com/terms-of-service',
      'https://kick.com/dashboard/',
      'https://shop.kick.com/',
      'https://help.kick.com/'
    ];
  }
  if (window.scbtserviceid === 'odysee') {
    arr = [
      'https://odysee.com/@taran:1/subscriptions:6',
      'https://odysee.com/subscriptions/',
      'https://odysee.com/$/signin',
      'https://odysee.com/$/signup',
      'https://odysee.com/$/tos',
      'https://odysee.com/$/help',
      'https://odysee.com/$/careers',
      'https://odysee.com/$/privacypolicy',
      'https://odysee.com/$/homepage_customization',
      'https://help.odysee.tv/communityguidelines/',
      'https://chat.odysee.com/',
      'https://help.odysee.tv/'
    ];
  }
  if (window.scbtserviceid === 'rumble') {
    arr = [
      'https://rumble.com/upload.php',
      'https://rumble.com/live?',
      'https://rumble.com/account/',
      'https://rumblefaq.groovehq.com/help',
      'https://rumble.com/our-apps/',
      'https://rumble.com/s/terms',
      'https://rumble.com/s/privacy',
      'https://rumble.com/s/dmca',
      'https://corp.rumble.com/',
      'https://help.rumble.com/',
      'https://ads.rumble.com/',
      'https://rumble.store/',
      'https://www.rumble.cloud/'
    ];
  }

  if (window.scbtserviceid === 'tiktok') {
    arr = [
      'https://effecthouse.tiktok.com',
      'https://www.tiktok.com/about',
      'https://newsroom.tiktok.com',
      'https://www.tiktok.com/about/contact',
      'https://careers.tiktok.com',
      'https://www.tiktok.com/forgood',
      'https://www.tiktok.com/business',
      'https://developers.tiktok.com',
      'https://www.tiktok.com/transparency',
      'https://www.tiktok.com/tiktok-rewards',
      'https://www.tiktok.com/embed',
      'https://support.tiktok.com',
      'https://www.tiktok.com/safety?',
      'https://www.tiktok.com/legal',
      'https://www.tiktok.com/creators',
      'https://www.tiktok.com/signup',
      'https://www.tiktok.com/404',
      'https://www.tiktok.com/login',
      'https://www.tiktok.com/community-guidelines',
      'https://www.tiktok.com/feedback'
    ];
  }

  if (window.scbtserviceid === 'twitch') {
    arr = [
      'https://www.twitch.tv/settings',
      'https://www.twitch.tv/privacy',
      'https://www.twitch.tv/inventory',
      'https://www.twitch.tv/wallet',
      'https://www.twitch.tv/subscriptions',
      'https://www.twitch.tv/p/',
      'https://www.twitch.tv/downloads',
      'https://www.twitch.tv/store',
      'https://www.twitch.tv/jobs',
      'https://www.twitch.tv/turbo',
      'https://www.twitch.tv/legal',
      'https://help.twitch.tv/',
      'https://safety.twitch.tv/',
      'https://blog.twitch.tv/',
      'https://appeals.twitch.tv/',
      'https://dashboard.twitch.tv/',
      'https://dev.twitch.tv/',
      'https://www.twitch.tv/community-guidelines',
      'https://www.twitch.tv/dmca-policy',
      'https://www.twitch.tv/privacy-policy',
      'https://www.twitch.tv/terms-of-service',
      'https://www.twitch.tv/team/'
    ];
  }
  if (window.scbtserviceid === 'youtube') {
    arr = [
      'https://www.youtube.com/improvedtube',
      'https://www.youtube.com/tv',
      'https://www.youtube.com/audiolibrary',
      'https://www.youtube.com/embed/',
      'https://www.youtube.com/premium',
      'https://www.youtube.com/account',
      'https://www.youtube.com/reporthistory',
      'https://www.youtube.com/about/',
      'https://www.youtube.com/new/',
      'https://www.youtube.com/t/',
      'https://www.youtube.com/creators/',
      'https://www.youtube.com/ads/',
      'https://www.youtube.com/howyoutubeworks',
      'https://developers.google.com/youtube',
      'http://studio.youtube.com',
      'https://tv.youtube.com/',
      'https://music.youtube.com/',
      'https://www.youtubekids.com/'
    ];
  }

  [].forEach.call(arr, function(item) {
    if (U.indexOf(item) !== -1) {
      pageBlackListedIs = true;
    }
  });
  return pageBlackListedIs;
}


async function scbt_start_load_kick() {
  var menuExists = await scbt_helper_build_top_x_menu();
  if (menuExists === true) {
    scbt_helper_build_all_menus();
  }
  return false;
}

async function scbt_start_load_odysee() {
  scbt_helper_build_top_x_menu();
  return false;
}

async function scbt_start_load_rumble() {
  scbt_helper_build_top_x_menu();
  return false;
}

async function scbt_start_load_tiktok() {
  var menuExists = await scbt_helper_build_top_x_menu();
  if (menuExists === true) {
    scbt_helper_build_all_menus();
  }
  return false;
}

async function scbt_start_load_twitch() {
  var menuExists = await scbt_helper_build_top_x_menu();
  if (menuExists === true) {
    scbt_helper_build_all_menus();
  }
  return false;
}


async function scbt_start_load_youtube() {
  var iframeChatEl = document.body.getElementsByClassName('yt-live-chat-app');
  if (iframeChatEl[0]) { iframeChatEl = null; return false; }
  
  var menuExists = await scbt_helper_build_top_x_menu();
  if (menuExists === true) {
    var myInterval = setInterval(function () {
      if (window.scbtMobileIs === true) {
          var elemArr = document.body.querySelectorAll('#app');
          var elem2Arr = document.body.getElementsByClassName('mobile-topbar-header-content');
          if (elemArr[0] && elem2Arr[0]) {
            clearInterval(myInterval);
            scbt_helper_build_all_menus();
            menuExists = myInterval = elemArr = elem2Arr = null;
          }
        } else {
          var elemArr = document.body.querySelectorAll('#content');
          if (elemArr[0]) {
            clearInterval(myInterval);
            scbt_helper_build_all_menus();
            menuExists = myInterval = elemArr = elem2Arr = null;
          }
        }
    }, 2000);
  }
  return false;
}


async function scbt_helper_build_top_x_menu() {
  var elemArr = document.body.getElementsByClassName('scbtX');
  if (elemArr[0]) { return true; }
  var body = scbt_make_toast();
  body.classList.add('scbt-' + window.scbtserviceid);
  var isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
  if (isMobile) {
    window.scbtMobileIs = true;
    body.classList.add('scbt-mobile');
  } else {
    body.classList.add('scbt-desktop');
  }
  body.insertAdjacentHTML('afterbegin', "<div id='scbtX' class='scbtX'> <button id='scbtToggleButton2' class='scbtToggleButton2 icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'><div></div><div></div><div></div></button>  <button id='scbtToggleButton' class='scbtToggleButton icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'>⚙</button></div>");
  window.scbtXRef = document.body.getElementsByClassName('scbtX')[0];
  window.scbtMentionMenuRef = window.scbtXRef;
  window.scbtCloseMentionButtonRef = window.scbtXRef;

  window.scbtChatInputRef = window.scbtXRef;
  window.scbtChatSettingsMenuRef = window.scbtXRef;
  window.scbtChatWrapperLiveRef = window.scbtXRef;
  window.scbtSideMenuRef = window.scbtXRef;
  
  window.scbtChatWrapperRef = window.scbtXRef;
  window.scbtChatARef = window.scbtXRef;
  window.scbtChatBRef = window.scbtXRef;
  window.scbtCloseButtonRef = window.scbtXRef;
  window.scbtChatContentRef = window.scbtXRef;
  
  window.scbtChatMenuRef = window.scbtXRef;
  window.scbtChatSearchInputTextRef = window.scbtXRef;
  window.scbtChatSearchStartsWithButtonRef = window.scbtXRef;
  window.scbtChatSearchUserButtonRef = window.scbtXRef;
  window.scbtChatSearchKeywordButtonRef = window.scbtXRef;
  window.scbtChatSearchEventsButtonRef = window.scbtXRef;
  window.scbtChatSearchFullButtonRef = window.scbtXRef;

  window.scbtChatPreviousTitleRef = window.scbtXRef;
  window.scbtChatPreviousWrapperRef = window.scbtXRef;
  window.scbtOptionsTitleRef = window.scbtXRef;
  window.scbtOptionsWrapperRef = window.scbtXRef;

  window.scbtChatLogRef = window.scbtXRef;
  window.scbtChatPreviousContentRef = window.scbtXRef;
  window.scbtvideo6Ref = window.scbtXRef;
  window.scbtvideo7Ref = window.scbtXRef;
  window.scbtSocialMediaShareOptionsRef = window.scbtXRef;
  window.scbtSocialMediaShareCustomOptionsRef = window.scbtXRef;
  window.scbtSubmitButtonRef = window.scbtXRef;
  window.scbtStatusRef = window.scbtXRef;
  window.scbtCancelOptionsMenuRef = window.scbtXRef;
  window.scbtHighlightsMenuRef = window.scbtXRef;
  window.scbtKeyboardContainerRef = window.scbtXRef;
  elemArr = body = isMobile = theHTML = null; return true;
}


function scbt_helper_do_content_filters(U) {
  // has the viewer saved any content blockers?
  if ( window.hasOwnProperty('scbthidden15') ) {  } else { window.scbthidden15 = localStorage.getItem('scbthidden15'); }
  if ( window.hasOwnProperty('scbthidden16') ) {  } else { window.scbthidden16 = localStorage.getItem('scbthidden16'); }
  if ( window.hasOwnProperty('scbthidden17') ) {  } else { window.scbthidden17 = localStorage.getItem('scbthidden17'); }
  if ( window.hasOwnProperty('scbthidden18') ) {  } else { window.scbthidden18 = localStorage.getItem('scbthidden18'); }
  if ( window.hasOwnProperty('scbthidden19') ) {  } else { window.scbthidden19 = localStorage.getItem('scbthidden19'); }
  if ( window.hasOwnProperty('scbthidden20') ) {  } else { window.scbthidden20 = localStorage.getItem('scbthidden20'); }
  if ( window.hasOwnProperty('scbthidden21') ) {  } else { window.scbthidden21 = localStorage.getItem('scbthidden21'); }
  if ( window.hasOwnProperty('scbthidden22') ) {  } else { window.scbthidden22 = localStorage.getItem('scbthidden22'); }

  if ( window.scbthidden15 > 0 ) {
    if (U == 'https://kick.com/categories/alternative/other-tv-shows-movies') {
      window.location.replace('https://kick.com/'); return false;
    }
  }

  if ( window.scbthidden16 > 0 ) {
    if (U == 'https://kick.com/categories/alternative/just-sleeping') {
      window.location.replace('https://kick.com/'); return false;  
    }
  }

  if ( window.scbthidden17 > 0 ) {
    if (U == 'https://kick.com/categories/irl/asmr') {
      window.location.replace('https://kick.com/'); return false;  
    }
  }

  if ( window.scbthidden18 > 0 ) {
    if (U == 'https://kick.com/categories/creative/body-art') {
      window.location.replace('https://kick.com/'); return false; 
    }
  }

  if ( window.scbthidden19 > 0 ) {
    if (U == 'https://kick.com/categories/gambling') {
      window.location.replace('https://kick.com/'); return false;  
    }
  }

  if ( window.scbthidden20 > 0 ) {
    if (U == 'https://kick.com/categories/irl/pools-hot-tubs-bikinis') {
      window.location.replace('https://kick.com/'); return false;  
    }
  }

  if ( window.scbthidden21 > 0 ) {
    if (U == 'https://kick.com/categories/irl/just-chatting') {
      window.location.replace('https://kick.com/'); return false;  
    }
  }

  // content block on current page based on user options
  setTimeout(function() {
    scbt_helper_hide_mature_elements_on_page_load();
    scbt_helper_hide_mature_categories_on_scroll();
    scbt_helper_hide_mature_livestreams_on_scroll();
  }, 1500);
  return false;
}


function scbt_set_page_values_to_reset() {
  window.scbtchannelid = null;
  window.scbtvideoid = null;
  window.scbtDbName = null;

  window.scbtVODIs = false;
  window.scbtVODLoadedIs = false;
  window.scbtVODCommentsLoadedIs = false;
  window.scbtChannelPageIs = false;
  window.scbtPopoutIs = false;

  window.scbtSavedStreamsArr = [];
  window.scbtSearchingMessageIdsArr = [];
  window.scbtUsernamesArr = [];
  window.scbtFollowedChannelsArr = [];

  window.scbtCategoryLoading = {};
  window.scbtLivestreamsLoading = {};
  window.scbtOptions.observer = null;
  window.scbtYTChatIframeRef = null;
  return false;
}


function scbt_set_page_values_from_url(U) {
  if (window.scbtserviceid === 'kick') {
    // non video or channel pages to ignore
    if ( (U.indexOf('/categories') !== -1) || (U.indexOf('/following') !== -1) || (U.indexOf('/search') !== -1) || (U.indexOf('/transactions') !== -1) ) {
      console.error('BAD KICK URL ***********');
      U = null; return false;
    }
    if (U.indexOf('/video/') !== -1) {
      window.scbtVODIs = true;
      console.info('NOW KICK VOD');
      U = null; return false;
    } else {
      if (U.indexOf('clip=') !== -1) {
        window.scbtvideoid = null;
        console.info('NOW KICK CLIP');
        U = null; return false;
      } else {
        if (U.indexOf('chatroom') !== -1) {
          window.scbtPopoutIs = true;
          console.info('NOW KICK POPOUT');
          U = null; return false;
        } else {
          if (U == 'https://kick.com/') {
            U = null; return false;
          }
          window.scbtChannelPageIs = true;
          U = U.replace('https://kick.com/', '');
          U = U.split('/')[0];
          console.info('NOW KICK CHANNEL PAGE FOR:' + U);
          window.scbtchannelid = U;
          window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
          U = null; return false;
        }
      }
    }
    U = null; return false;
  }

  if (window.scbtserviceid === 'odysee') {
    if (U.indexOf('$/popout') !== -1) {
      window.scbtPopoutIs = true;
      U = U.replace('https://odysee.com/$/popout/', '');
      window.scbtchannelid = U.split(':')[0];
      window.scbtvideoid = ':' + U.split(':')[1] + ':' + U.split(':')[2];
      console.info('POPOUT CHANNELID is: ' + window.scbtchannelid);
      console.info('POPOUT VIDEOID is: ' + window.scbtvideoid);
      U = null; return false;
    }

    // non video or channel pages to ignore
    if (U.indexOf('$') !== -1) {
      console.error('BAD ODYSEE URL ***********');
      U = null; return false;
    }

    if (U.indexOf('@') !== -1) {
      U = U.replace('https://odysee.com/', '');
      window.scbtchannelid = U.split(':')[0];
      console.info('CHANNEL ODYSEE URL ***********' + window.scbtchannelid);
      if (U.indexOf('?') == -1) {
        window.scbtChannelPageIs = true;
        console.info('CHANNEL PAGE ***********' + window.scbtchannelid);
      }
      
      if (U.indexOf('/') !== -1) {
        window.scbtVODIs = true;
        window.scbtvideoid = ':' + U.split(':')[1] + ':' + U.split(':')[2];
        console.info('VOD URL ***********' + window.scbtvideoid);
        U = null; return false;
      } 
    }
    U = null; return false;
  }


  if (window.scbtserviceid === 'rumble') { 
    if (U.indexOf('/popup/') !== -1) {
      window.scbtPopoutIs = true;
      U = null; return false;
    }

    if ( (U.indexOf('/c/') !== -1) || (U.indexOf('/user/') !== -1) ) {
      U = U.replace('https://rumble.com/c/', '');
      U = U.replace('https://rumble.com/user/', '');
      window.scbtchannelid = U.split('/')[0];
      if ( (U.slice(-5) === 'live/') || (U.slice(-5) === '/live') ) {
        window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
        console.info('this is a live URL: ' + window.scbtchannelid + ' ' + window.scbtvideoid);
        U = null; return false;
      }
      
      window.scbtChannelPageIs = true;
      console.info('CHANNEL PAGE ***********' + window.scbtchannelid);
      U = null; return false;
    } else {
      if (U.indexOf('.html') !== -1) {
        U = U.replace('https://rumble.com/', '');
        U = U.replace('.html', '');
        window.scbtvideoid = U;
        console.info('VOD URL ***********' + window.scbtvideoid);
        U = null; return false;
      }
    }
    U = null; return false;
  }

  if (window.scbtserviceid === 'tiktok') {
    if ( 
      (U === 'https://www.tiktok.com/') || 
      (U === 'https://www.tiktok.com/following') || 
      (U === 'https://www.tiktok.com/explore') || 
      (U === 'https://www.tiktok.com/live') || 
      (U === 'https://www.tiktok.com/en') || 
      (U === 'https://www.tiktok.com/setting') || 
      (U.indexOf('/messages') !== -1) || 
      (U.indexOf('/coin') !== -1) || 
      (U.indexOf('/live/creators') !== -1) || 
      (U.indexOf('/search') !== -1) || 
      (U.indexOf('/creator-center') !== -1) 
    ) {
      console.error('*********** BAD TIKTOK URL ***********');
      U = null; return false;
    }

    if (U.indexOf('/@') !== -1) {
      U = U.split('/')[3].split('@')[1];
      window.scbtchannelid = U;
      window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
      console.info('*********** NOW TIKTOK LIVE PAGE ' + window.scbtchannelid + ' ' + window.scbtvideoid);
      U = null; return false;
    }

    U = null; return false;
  }

  if (window.scbtserviceid === 'twitch') { 
    // non video or channel pages to ignore
    if ( (U === 'https://www.twitch.tv/') || (U.indexOf('/dashboard') !== -1) || (U.indexOf('/categories') !== -1) || (U.indexOf('/directory') !== -1) || (U.indexOf('/search') !== -1) || (U.indexOf('/subscriptions') !== -1) ) {
      console.error('*********** BAD TWITCH URL ***********');
      U = null; return false;
    }
    if (U.indexOf('/videos/') !== -1) {
      window.scbtVODIs = true;
      console.info('*********** NOW TWITCH VOD ***********');
      U = null; return false;
    } else {
      if (U.indexOf('clip=') !== -1) {
        window.scbtvideoid = null;
        console.info('*********** NOW TWITCH CLIP ***********');
        U = null; return false;
      } else {
        if (U.indexOf('popout') !== -1) {
          window.scbtPopoutIs = true;
          U = U.replace('https://www.twitch.tv/popout/', '');
          window.scbtchannelid = U.split('/')[0];
          window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
          console.info('*********** NOW TWITCH POPOUT ' + window.scbtchannelid + ' ' + window.scbtvideoid);
          U = null; return false;
        } else {
          window.scbtChannelPageIs = true;
          U = U.replace('https://www.twitch.tv/', '');

          if (U.indexOf('/') !== -1) {
            U = U.split('/')[0];
            window.scbtchannelid = U;
            console.info('*********** NOW TWITCH CHANNEL PAGE ' + window.scbtchannelid);
            U = null; return false;
          } else {
            U = U.split('/')[0];
            window.scbtchannelid = U;
            window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
            console.info('*********** NOW TWITCH LIVE PAGE ' + window.scbtchannelid + ' ' + window.scbtvideoid);
            U = null; return false;
          }

        }
      }
    }
    U = null; return false;
    return false; 
  }


  if (window.scbtserviceid === 'youtube') { 
    // non video or channel pages to ignore
    if (
      U == 'https://www.youtube.com/' || 
      U == 'https://www.youtube.com/channel/UCkYQyvc_i9hXEo4xic9Hh2g' || 
      U == 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ' || 
      U == 'https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig' || 
      U == 'https://www.youtube.com/@gaming' || 
      U == 'https://www.youtube.com/@news' || 
      U == 'https://www.youtube.com/@YouTube' || 
      U == 'https://www.youtube.com/@360' || 
      U == 'https://www.youtube.com/@live' || 
      U == 'https://www.youtube.com/podcasts' || 
      U == 'https://www.youtube.com/premium' || 
      U == 'https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw' || 
      U == 'https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw' || 
      U == 'https://www.youtube.com/channel/UCtFRv9O2AHqOZjjynzrv-xg' || 
      U == 'https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ' 
    ) {
      console.error('BAD YOUTUBE URL1 ***********');
      U = null; return false;
    }

    if ( 
      (U.indexOf('/shorts/') !== -1) || 
      (U.indexOf('/feed/') !== -1) || 
      (U.indexOf('/podcasts/') !== -1) || 
      (U.indexOf('/podcasts/') !== -1) ||
      (U.indexOf('/account/') !== -1) ||
      (U.indexOf('/results?') !== -1) || 
      (U.indexOf('vr.youtube.com') !== -1) 
    ) {
      console.error('BAD YOUTUBE URL2 ***********');
      U = null; return false;
    }

    if (U.indexOf('/user/') !== -1) {
      window.scbtchannelid = U.split('/user/')[1].split('/')[0];
      window.scbtChannelPageIs = true;
      console.info('USER PAGE FOR ' + window.scbtchannelid);
    }
    if (U.indexOf('/@') !== -1) {
      window.scbtchannelid = U.split('/@')[1].split('/')[0];
      window.scbtChannelPageIs = true;
      console.info('USER PAGE FOR ' + window.scbtchannelid);
    }
    if (U.indexOf('/channel/') !== -1) {
      window.scbtchannelid = U.split('/channel/')[1].split('/')[0];
      window.scbtChannelPageIs = true;
      console.info('USER PAGE FOR ' + window.scbtchannelid);
    }
    if (U.indexOf('/live/') !== -1) {
      U = U.replace('https://www.youtube.com/', '');
      window.scbtchannelid = U.split('/live')[0].replace('@', '');
      window.scbtChannelPageIs = false;
      window.scbtvideoid = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
      console.info('LIVE PAGE FOR ' + window.scbtchannelid + ' ' + window.scbtvideoid);
      U = null; return false;
    }
    if (U.indexOf('watch?v=') !== -1) {
      window.scbtvideoid = U.split('watch?v=')[1].split('&')[0];
      console.info('LIVE PAGE FOR ' + window.scbtchannelid + ' ' + window.scbtvideoid);
      U = null; return false;
    }
    return false;
  }


  return false;
}


/* @license
Papa Parse
v5.0.2
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;q(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var i=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(r=f.URL||f.webkitURL||null,i=s.toString(),b.BLOB_URL||(b.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var r,i;return t.onmessage=_,t.id=h++,a[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var i=!1,_=!0,g=",",v="\r\n",n='"',s=n+n,r=!1,a=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(g=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");a=t.columns}void 0!==t.escapeChar&&(s=t.escapeChar+n)}();var o=new RegExp(U(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,r);if("object"==typeof e[0])return u(a||h(e[0]),e,r)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],r);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function u(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(i+=g),i+=y(e[a],a);0<t.length&&(i+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=g);var m=n&&s?e[p]:p;i+=y(t[o][m],p)}o<t.length-1&&(!r||0<h&&!f)&&(i+=v)}}return i}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(o,s);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(e,b.BAD_DELIMITERS)||-1<e.indexOf(g)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=r,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=m,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)})}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(q(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var i;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{i.send()}catch(e){this._chunkError(e.message)}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)))},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t))}}function c(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=y(this._chunkLoaded,this),i.onerror=y(this._chunkError,this)):i=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(i.error)}}function p(e){var r;u.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function m(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function r(g){var a,o,h,i=Math.pow(2,53),n=-i,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(g.step)){var p=g.step;g.step=function(e){if(c=e,_())m();else{if(m(),0===c.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():p(c,t)}}}function v(e){return"greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function m(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){q(g.transformHeader)&&(e=g.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!g.header&&!g.dynamicTyping&&!g.transform)return c;function e(e,t){var r,i=g.header?{}:[];for(r=0;r<e.length;r++){var n=r,s=e[r];g.header&&(n=r>=l.length?"__parsed_extra":l[r]),g.transform&&(s=g.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s}return g.header&&(r>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+r,f+t):r<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+r,f+t)),i}var t=1;!c.data[0]||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);g.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return g.header&&0===l.length}function y(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<i)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var r}function k(e,t,r,i){c.errors.push({type:e,code:t,message:r,row:i})}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)q(g.delimiter)&&(g.delimiter=g.delimiter(e),c.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:i,delimiter:f,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(r&&v(p.data[m]))c++;else{var _=p.data[m].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(g.delimiter=s),bestDelimiter:s}}(e,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=b.DefaultDelimiter),c.meta.delimiter=g.delimiter}var s=w(g);return g.preview&&g.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,r),m(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=a.substr(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(g.complete)&&g.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,r,t){if("string"!=typeof a)throw new Error("Input must be a string");var i=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(t)return R();if(!T||f.substr(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),m=a.indexOf(I,M),_=new RegExp(U(z)+U(O),"g"),g=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substr(M,s)===T){if(-1===m)return R();M=m+n,m=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<m||-1===m)){if(-1===g){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,g,m);if(v&&void 0!==v.nextDelim){p=v.nextDelim,g=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===m)break;if(f.push(a.substring(M,m)),C(m+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(g=M,M++;;){if(-1===(g=a.indexOf(O,g+1)))return t||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),w();if(g===i-1)return w(a.substring(M,g).replace(_,O));if(O!==z||a[g+1]!==z){if(O===z||0===g||a[g-1]!==z){var y=E(-1===m?p:Math.min(p,m));if(a[g+1+y]===D){f.push(a.substring(M,g).replace(_,O)),a[M=g+1+y+e]!==O&&(g=a.indexOf(O,M)),p=a.indexOf(D,M),m=a.indexOf(I,M);break}var k=E(m);if(a.substr(g+1+k,n)===I){if(f.push(a.substring(M,g).replace(_,O)),C(g+1+k+n),p=a.indexOf(D,M),g=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),g++}}else g++}return w();function b(e){h.push(e),d=M}function E(e){var t=0;if(-1!==e){var r=a.substring(g+1,e);r&&""===r.trim()&&(t=r.length)}return t}function w(e){return t||(void 0===e&&(e=a.substr(M)),f.push(e),M=i,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],m=a.indexOf(I,M)}function R(e,t){return{data:t||!1?h[0]:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(r||0)}}}function S(){A(R(void 0,!0)),h=[],u=[]}function x(e,t,r){var i={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<r||-1===r)){var s=a.indexOf(D,n);if(-1===s)return i;n<s&&(n=a.indexOf(O,n+1)),i=x(s,n,r)}else i={nextDelim:e,quoteSearch:t};return i}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function _(e){var t=e.data,r=a[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,g(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results}else q(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&g(t.workerId,t.results)}function g(e,t){var r=a[e];q(r.userComplete)&&r.userComplete(t),r.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=w(e[r]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=b.parse(t.input,t.config);r&&f.postMessage({workerId:b.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(u.prototype)).constructor=m,b});

window.addEventListener('unhandledrejection', e => {
  console.log('Browser error: unhandled rejection: ');
  var request = e.target; 
  var error = e.reason; 
  console.error({ request, error });
  console.error(e);
  e = request = error = null;
});


// console.log('1 script running ' + document.readyState + ' ' + window.location.href);

// kick on first page load, not clicking around
// odysee on first page load, not clicking around
// rumble every click/page
// twitch on first page load, not clicking around
// youtube on first page load, not clicking around
window.addEventListener('load', function (event) {
  var U = window.location.href;
  // console.log('-- 2 window on load '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
  if ( (window.scbtCurrentURL != U) && (U.indexOf('live_chat') == -1) ) {
    scbt_get_str_serviceid();
    // dont load on corporate pages and other non video pages
    var str = scbt_get_blacklisted_page_boolean(U);
    if (str) { console.error(U + ' is a blacklisted url'); return false; }
    // content filters for kick
    if (window.scbtserviceid === 'kick') { scbt_helper_do_content_filters(U) }
    scbt_set_page_values_to_reset();
    scbt_set_page_values_from_url(U);

    console.log('-- 2 page change window on load '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
    if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); U = null; event = null; return false; }
  }
  U = null; event = null; return false;
});

// back button all except rumble
window.addEventListener('popstate', function (event) {
  var U = window.location.href;
  // console.log('--- 3 window on popstate '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
  if ( (window.scbtCurrentURL != U) && (U.indexOf('live_chat') == -1) ) {
    scbt_get_str_serviceid();
    // dont load on corporate pages and other non video pages
    var str = scbt_get_blacklisted_page_boolean(U);
    if (str) { console.error(U + ' is a blacklisted url'); return false; }
    if (window.scbtserviceid === 'kick') { scbt_helper_do_content_filters(U) }
    scbt_set_page_values_to_reset();
    scbt_set_page_values_from_url(U);

    console.log('--- 3 window change on popstate '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
    if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); U = null; event = null; return false; }
  }
  U = null; event = null; return false;
});

// youtube
document.addEventListener('transitionend', function(event) {
  if (event.target.id === 'progress') {
    var U = window.location.href;
    // console.log('---- 4 document on transitionend '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
    if ( (window.scbtCurrentURL != U) && (U.indexOf('live_chat') == -1) ) {
      scbt_get_str_serviceid();
      // dont load on corporate pages and other non video pages
      var str = scbt_get_blacklisted_page_boolean(U);
      if (str) { console.error(U + ' is a blacklisted url'); return false; }
      if (window.scbtserviceid === 'kick') { scbt_helper_do_content_filters(U) }
      scbt_set_page_values_to_reset();
      scbt_set_page_values_from_url(U);

      console.log('---- 4 page change document on transitionend '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
      if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); U = null; event = null; return false; }
      if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); U = null; event = null; return false; }
      if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); U = null; event = null; return false; }
      if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); U = null; event = null; return false; }
      if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); U = null; event = null; return false; }
      if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); U = null; event = null; return false; }
    }
    U = null; event = null; return false;
  }
});

// kick on first page load, not clicking around
// odysee on first page load, not clicking around
// rumble every click/page
// twitch on first page load, not clicking around
// youtube on first page load, not clicking around
document.addEventListener('readystatechange', function(event) {
  var U = window.location.href;
  // console.log('------ 6 document on readystatechange '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
  if ( (window.scbtCurrentURL != U) && (U.indexOf('live_chat') == -1) ) {
    scbt_get_str_serviceid();
    // dont load on corporate pages and other non video pages
    var str = scbt_get_blacklisted_page_boolean(U);
    if (str) { console.error(U + ' is a blacklisted url'); return false; }
    if (window.scbtserviceid === 'kick') { scbt_helper_do_content_filters(U) }
    scbt_set_page_values_to_reset();
    scbt_set_page_values_from_url(U);

    console.log('------ 6 page change document on readystatechange '  + window.scbtserviceid + ' & ' + document.readyState + ' ' + U, event);
    if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); U = null; event = null; return false; }
    if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); U = null; event = null; return false; }
  }
  U = null; event = null; return false;
});



chrome.runtime.onMessage.addListener(
  function(request, sender, goCapture) {
    // console.info('$ begin chrome.runtime.onMessage.addListener ');
    if (typeof request === 'object') {

      if ( request.tabUpdated && (typeof request.tabUpdated === 'object') ) {

if (!request.tabUpdated.url) { return false; }
var U = request.tabUpdated.url;
if ( (window.scbtCurrentURL == U) || (request.tabUpdated.status != 'complete') || ( U.indexOf('live_chat') !== -1) ) {
  // page didnt change, just updated
  console.warn('NO NO NO 0 0 0 0 X X X PAGE DIDNT CHANGE ' + request.tabUpdated.status + ' ' + request.tabUpdated.title + ' ' + U);
  return false;
}
window.scbtCurrentURL = U;
// dont load on corporate pages and other non video pages
var str = scbt_get_blacklisted_page_boolean(U);
if (str) { console.error(U + ' is a blacklisted url'); return false; }
// content filters for kick
if (window.scbtserviceid === 'kick') { scbt_helper_do_content_filters(U) }
scbt_set_page_values_to_reset();
scbt_set_page_values_from_url(U);

if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); return false; }
if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); return false; }
if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); return false; }
if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); return false; }
if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); return false; }
if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); return false; }
console.info('PAGE CHANGE ' + request.tabUpdated.status + ' ' + request.tabUpdated.title + ' ' + request.tabUpdated.url);

    } else {
      // not tabupdated, probably 'loaded' message
      // console.log(request, window.location.href);

      if (window.scbtKeybindOnIs === true) {
        if (request.message === 'streamerbutlercommand1') {
          console.log("streamerbutlercommand1 1")
          scbt_user_command1();
        }
        if (request.message === 'streamerbutlercommand2') {
          scbt_user_command2();
        }
        if (request.message === 'streamerbutlercommand3') {
          scbt_user_command3();
        }
        if (request.message === 'streamerbutlercommand4') {
          scbt_user_command4();
        }
      }

      if (window.scbtserviceid === 'kick') { scbt_start_load_kick(); return false; }
      if (window.scbtserviceid === 'odysee') { scbt_start_load_odysee(); return false; }
      if (window.scbtserviceid === 'rumble') { scbt_start_load_rumble(); return false; }
      if (window.scbtserviceid === 'tiktok') { scbt_start_load_tiktok(); return false; }
      if (window.scbtserviceid === 'twitch') { scbt_start_load_twitch(); return false; }
      if (window.scbtserviceid === 'youtube') { scbt_start_load_youtube(); return false; }
    }

  }
});