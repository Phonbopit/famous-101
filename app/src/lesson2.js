/* globals define */
define(function(require, exports, module) {
    'use strict';

    // Use Famo.us Engine
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');

    // Create new Contenxt
    var mainContext = Engine.createContext();

    var firstSurface = new Surface({
        size: [100, 100],
        properties: {
            backgroundColor: '#fa5c4f'
        }
    });

    mainContext.add(firstSurface);
});
