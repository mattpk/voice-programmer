'use strict';

let params = require('../parameters');

module.exports = function (model) {
	return function (assistant) {
		let variable = assistant.getArgument(params.VARIABLE);
		assistant.tell('Receieved variable ' + variable);
	};
};