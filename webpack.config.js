var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,

  devServer: {
    inline: true,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.(png|jpg|xlsx)$/, loader: 'url-loader?limit=5000000' }
    ]
  },
  watch: true
}
