const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    hello: path.join(__dirname, './src/js/hello.js'),
    tick: path.join(__dirname, './src/js/tick.js'),
    comment: path.join(__dirname, './src/js/comment.js'),
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
    filename: '[name].[chunkhash:7].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      chunks: ['hello', 'react'],
      filename: '../html/hello.html',
      title: 'HelloReact',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.join(__dirname, './src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['tick', 'react'],
      filename: '../html/tick.html',
      title: 'Tick',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.join(__dirname, './src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['comment', 'react'],
      filename: '../html/comment.html',
      title: 'Comment',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.join(__dirname, './src/html/base.html')
    })
  ]
};
