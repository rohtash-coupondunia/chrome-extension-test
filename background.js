


// hands on tab changing mechanism 

/*
chrome.tabs.onUpdated.addListener(function (tabid, changes,tab) {
    console.log("chnages occcuewd");
    console.log(changes)
    if(changes.url) {
      console.log(changes.url);
      chrome.tabs.sendMessage(tab.id, {url: tab.url});
    }
})
*/



//listen for msg
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  
    if (request.action == "urlChanges") {

      sendResponse({farewell: "goodbye"});

      // save data to localStorge
      saveData(request.url);
      
     }
});



function saveData (url) {
  var urlArray = [];
  chrome.storage.sync.get(["urlBucket"], function (data) {
      if(data.urlBucket) {
        urlArray = data.urlBucket;
      }
      console.log("stored data : ");
      console.log(urlArray);

      urlArray.push(url);
      chrome.storage.sync.set({'urlBucket': urlArray}, function() {
          console.log("stored in localStorge");
      });

  });
}


//icon click handler 
chrome.browserAction.onClicked.addListener(function(tab) { 
      console.log(tab);
      chrome.storage.sync.get(["urlBucket"], function (data) {
          console.log("retrive data");
          chrome.tabs.sendMessage(tab.id, {action : 'iconClick', 'data': data});
      });
});
