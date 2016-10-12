"use strict";

const githubInjection = require("github-injection"),
      $               = require("jquery"),
      urlParse        = require("url-parse"),
      bb              = require("bluebird"),
      testUrl         = require("./test-url");

githubInjection(window, (...args) => {
    if(!testUrl(location.href))
        return;

    $(".Box-row-link").each((i, elem) => {
        addPrMarker($(elem));
    });
});

function getPullRequestData(repoId, prId) {
    let jqPromise = $.ajax({
        url: `https://api.github.com/repos/${repoId}/pulls/${prId}`,
        dataType: "json"
    });

    return bb.resolve(jqPromise);
}

function addPrMarker(jqPrLink) {
    let prUrl = jqPrLink.attr("href");
    let repoId = getRepoIdFromUrl(prUrl);
    let prId = getPrIdFromUrl(prUrl);
    getPullRequestData(repoId, prId)
        .done(console.log.bind(console));
}

function getRepoIdFromUrl(url) {
    let parsedUrl = urlParse(url);
    let pieces = parsedUrl.pathname.split("/");
    return pieces[1] + "/" + pieces[2];
}

function getPrIdFromUrl(url) {
    let parsedUrl = urlParse(url);
    let pieces = parsedUrl.pathname.split("/");
    return pieces[4];
}