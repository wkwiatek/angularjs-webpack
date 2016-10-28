const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

/// That variable is very useful to know whether we're building in production or development mode
const isProdEnv = process.env.WEBPACK_ENV === 'production';

const config = {
	entry: './src/index',
	output: {
		/// Bundle target directory
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
	//4/ Let's use UglifyJS in production mode
	plugins: isProdEnv ? [
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	] : [],
}

module.exports = config
