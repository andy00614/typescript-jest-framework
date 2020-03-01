const path = require("path");

// const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: "./src/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "lib")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: "./lib",
    hot: true,
    port: 3000,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      title: '插件库测试'
    }),
    // new cleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map'
};
