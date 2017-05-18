'use strict';

let testAction = require('./actions/testAction');
let declareVariable = require('./actions/declareVariable');

const TEST_MESSAGE = 'test-intent';
const DECLARE_VARIABLE = 'declare-variable';

module.exports = function (model) {
	let actionMap = new Map();
	actionMap.set(TEST_MESSAGE, testAction(model))
	actionMap.set(DECLARE_VARIABLE, declareVariable(model));
	return actionMap;
};