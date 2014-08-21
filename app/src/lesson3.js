define(function(require, exports, module) {
	'use strict';

	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');

	var context = Engine.createContext();

	var surface = new Surface({
		content: 'Simple Test',
		properties: {
			size: [100, 100],
			textAlign: 'center',
			backgroundColor: '#df0932'
		}
	});

	context.add(surface);
});
