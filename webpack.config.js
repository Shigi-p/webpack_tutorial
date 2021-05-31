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
    app: "./src/index.js",
    print: "./src/print.js",
  },
  devtool: "inline-source-map",
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
    filename: "[name].bundle.js",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, "dist"),
  },
};
