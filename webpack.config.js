const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: {
        app: ["./index.js"]
    },
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
            loader: "eslint-loader",
            exclude: /node_modules/
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
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        })
    ]
};
