'use strict'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: path.resolve(__dirname, 'public', 'index.jsx'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	]
}
