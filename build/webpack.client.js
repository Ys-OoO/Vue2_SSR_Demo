const path = require('path');
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = merge(baseConfig, {
    entry: {
        app: path.resolve(__dirname, "../src/entry-client.js"),
    },
})

module.exports = config;