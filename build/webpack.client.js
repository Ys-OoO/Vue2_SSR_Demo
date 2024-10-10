const path = require('path');
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(baseConfig, {
    entry: {
        app: path.resolve(__dirname, "../src/entry-client.js"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            filename: 'index.html'
        })
    ]
})

module.exports = config;