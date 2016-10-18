module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
    },

    extends: [ "eslint:recommended", "plugin:flowtype/recommended" ],

    parser: "babel-eslint",

    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },

    plugins: [ "flowtype" ],

    rules: {
        "linebreak-style": [
            "error",
            "unix"
        ],

        semi: [
            "error",
            "always"
        ],

        "no-console": "off",

        "no-unused-vars": [
            "error",
            { vars: "all", args: "none" }
        ],

        eqeqeq: [ "error", "always" ],
    },

    globals: {
        chrome: true,
    },
};