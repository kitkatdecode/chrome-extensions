window.onload = function() {
	let quality = document.getElementById('quality');
	let filename = document.getElementById('filename');
	let format = document.getElementById('format');
	let downloadBtn = document.getElementById('download');
	
	downloadBtn.onclick = function(){
		console.log("Download starting");
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    	let url = tabs[0].url;
	    	let message  = {
	    		'url' : url,
	    		'quality': quality.value,
	    		'filename': filename.value,
	    		'format': format.value
	    	};
	    	chrome.runtime.sendMessage(message);
		});
	};
}