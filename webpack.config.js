var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var entry = {};
var files = fs.readdirSync(path.resolve('./src/js/'));
files.map(function (file) {
	entry[file.split('.')[0]] = './src/js/' + file;
});

module.exports = {
	entry: entry,

	output: {
		path: './public/js',
		filename: '[name].bundle.js',
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
		}),
	],

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015',
			},

			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
				],
			},

			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},

			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)\??.*$/,
				loader: 'file-loader',
                query: {
                    name: 'font/[name].[hash].[ext]'
                },
			},
		],
	},
};