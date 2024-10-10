const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const config = merge(baseConfig, {
  entry: {
    app: path.resolve(__dirname, "../src/entry-client.js"),
  },
  plugins: [
    new VueSSRClientPlugin({
      filename: "client-manifest.json",
    }),
  ],
});

module.exports = config;
