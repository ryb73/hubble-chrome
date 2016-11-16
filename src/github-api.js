"use strict";

const $  = require("jquery"),
      bb = require("bluebird");

module.exports = {
    getPullRequestData(repoId, prId) {
        return new bb((resolve, reject) => {
            let data = {
                url: `https://api.github.com/repos/${repoId}/pulls/${prId}`,
                dataType: "json"
            };

            $.ajax(data)
                .then((result) => { resolve(result); })
                .catch((jqXHR, textStatus, errorThrown) => {
                    reject(new Error(`Error requesting PR data: ${repoId}, ${prId}: ${errorThrown}`));
                });
        });
    }
};
