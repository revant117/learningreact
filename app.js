var express = require('express');
var path = require('path');

var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

app.use(express.static('./public'));

var compiler = webpack(config);
app.use(webpackMiddleware(compiler , {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/' , function(req,res){
	res.sendFile(path.resolve('client/index.html'));
})

var port = 5000;

app.listen(port , function(error){
	if(error) {
		throw error;
	}
	console.log("server listening to port "+ port);
})
