var onCompletedCallback = function(details) {
  console.log(details);
}
chrome.webRequest.onCompleted.addListener(
  onCompletedCallback, {urls: ["https://github.com/*/*/issues/*"]});
