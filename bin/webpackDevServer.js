require('babel-core/register');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var devIp = require('dev-ip');

var host = devIp()[0] || 'localhost';

var server = new WebpackDevServer(webpack(webpackConfig), {
	hot: true,
	contentBase: '../public/',
	stats: {
		colors: true,
	},
	historyApiFallback: true,
});

server.listen(8080, devIp()[0] || 'localhost', function () {
	console.log('Webpack dev server running at ' + host + ':8080');
});