const webpack = require('webpack');
const express = require('express');
const path = require('path');


const config = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index',
    spec: './src/tests.webpack'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.json']
  },
  module: {
    preLoaders: [
      { test: /\.ts$/, loaders: ['tslint'], exclude: /node_modules/ },
    ],
    loaders: [
      { test: /\.ts$/, loaders: ['ng-annotate', 'ts'], exclude: /node_modules/ },
      { test: /\.styl$/, loaders: ['style', 'css?modules', 'stylus'] },
    ],
  },
  devServer: {
    setup: function (app) {
      app.use('/jasmine', express.static('node_modules/jasmine-core/lib/jasmine-core/'));
    }
  }
};

module.exports = config;
