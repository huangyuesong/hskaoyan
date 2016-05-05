var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

fs.readdirSync(path.resolve('./src/html/')).map(function (filename) {
	if (/\.html$/.test(filename)) {
		fs.writeFileSync('./public/html/' + filename, fs.readFileSync('./src/html/' + filename));
	}
});

var exclude = new Map();
exclude.set('header.js', true);
exclude.set('footer.js', true);
exclude.set('header_forum.js', true);
exclude.set('other_site.js', true);
exclude.set('pagination.js', true);
var entry = {};
fs.readdirSync(path.resolve('./src/js/')).map(function (filename) {
	if (/\.js$/.test(filename) && !exclude.get(filename)) {
		entry[filename.split('.')[0]] = './src/js/' + filename;
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
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				},
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