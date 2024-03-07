module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "ignorePatterns":[".eslintrc.js", "babel.config.js", "__test__/"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
}