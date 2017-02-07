module.exports = {
<<<<<<< HEAD
	devtool: 'inline-source-map',
	entry: ['./client/client.js'],
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]		
	}
=======
  devtool: 'inline-source-map',
  entry: ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
>>>>>>> 5d146e3714d78f5f0faeabd1b3723783f3d5a84c
}
