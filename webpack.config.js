const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.join(__dirname, 'dist/public'),
};

module.exports = {
  entry: [
    path.join(PATHS.app, 'index.js'),
  ],
  output: {
    path: PATHS.public,
    filename: 'index_bundle.js',
  },
  devtool: 'eval-source-map',
  resolve: { extensions: ['', '.js', '.jsx', '.css'] },
  devServer: {
    contentBase: PATHS.app,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.app, 'index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new OpenBrowserPlugin(),
  ],
  module: {
    loaders: [{
    // Process ES6+ and JSX with Babel
      test: /\.jsx?$/,
      loader: 'babel',
      include: PATHS.app,
      query: { presets: ['react', 'es2015', 'stage-0'] },
    }, {
      // Process CSS files
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: PATHS.app,
    }],
  },
};
