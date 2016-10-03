const $        = require("jquery"),
      urlParse = require("url-parse");

$
    .ajax({
        url: "https://api.github.com/repos/ryb73/upgraded-waffle/pulls/1",
        dataType: "json"
    })
    .then((result) => {
        console.log(result);
    })
    .fail((err) => {
        console.error(err);
    })
    .done();

// function getAuthUrl() {
//     let clientId = "40658f2a8e1bdba55e45";
//     let scope = "repo";
//     let queryString = `client_id=${clientId}&scope=${scope}`;
//     return `https://github.com/login/oauth/authorize?${queryString}`;
// }

// chrome.identity.launchWebAuthFlow(
//     {
//         url: getAuthUrl(),
//         interactive: true
//     },

//     (redirectUrl) => {
//         if(!redirectUrl)
//             return;

//         let parsedUrl = urlParse(redirectUrl, null, true);
//         let secret = parsedUrl.query.code;

//         $
//             .ajax({
//                 url: "https://api.github.com/repos/ryb73/upgraded-waffle/pulls/1",
//                 dataType: "json"
//             })
//             .then((result) => {
//                 console.log(result);
//             })
//             .fail((err) => {
//                 console.error(err);
//             })
//             .done();
//     }
// );