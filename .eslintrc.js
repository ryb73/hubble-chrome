module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [ "eslint:recommended" ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },

        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "no-unused-vars": [
            "error",
            { vars: "all", args: "none" }
        ],
        eqeqeq: [ "error", "always" ]
    },
    "globals": {
        "arguments": true
    }
};