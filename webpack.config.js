var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
var path = require('path');

var env = process.env.NODE_ENV || '';

webpackConfig = {
	entry: {},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js',
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
	],
	module: {
		loaders: [{
			test: /\.html$/,
            loader: 'html-loader',
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
			},
		},{
			test: /\.css$/,
			loaders: [
				'style-loader',
				'css-loader',
			],
		},{
			test: /\.scss$/,
			loaders: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		},{
			test: /\.(otf|eot|svg|ttf|woff|woff2)\??.*$/,
			loader: 'file-loader',
            query: {
                name: 'font/[name].[hash].[ext]'
            },
		}],
	},
};

fs.readdirSync(path.join(__dirname, 'src', 'html')).map(function (filename) {
    if (/\.html$/.test(filename)) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.ejs'),
            filename: path.join(__dirname, 'public', filename),
            inject: false,
            body: fs.readFileSync(path.join(__dirname, 'src', 'html', filename)),
            script: env.indexOf('production') > -1 ? '<script src="/js/' + filename.split('.')[0] + '.js"></script>' : '',
            dev: env.indexOf('development') > -1 ?'<script src="/js/__dev__/__' + filename.split('.')[0] + '__.js"></script>' : '',
        }));
    }
});

fs.readdirSync(path.join(__dirname, 'src', 'js')).map(function (filename) {
    if (/\.js$/.test(filename)) {
        webpackConfig.entry['js/' + filename.split('.')[0]] = path.join(__dirname, 'src', 'js', filename);
    }
});

fs.readdirSync(path.join(__dirname, 'src', 'js', '__dev__')).map(function (filename) {
    if (/\.js$/.test(filename)) {
        webpackConfig.entry['js/__dev__/__' + filename.split('.')[0] + '__'] = path.join(__dirname, 'src', 'js', '__dev__', filename);
    }
});

module.exports = webpackConfig;