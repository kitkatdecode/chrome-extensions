window.onload = function() {
	let downloadBtn = document.getElementById('download');
	
	downloadBtn.onclick = function() {
        // Collect images
        let textCollect = document.getElementById('message');
        // let folder = document.getElementById('folder');
        
        textCollect.innerHTML = "Starting Downloaded";
        
        chrome.tabs.executeScript({code : scriptDownload});
        
	};
}

const scriptDownload =
  `(function() {
  		// collect all images 
  		let imagestodownload = [];
		let images = document.querySelectorAll("img");
        let srcArray = Array.from(images).map(function(image) {
			return image.currentSrc;
		});
        
        for (img of srcArray) {
            if (img) imagestodownload.push(img);
        };

        console.log("Collected "+ imagestodownload.length + " images");
        let message = {
            "imageUrls" : imagestodownload,
        };
        chrome.runtime.sendMessage(message, function(){
            console.log("Downloaded");
            return true;
        });

    })();`;

const scriptCodeDownload =
  `(function() {
		chrome.storage.local.get('savedImages', function(result) {
			let message = {
				"savedImages" : result.savedImages
			};
			chrome.runtime.sendMessage(message, function(){
				console.log("sending success");
			});
		});
    })();`;