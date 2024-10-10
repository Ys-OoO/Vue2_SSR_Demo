const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ["vue-style-loader", "css-loader", 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.mode = "development";
  } else {
    config.mode = "production";
  }

  return config;
}