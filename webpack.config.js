var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./client/client.js'
	],
	output:{
		path: require('path').resolve("./public"),
		filename: 'jsbundle.js',          
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
    			loader: 'babel-loader',
   			    exclude: /node_modules/,
				query: {
					presets: ['react' ,'es2015' , 'react-hmre']
				}
			}
		]
	}
}
