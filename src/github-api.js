"use strict";

const $  = require("jquery"),
      bb = require("bluebird");

module.exports = {
    getPullRequestData(repoId, prId) {
        let jqPromise = $.ajax({
            url: `https://api.github.com/repos/${repoId}/pulls/${prId}`,
            dataType: "json"
        });

        return bb.resolve(jqPromise);
    }
};