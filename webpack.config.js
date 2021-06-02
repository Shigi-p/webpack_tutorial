"use strict";

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");
const RouteDataMapper = require("webpack-route-data-mapper");

// pages/**/*.pug -> dist/**/*.html
const htmlTemplates = RouteDataMapper({
  baseDir: "./src/pages",
  src: "./**/[!_]*.pug",
});

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: "development",
  // エントリーポイントの設定
  entry: {
    "/js/app.js": "./src/js/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    // filename: 'main.js',
    filename: "[name]",
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.resolve(__dirname, "./dist/"),
    // assetModuleFilename: "images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, "src/"),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          compact: true,
        },
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   type: "asset/resource",
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [...htmlTemplates],
};
