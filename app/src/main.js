/* globals define */
define(function(require, exports, module) {
    'use strict';

    // Use Famo.us Engine
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');

    // Create new Contenxt
    var mainContext = Engine.createContext();

    // Create Surface object with content.
    var firstSurface = new Surface({
        content: 'Hello Famo.us \m/'
    });

    firstSurface.setContent('<h1>Awesome!</h1>');

    // Add Surface to mainContext
    mainContext.add(firstSurface);
});
