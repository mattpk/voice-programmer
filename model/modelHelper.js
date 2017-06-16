'use strict';

// this mechanism is necessary as serialization doesn't preserve functions
class ModelHelper {
    hasScopedVariable(model, variable) {
        if (model.currentFunction) {
            return (variable in model.currentFunction.variables); 
        } else {
            return (variable in model.variables);
        }
    }

    declareScopedVariable(model, variable) {
        if (model.currentFunction) {
            model.currentFunction.variables[variable] = null;
        } else {
            model.variables[variable] = null;
        }
    }
}


module.exports = new ModelHelper();