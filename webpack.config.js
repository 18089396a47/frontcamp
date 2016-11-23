const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const TrueToFalsePlugin = require('./trueToFalsePlugin/trueToFalse.js');
module.exports = {
    devtool: 'eval-source-map',
    entry: [
        "babel-polyfill",
        "./index.js"
    ],
    output: {
        path: "build/",
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
           test: /\.html$/,
           loader: "raw-loader"
       }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.svg$/,
            loader: 'svg-url-loader'
        }, {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack'
            ]
        }]
    },
    resolve: {
        extensions: ['', '.css', '.js', '.styl', '.json', 'index.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        })
    ]
};
