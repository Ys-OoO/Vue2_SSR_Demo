const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

const config = merge(baseConfig, {
  target: "node",
  entry: {
    server: path.resolve(__dirname, "../src/entry-server.js"),
  },
  output: {
    filename: "server-bundle.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: "server-bundle.json",
    }),
  ],
});

module.exports = config;
