'use strict';

let params = require('../parameters');

module.exports = function (model) {
    return function (assistant) {
        let variable = assistant.getArgument(params.VARIABLE);
        
        if (variable in model.variables) {
            assistant.ask("' " + variable + "' has already been declared.");
        } else {
            model.variables[variable] = null;
            assistant.ask("Declared variable '" + variable + "'");
        }
	};
};