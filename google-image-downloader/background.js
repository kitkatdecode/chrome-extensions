let initialState = {
	'folder': 1
};
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set(initialState);
	console.log("initialState set");
});

chrome.runtime.onMessage.addListener(function(message, callback) {
    console.log("message coming");
    let srcArray = message.imageUrls;
    chrome.storage.local.get('folder',  function(result) {
        var counter = 1;
        for (let src of srcArray) {
        chrome.downloads.download({url:src, 
            filename:"GoogleImages/"+result.folder+"/"+counter+".jpg"});
        counter++;
        };
        result.folder+=1;
        chrome.storage.local.set(result);
    });
    
    return true; 
});