const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? false : 'source-map',
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-bundle.js",
  },
  devServer: isProd ? false : {
    static: {
      directory: path.join(__dirname, '../public')
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
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      'public': path.resolve(__dirname, '../public')
    }
  }
};