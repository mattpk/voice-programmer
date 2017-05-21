'use strict';

let redis = require('redis');

let db = null;
exports.db = function() {
	if (db === null) {
		// local redis server
		db = redis.createClient({host : '127.0.0.1', port : 6379});
		db.on('ready', function() {
			console.log('Connected to redis');
		});
	}
	return db;
}