const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/js/hello.js'),
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
    filename: '[name].bundle.js',
    publicPath: path.join(__dirname, './public')
  }
};
