'use strict';

let params = require('../parameters');
let mw = require('../model/modelHelper');

module.exports = function (model) {
    return function (assistant) {
        let variable = assistant.getArgument(params.VARIABLE);
        // fix strange Api.Ai glitch
        if (variable.startsWith("Declare variable")) {
            variable = variable.slice(17);
        }
        
        if (mw.hasScopedVariable(model, variable)) {
            assistant.ask("' " + variable + "' has already been declared.");
        } else {
            mw.declareScopedVariable(model, variable);
            assistant.ask("Declared variable '" + variable + "'");
        }
	};
};