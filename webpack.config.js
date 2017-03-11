const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    hello: path.join(__dirname, './src/js/hello.js'),
    react: ['react', 'react-dom']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].[chunkhash:7].js',
    publicPath: path.join(__dirname, './static')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: Infinity
    })
  ]
};
