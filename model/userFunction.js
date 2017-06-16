'use strict';

class UserFunction {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.variables = {};
        this.operations = [];
    }
}

module.exports = UserFunction;