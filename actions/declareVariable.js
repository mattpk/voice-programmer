'use strict';

let params = require('../parameters');

module.exports = function (assistant) {
	let variable = assistant.getArgument(params.VARIABLE);
	assistant.tell('Receieved variable ' + variable);
}