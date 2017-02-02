var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'react-hmre'],
        plugins: ["transform-class-properties"]
      }
    }]
  }
}
