var jaToKoDict = {
  '中国': '중국'
};

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      var selectedText = window.getSelection().toString();
      var translatedText = selectedText.replace('中国', jaToKoDict['中国']);
      window.console.log('(youngki) selected text: ', selectedText);
      window.console.log('(youngki) translated text: ', translatedText);
    });
