var fs = require('fs')
var path = require('path')

var webpack = require('webpack');


// See https://github.com/chentsulin/electron-react-boilerplate/issues/123#issuecomment-232933186
const nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`
  })


module.exports = {
  context: __dirname + '/src',
  entry: {
    'polyfill': './polyfill.ts',
    'main': './main.ts',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: 'http://localhost:7000'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }, {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ],
  },
  externals: [
    nodeModules
  ],

  // See https://github.com/chentsulin/webpack-target-electron-renderer
  target: 'electron-renderer'
}
