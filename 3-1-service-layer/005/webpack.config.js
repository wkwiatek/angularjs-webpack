const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.json']
    },
    module: {
        preLoaders: [
            {test: /\.ts$/, loaders: ['tslint'], exclude: /node_modules/}
        ],
        loaders: [
            // Then we can add ng-annotate as a next loader in JS processing
            {test: /\.ts$/, loaders: ['ng-annotate', 'ts'], exclude: /node_modules/},
            {test: /\.styl$/, loaders: ['style', 'css', 'stylus']}
        ]
    }
};

module.exports = config;
