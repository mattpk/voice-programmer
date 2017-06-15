'use strict';

let conn = require('../persistence/redisConn');
let db = conn.db();

module.exports = function (model) {
	return function (assistant) {
        db.ping(function(err, reply) {
            if (err || reply !== "PONG") {
                assistant.tell("Error pinging redis db");
            } else {
                assistant.ask("Successful Test Response");
            }
		});
    };
};