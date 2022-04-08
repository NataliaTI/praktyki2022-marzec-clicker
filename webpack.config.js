const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './Layout/main.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'Public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};