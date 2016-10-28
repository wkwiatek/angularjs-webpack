const config = {
	entry: './src/index',
	output: {
		filename: 'bundle.js',
	},
	//5/ Adding loaders in webpack
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
}

module.exports = config
