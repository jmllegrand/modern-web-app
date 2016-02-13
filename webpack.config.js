
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets:['react']
        }
      }
    ]
  }
};