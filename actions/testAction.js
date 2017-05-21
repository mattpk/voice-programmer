'use strict';

let db = require('../persistence/redisConn.js').db();

module.exports = function (model) {
	return function (assistant) {
		db.get('PING', function(err, reply) {
			if (reply == "PONG") {
				assistant.tell('Successful Test Response');
			} else {
				assistant.tell('Failed Redis Connection');
			}
		});
	};
};