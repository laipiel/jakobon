var sendTranslationRequest = function(tab) {
  chrome.tabs.sendMessage(tab.id, {}, function(response) {});
};

chrome.browserAction.onClicked.addListener(sendTranslationRequest);
