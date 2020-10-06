'use strict'

const path = require('path')

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: path.resolve(__dirname, 'public', 'index.jsx'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}
