// @flow

"use strict";

const githubInjection = require("github-injection"),
      $               = require("jquery"),
      testUrl         = require("./test-url"),
      addPrMarkers    = require("./add-pr-markers");

declare var Bugsnag : any;
require("./vendor/bugsnag");

// Set up Bugsnag
Bugsnag.apiKey = "b7251d720e951f4d30b8d53e947c4cd6";
Bugsnag.notifyHandler = "xhr";
Bugsnag.metaData = {
    version: "0.1"
};
Bugsnag.beforeNotify = function (error, metaData) {
    error.stacktrace = error.stacktrace.replace(/chrome-extension:/g, "chrome_extension:");
};

Bugsnag.notify("Started content script", null, null, "info");

// githubInjection basically makes Github work with Chrome extensions
githubInjection(window, (...args) => {
    try {
        if(!testUrl(location.href))
            return;

        addPrMarkers($("body"))
            .catch(reportException)
            .done();
    } catch (ex) {
        reportException(ex);
    }
});

function reportException(ex) {
    Bugsnag.notifyException(ex);
}
