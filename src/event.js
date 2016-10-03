function getAuthUrl() {
    let clientId = "40658f2a8e1bdba55e45";
    let scope = "repo";
    let queryString = `client_id=${clientId}&scope=${scope}`;
    return `https://github.com/login/oauth/authorize?${queryString}`;
}

chrome.identity.launchWebAuthFlow(
    {
        url: getAuthUrl(),
        interactive: true
    },

    (redirect_url) => {
        alert(redirect_url);
    }
);