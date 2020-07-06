const formulajs = require("@formulajs/formulajs");

const funcs = {
	rate: formulajs.RATE,
	mymin: formulajs.MIN,
	mymax: formulajs.MAX,
};

window.superblocks.formulas.addFunctions(funcs);
