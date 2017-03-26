const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    hello: path.resolve(__dirname, 'src/js/hello.jsx'),
    tick: path.resolve(__dirname, 'src/js/tick.jsx'),
    comment: path.resolve(__dirname, 'src/js/comment.jsx'),
    toggle: path.resolve(__dirname, 'src/js/toggle.jsx'),
    loginout: path.resolve(__dirname, 'src/js/loginout.jsx'),
    list: path.resolve(__dirname, 'src/js/list.jsx'),
    form: path.resolve(__dirname, 'src/js/form.jsx'),
    select: path.resolve(__dirname, 'src/js/select.jsx'),
    input: path.resolve(__dirname, 'src/js/input.jsx'),
    temperature: path.resolve(__dirname, 'src/js/temperature.jsx'),
    commerce: path.resolve(__dirname, 'src/js/commerce.jsx'),
    react: ['react', 'react-dom']
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /(node_modules)/,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, 'src/css'),
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:7].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
      minChunks: Infinity
    }),
    new ExtractTextWebpackPlugin({
      filename: 'css/[name].[chunkhash:7].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['hello', 'react'],
      filename: 'html/hello.html',
      title: 'HelloReact',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['tick', 'react'],
      filename: 'html/tick.html',
      title: 'Tick',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['comment', 'react'],
      filename: 'html/comment.html',
      title: 'Comment',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['toggle', 'react'],
      filename: 'html/toggle.html',
      title: 'Toggle',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['loginout', 'react'],
      filename: 'html/loginout.html',
      title: 'Loginout',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['list', 'react'],
      filename: 'html/list.html',
      title: 'List',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['form', 'react'],
      filename: 'html/form.html',
      title: 'Form',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['select', 'react'],
      filename: 'html/select.html',
      title: 'Select',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['input', 'react'],
      filename: 'html/input.html',
      title: 'Input',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['temperature', 'react'],
      filename: 'html/temperature.html',
      title: 'Temperature',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    }),
    new HtmlWebpackPlugin({
      chunks: ['commerce', 'react'],
      filename: 'html/commerce.html',
      title: 'Commerce',
      minify: {
        collapseWhitespace: false,
        removeComments: true
      },
      template: path.resolve(__dirname, 'src/html/base.html')
    })
  ]
};
