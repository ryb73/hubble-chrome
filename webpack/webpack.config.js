"use strict";

const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin"),
      webpack                 = require("webpack");

module.exports = {
    entry:  {
        content: "./src/content.js",
    },

    output: {
        path: "lib/js",
        filename: "[name].js",
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader"
        }],
    },

    resolve: {
        extensions: [".js", ".json"]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new FlowStatusWebpackPlugin({
            restartFlow: false,
            failOnError: true,
        })
    ],
};
