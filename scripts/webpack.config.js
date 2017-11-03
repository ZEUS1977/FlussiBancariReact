var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './components/pages/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,

  devServer: {
     inline: true,
     port: 8080
  },

  module: {
     loaders: [
        {
           test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
}
