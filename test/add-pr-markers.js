"use strict";

const assert       = require("chai").assert,
      jsdom        = require("jsdom"),
      $            = require("jquery")(jsdom.jsdom().defaultView),
      fs           = require("fs"),
      bb           = require("bluebird"),
      addPrMarkers = require("../src/add-pr-markers");

describe("addPrMarker", function() {
    it("should work", function() {
        let contents = fs.readFileSync(__dirname + "/assets/test.html", "utf8");
        let jqContents = $(contents).appendTo("body");

        return addPrMarkers(jqContents, $, mockGithubApi())
            .then(() => {
                assert.equal($("#issue_6 .gpp-unmergable").length, 1);
                assert.equal($("#issue_5 .gpp-mergable").length, 1);
                assert.equal($("#issue_4 .commit-build-statuses .text-red").length, 1);
                assert.equal($("#issue_3 .commit-build-statuses .text-red").length, 1);
                assert.equal($("#issue_2 .gpp-unmergable").length, 1);
                assert.equal($("#issue_1 .commit-build-statuses .text-green").length, 1);
            });
    });
});

function mockGithubApi() {
    return {
        getPullRequestData(repoId, prId) {
            assert.equal(repoId, "ryb73/upgraded-waffle");

            switch(+prId) {
                case 1:
                    return bb.resolve({ mergeable: true });
                case 2:
                    return bb.resolve({ mergeable: false });
                case 3:
                    throw new Error("Shouldn't hit API");
                case 4:
                    throw new Error("Shouldn't hit API");
                case 5:
                    return bb.resolve({ mergeable: true });
                case 6:
                    return bb.resolve({ mergeable: false });
            }
        }
    };
}