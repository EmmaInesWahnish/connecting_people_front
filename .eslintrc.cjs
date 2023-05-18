module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"standard",
		"eslint-config-prettier",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		// values : warn - off - error
		// "react/react-in-jsx-scope": "off"
		"no-unused-vars": "warn",
		"camelcase": "off",
		"react/prop-types": "off",
		"no-unneeded-ternary": "off",
		"react/no-children-prop": "off"
	},
};
