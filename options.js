function save_options() {
  var url = document.getElementById('gh_url').value;
  var token = document.getElementById('gh_token').value;
  chrome.storage.sync.set({
    url: url,
    token: token
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get(["url", "token"], function(items) {
    document.getElementById('gh_url').value = items.url;
    document.getElementById('gh_token').value = items.token;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
