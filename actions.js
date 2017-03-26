'use strict';

let testAction = require('./actions/testAction');
let declareVariable = require('./actions/declareVariable');

const TEST_MESSAGE = 'test-intent';
const DECLARE_VARIABLE = 'declare-variable';


let actionMap = new Map();
actionMap.set(TEST_MESSAGE, testAction)
actionMap.set(DECLARE_VARIABLE, declareVariable);

module.exports = actionMap;