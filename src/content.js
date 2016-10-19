// @flow

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

function addPrMarker(jqPrLink) {
    let statusMarkerContainer = getStatusMarkerContainer(jqPrLink);

    // If there's already a red X, let's just move on
    if(statusMarkerContainer.children(".text-red").length > 0)
        return;

    let prUrl = jqPrLink.attr("href");
    let repoId = getRepoIdFromUrl(prUrl);
    let prId = getPrIdFromUrl(prUrl);

    getPullRequestData(repoId, prId)
        .done(setStatus.bind(null, prUrl, statusMarkerContainer));
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

function getPullRequestData(repoId, prId) {
    let jqPromise = $.ajax({
        url: `https://api.github.com/repos/${repoId}/pulls/${prId}`,
        dataType: "json"
    });

    return bb.resolve(jqPromise);
}

function getStatusMarkerContainer(jqPrLink) {
    let span = jqPrLink.siblings(".issue-pr-status");
    if(span.length < 1) {
        span = $("<span class='issue-pr-status'></span>");
        jqPrLink.after(span);
    }

    let container = span.children(".commit-build-statuses");
    if(container.length < 1) {
        container = $("<div class='commit-build-statuses'></div>");
        span.append(container);
    }

    return container;
}

function setStatus(prUrl, statusMarkerContainer, prData) {
    let mergeable = !!prData.mergeable;
    let newMarker = mergeable ? createGoodMarker(prUrl) : createBadMarker(prUrl);

    statusMarkerContainer.empty().append(newMarker);
}

function createGoodMarker(prUrl) {
    return $(`
        <a class="text-green tooltipped tooltipped-e" aria-label="Ready to merge" href="${prUrl}#partial-pull-merging">
            <svg aria-hidden="true" class="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
            </svg>
        </a>
    `);
}

function createBadMarker(prUrl) {
    return $(`
        <a class="text-red tooltipped tooltipped-e" aria-label="Not ready to merge" href="${prUrl}#partial-pull-merging">
            <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
            </svg>
        </a>
    `);
}