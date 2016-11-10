const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: {
        app: ["./index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
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
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }, {
            test: /\.svg$/,
            loader: 'svg-url-loader'
        }]
    },
    resolve: {
        extensions: ['', '.css', '.js', '.styl', 'index.js']
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        })
    ]
};
