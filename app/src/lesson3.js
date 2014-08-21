/* Lesson 3 : Creating Animation */

define(function(require, exports, module) {
	'use strict';

	var Engine = require('famous/core/Engine');
	var Surface = require('famous/core/Surface');
	var Transform  = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var Easing = require('famous/transitions/Easing');

	var context = Engine.createContext();

	var surface = new Surface({
		size: [100, 100],
		content: 'Simple Test',
		properties: {
			color: '#ededed',
			textAlign: 'center',
			backgroundColor: '#df0932'
		}
	});

	var stateModifier = new StateModifier({
		origin: [0.5, 0]
	});

	context.add(stateModifier).add(surface);

	// Handler onClick on surface
	surface.on('click', function() {
		stateModifier.halt();
		this.setContent('halted');
		stateModifier.setTransform(
			Transform.translate(300, 0, 0),
			{ duration: 1000, curse: Easing.inBounce }
		);
	});

	// Use physics Transitions
	var Transitionable = require('famous/transitions/Transitionable');
	var SpringTransition = require('famous/transitions/SpringTransition');
	Transitionable.registerMethod('ss', SpringTransition); // ss stand for spring

	var spring = {
		method : 'ss',
		period : 1000,
		dampingRadio: 0.3
	};

	stateModifier.setTransform(
		Transform.translate(0, 300, 0), spring
	);
});
