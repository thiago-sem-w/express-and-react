'use strict'

const path = require('path')

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: path.resolve(__dirname, 'public', 'index.js')
}
