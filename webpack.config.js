var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var entry = {};
var exclude = new Map();
exclude.set('header.js', true);
exclude.set('footer.js', true);
exclude.set('header_forum.js', true);
var files = fs.readdirSync(path.resolve('./src/js/'));
files.map(function (file) {
	if (/\.js$/.test(file) && !exclude.get(file)) {
		entry[file.split('.')[0]] = './src/js/' + file;
	}
});

module.exports = {
	entry: entry,

	output: {
		path: './public/js',
		filename: '[name].bundle.js',
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
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