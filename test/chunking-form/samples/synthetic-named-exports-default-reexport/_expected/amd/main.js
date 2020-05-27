define(['require', 'exports'], function (require, exports) { 'use strict';

	var lib = {};

	console.log('side-effect', lib);

	const component = new Promise(function (resolve, reject) { require(['./generated-component'], resolve, reject) });

	exports.component = component;
	exports.lib = lib;

	Object.defineProperty(exports, '__esModule', { value: true });

});