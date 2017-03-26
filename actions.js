'use strict';

let testAction = require('./actions/testAction');

const TEST_MESSAGE = 'test-intent';


let actionMap = new Map();
actionMap.set(TEST_MESSAGE, testAction)


module.exports = actionMap;