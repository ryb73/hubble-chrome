"use strict";

const githubInjection = require("github-injection"),
      testUrl         = require("./test-url");
// import $               from "jquery";

githubInjection(window, (...args) => {
    console.log(location.href);
    if(!testUrl(location.href))
        return;

    console.log("it's good!");
});
