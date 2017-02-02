var webpack = require('webpack');

module.exports = {
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
        presets: ['react', 'es2015'],
        plugins: ["transform-class-properties"]
      }
    }]
  }
}
