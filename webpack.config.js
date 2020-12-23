"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp4)$/,
        loader: "file",
        // loader: 'url-loader'
        // loader: 'url-loader?limit=100000'
        // loader: 'file-loader'
        // loader: 'file-loader?name=videos/[name].[ext]'
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "./public",
        from: "*.*",
      },
    ]),
    new Dotenv(),
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3003,
    proxy: {
      "**": "http://localhost:5003",
    },
  },
};
