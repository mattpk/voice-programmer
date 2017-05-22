'use strict';

class Model {
    constructor(sessionId) {
        this.sessionId = sessionId;
        this.functions = new Map();
        this.variables = new Map();
        this.persistCount = 0;
    }
}

module.exports = Model;