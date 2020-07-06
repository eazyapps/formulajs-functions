import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/functions.js",
	output: {
		file: "umd/functions.js",
		format: "umd",
		name: "funcs",
	},
	plugins: [resolve(), commonjs()],
};
