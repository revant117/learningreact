var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./public'));

app.get('/' , function(req,res){
	res.sendFile(path.resolve('client/index.html'));
})

var port = 3000;

app.listen(port , function(error){
	if(error) {
		throw error;
	}
	console.log("server listening to port "+ port);
})


