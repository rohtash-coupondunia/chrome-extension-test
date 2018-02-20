


// hands on tab changing mechanism 

chrome.tabs.onUpdated.addListener(function (tabid, changes,tab) {
    console.log("chnages occcuewd");
    console.log(changes)
    if(changes.url) {
      console.log(changes.url);
      chrome.tabs.sendMessage(tab.id, {url: tab.url});
    }
})
