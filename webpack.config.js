"use strict";

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",
  // エントリーポイントの設定
  entry: {
    "app.js": "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  // 出力の設定
  output: {
    // 出力するファイル名
    // filename: 'main.js',
    filename: "[name]",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          compact: true,
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
