// chrome.tabs.create(getTabOptions());

const ChromeExOAuth = require("./oauth/chrome_ex_oauth");

console.log("starting");

window.setTimeout(() => {

    debugger;

    let oauth = ChromeExOAuth.initBackgroundPage({
        // // "request_url": "https://www.google.com/accounts/OAuthGetRequestToken",
        // "authorize_url": "https://github.com/login/oauth/authorize",
        // // "access_url": "https://www.google.com/accounts/OAuthGetAccessToken",
        // "consumer_key": "40658f2a8e1bdba55e45",
        // "consumer_secret": "anonymous",
        // "scope": "repo",
        // // "app_name": "My Google Docs Extension"
        'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
        'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
        'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
        'consumer_key': 'anonymous',
        'consumer_secret': 'anonymous',
        'scope': 'https://docs.google.com/feeds/',
        'app_name': 'My Google Docs Extension'
    });

    oauth.authorize((...args) => {
        console.log("auth", String(args));
    });

}, 1000);