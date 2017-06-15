'use strict';

class Model {
    constructor(sessionId) {
        this.sessionId = sessionId;
        this.functions = {};
        this.variables = {};
        this.persistCount = 0;
    }
}

module.exports = Model;