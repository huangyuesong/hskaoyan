var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');
var path = require('path');

var env = process.env.NODE_ENV || '';

webpackConfig = {
	entry: {},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name]',
		publicPath: '/',
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new webpack.DefinePlugin({
			DEVELOPMENT: env.indexOf('development') > -1,
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
			test: /\.(jpg|png|jpeg|gif)$/,
			loader: 'url-loader?limit=8192',
			query: {
				name: 'img/[name].[hash].[ext]',
			},
		},{
			test: /\.(otf|eot|svg|ttf|woff|woff2)\??.*$/,
			loader: 'file-loader',
            query: {
                name: 'font/[name].[hash].[ext]'
            },
		}],
	},
};

fs.readdirSync(path.resolve(__dirname, 'src', 'html')).map(function (filename) {
    if (/\.html$/.test(filename)) {
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.ejs'),
            filename: path.resolve(__dirname, 'public', filename),
            inject: false,
            body: fs.readFileSync(path.resolve(__dirname, 'src', 'html', filename)),
            script: env.indexOf('production') > -1 ? '<script src="/js/' + filename.replace(/html/, 'js') + '"></script>' : '',
            dev: env.indexOf('development') > -1 ?'<script src="/js/__dev__/' + filename.replace(/html/, 'js') + '"></script>' : '',
        }));
    }
});

fs.readdirSync(path.resolve(__dirname, 'src', 'js')).map(function (filename) {
    if (/\.js$/.test(filename)) {
        webpackConfig.entry['js/' + filename] = path.resolve(__dirname, 'src', 'js', filename);
    }
});

fs.readdirSync(path.resolve(__dirname, 'src', 'js', '__dev__')).map(function (filename) {
    if (/\.js$/.test(filename)) {
        webpackConfig.entry['js/__dev__/' + filename] = path.resolve(__dirname, 'src', 'js', '__dev__', filename);
    }
});

module.exports = webpackConfig;