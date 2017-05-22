#!/usr/bin/env node

'use strict';

process.env.DEBUG = 'actions-on-google:*';
let Assistant = require('actions-on-google').ApiAiApp;
let Model = require('./model/model');
let express = require('express');
let bodyParser = require('body-parser');
let conn = require('./persistence/redisConn');

let actions = require('./actions/actions');

let app = express();
app.use(bodyParser.json({type: 'application/json'}));

app.post('/', function (req, res) {
    const assistant = new Assistant({request: req, response: res});
    const sessionId = req.body.sessionId;
    //console.log('Request headers: ' + JSON.stringify(req.headers));
    //console.log('Request body: ' + JSON.stringify(req.body));
    console.log("Request sessionId=" + sessionId);
    
    conn.getModel(sessionId).then(model => {
        // grab cached model
        return model; 
    }, () => {
        // create new model
        return new Model(sessionId);
    }).then(model => {
        console.log("model=" + JSON.stringify(model));
        let actionMap = actions(model);
        assistant.handleRequest(actionMap);
    });
});

// Landing page 404s
app.get('/', function (req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Invalid Request\n');
});

if (module === require.main) {
    // Start the server
    let server = app.listen(process.env.PORT || 8081, function () {
        let port = server.address().port;
        console.log('App listening on port %s', port);
    });
}

module.exports = app;