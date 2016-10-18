// @flow

"use strict";

const urlParse = require("url-parse");

function testUrl(url: string) {
    let urlObj = urlParse(url);
    return urlObj.pathname.match(/^(\/[^\/]+\/[^\/]+)?\/pulls(\/.*)?$/);
}

module.exports = testUrl;