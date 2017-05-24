'use strict';

let testAction = require('./testAction');
let declareVariable = require('./declareVariable');
let conn = require('../persistence/redisConn.js');

const TEST_MESSAGE = 'test-intent';
const DECLARE_VARIABLE = 'declare-variable';

module.exports = function (model) {
	let actionMap = new Map();
	actionMap.set(TEST_MESSAGE, testAction(model));
	actionMap.set(DECLARE_VARIABLE, declareVariable(model));
    actionMap.forEach((value, key, map) => {
        map.set(key, (assistant) => {
            new Promise((resolve, reject) => {
                value(assistant);
                model.persistCount++;
                resolve(model);
            }).then((model) =>  {
                console.log("Persisting model");
                conn.persistModel(model);
            });
        });
    });  
	return actionMap;
};