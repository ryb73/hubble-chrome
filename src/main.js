import githubInjection from "github-injection";
// import $               from "jquery";
import urlParse        from "url-parse";

githubInjection(window, (...args) => {
    console.log(location.href);
    if(!testUrl(location.href))
        return;

    console.log("it's good!");
});

function testUrl(url) {
    let urlObj = urlParse(url);
    return urlObj.pathname.match(/^(\/[^\/]+\/[^\/]+)?\/pulls(\/.*)?$/);
}