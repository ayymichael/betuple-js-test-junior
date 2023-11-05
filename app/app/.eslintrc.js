module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": ["error", "always-multiline"],
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "react/prop-types": 1,
        "no-mixed-spaces-and-tabs": 1,
        "no-unused-vars": 1,
        "react/no-unescaped-entities": 1,
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    }
};