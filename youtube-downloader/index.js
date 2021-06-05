let express = require('express');
let app = express();
let ytdl = require('ytdl-core');

app.listen('4000', function(){
	console.log("listening on 4000");
});

app.get('/download', function(req, res) {
	let link = req.query.url;
	let format = req.query.format;
	let quality = req.query.quality;
	console.log(link);
	console.log(format);
	console.log(quality);

	video = ytdl(link,{
		format:format,
		quality:quality,
	});
	video.pipe(res);
});