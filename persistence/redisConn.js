'use strict';

const MODEL_PREFIX = 'model';
const CACHE_DELIMITER = '.';

let redis = require('redis');
let db = null;

function getDatabaseClient() {
    if (db === null) {
        // local redis server
        db = redis.createClient({host : '127.0.0.1', port : 6379});
        db.on('ready', function() {
            console.log('Connected to redis');
        });
    }
    return db;
}

function getModel(sessionId) {
    return new Promise((resolve, reject) => {
        getDatabaseClient();
        let key = MODEL_PREFIX + CACHE_DELIMITER + sessionId;
        db.get(key, function(err, reply) {
            console.log(key + " del reply=" + reply);
            if (err || reply === null) {
                reject(err);
            } else {
                resolve(JSON.parse(reply));
            }
        });
    });
}

function persistModel(model) {
    return new Promise((resolve, reject) => {
        getDatabaseClient();
        let key = MODEL_PREFIX + CACHE_DELIMITER + model.sessionId;
        db.set(key, JSON.stringify(model), function(err, reply) {
            if (err) {
                reject(err);
            } else {
                resolve(reply);
            }
        });
    });
}

exports.db = getDatabaseClient;
exports.getModel = getModel;
exports.persistModel = persistModel;