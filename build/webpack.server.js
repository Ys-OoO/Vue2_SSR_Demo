const { merge } = require("webpack-merge");
const path = require('path');
const baseConfig = require("./webpack.base");

const config = merge(baseConfig, {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, "../src/entry-server.js"),
    },
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
})

module.exports = config;