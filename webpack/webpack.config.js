"use strict";

module.exports = {
    entry:  {
        content: "./src/content.js",
        event: "./src/event.js",
        onload: "./src/oauth/onload.js",
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
