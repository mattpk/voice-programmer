#!/usr/bin/env node

// Contributions by Matthew Chung
// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0

'use strict';

process.env.DEBUG = 'actions-on-google:*';
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');
let bodyParser = require('body-parser');

let actions = require('./actions');

let app = express();
app.use(bodyParser.json({type: 'application/json'}));

app.post('/', function (req, res) {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));
  console.log(actions);

  assistant.handleRequest(actions);
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
