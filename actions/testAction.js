'use strict';

module.exports = function (model) {
	return function (assistant) {
		assistant.tell('Successful Test Response');
	};
};