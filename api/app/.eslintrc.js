module.exports = {
	"env": {
		"node": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"plugins": [
	],
	"rules": {
		"comma-dangle": ["error", "always-multiline"],
		"semi": ["error", "always"],
		"indent": ["error", 4],
		"no-mixed-spaces-and-tabs": 1,
		"no-unused-vars": 1,
		"multiline-ternary": ["error", "always-multiline"],
		"space-infix-ops": ["error", { "int32Hint": false }]
	},
};
