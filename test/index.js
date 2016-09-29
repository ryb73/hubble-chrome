"use strict";

let assert  = require("chai").assert,
    testUrl = require("../src/test-url");

describe("testUrl", function() {
    let goodUrls = [
        "https://github.com/ryb73/upgraded-waffle/pulls",
        "https://github.com/ryb73/upgraded-waffle/pulls?utf8=%E2%9C%93&q=",
        "https://github.com/ryb73/upgraded-waffle/pulls/assigned/ryb73",
        "https://github.com/pulls",
        "https://github.com/pulls/assigned",
        "https://github.com/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr++test+",
    ];

    goodUrls.forEach((url) => {
        it("should accept " + url, function() {
            assert.ok(testUrl(url));
        });
    });

    let badUrls = [
        "https://github.com/",
        "https://github.com/ryb73/upgraded-waffle/pull/2",
    ];

    badUrls.forEach((url) => {
        it("should accept " + url, function() {
            assert.notOk(testUrl(url));
        });
    });
});