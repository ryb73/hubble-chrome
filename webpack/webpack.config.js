"use strict";

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
};
