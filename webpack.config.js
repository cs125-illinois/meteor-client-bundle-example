const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './client/items.js',
  output: {
    filename: './dist/items.js'
  },
	externals: [
		function resolveMeteor(context, request, callback) {
			let match = request.match(/^meteor\/(.+)$/)
			let pack = match && match[1]
			let locator = pack && `Package["${ pack }"]`
			return locator ? callback(null, locator) : callback()
		}
	],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: [ /node_modules/, /meteor-client.js/ ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
