const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/demo-microfe/footer";

//bundle lambda js
const lambdaConfig = {
  mode: "production",
  target: "node",
  entry: "./src/lambda/index.ts",
  output: {
    path: path.resolve("dist", "lambda"),
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
    publicPath: ASSET_PATH,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};

//bundle clientside js
const clientConfig = {
  mode: "production",
  target: "web",
  entry: { client: "./src/client/index.tsx" },
  output: {
    path: path.resolve("dist", "lambda"),
    filename: "assets/[name].[contenthash].bundle.js",
    library: "index",
    libraryTarget: "umd",
    publicPath: ASSET_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: "manual",
      filename: "index.html",
      inject: "body",
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};

module.exports = [merge(commonConfig, lambdaConfig), merge(commonConfig, clientConfig)];
