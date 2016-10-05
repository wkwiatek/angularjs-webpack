/// We use NodeJS 6th version, so we can use all of ES2015 stuff
const config = {
	/// At beginning we set entrypoint to our build
	entry: './src/index',
	//3/ And then name of bundled code
	output: {
		filename: 'bundle.js',
	}
};

module.exports = config;
