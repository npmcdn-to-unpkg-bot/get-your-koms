const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.join(__dirname, 'public'),
};

const styleLoaders = [
	'css-loader',
	'postcss-loader',
];

module.exports = {
  entry: [
    path.join(PATHS.app, 'index.js'),
  ],
  output: {
    path: PATHS.public,
    filename: 'index.min.[hash].js',
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: path.join(PATHS.app, 'index.html'),
	    inject: 'body',
	    filename: 'index.html'
		}),
		new ExtractTextPlugin('main.min.[hash].css'),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
  module: {
  	loaders: [{
  		// Process ES6+ and JSX with Babel
			test: /\.jsx?$/,
			loader: 'babel',
      include: PATHS.app,
			query: { presets: ['react', 'es2015', 'stage-0'] }
  	}, {
  		// Process CSS files
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', styleLoaders.join('!')),
      include: PATHS.app,
  	}],
  },
  postcss: [
  	autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};
