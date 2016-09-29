"use strict";

const CopyWebpackPlugin  = require("copy-webpack-plugin"),
      CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:  {
        main: "./src/main.js",
    },

    output: {
        path: "lib",
        filename: "[name].js",
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "eslint-loader"
        }],

        loaders: [{
            test: /\.js$/,
            loader: "babel-loader"
        },{
            test: /\.json$/,
            loader: "json",
        }],
    },

    plugins: [
        new CleanWebpackPlugin([ "./lib/" ]),

        new CopyWebpackPlugin([{
            context: "./static/",
            from: "**/*",
        }]),
    ],

    resolve: {
        extensions: [".js", ".json"]
    },
};
