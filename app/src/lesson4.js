define(function(require, exports, module) {
	'use strict';

	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');

	var context = Engine.createContext();

	var surface = new Surface({
		content: 'Hello World',
		size: [100, 100],
		properties: {
			color: '#21de32',
			textAlign: 'center',
			backgroundColor: '#dedede'
		}
	});

	context.add(surface);

	// Surface Events
	// click, mousedown, mousemove, mouseup, mouseover
	// touchstart, touchmove, touchend, touchcancel
	// keydown, keyup, keypress
	surface.on('mouseover', function() {
		surface.setProperties({
			backgroundColor: '#ff0000'
		});
	});

	surface.on('mouseout', function() {
		surface.setProperties({
			backgroundColor: '#dedede'
		});
	});

	Engine.on('keydown', function(e) {
		surface.setContent(e.which);
	});

	Engine.on('resize', function() {
		surface.setContent('resized');
	});

});
