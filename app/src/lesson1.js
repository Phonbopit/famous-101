/* globals define */
define(function(require, exports, module) {
  'use strict';

  // Use Famo.us Engine
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  // Create new Contenxt
  var mainContext = Engine.createContext();

  // Create Surface object with content.
  // Custom Surface with properties like writing CSS.
  // but use camelCase instead of dashes
  // ex. textAlign (text-align), backgroundColor (background-color)

  // Size Surface
  // - [x, y] - x : width, y : height in pixels
  // - Default is inherits from parent context (match_parent in android)
  // - [undefined, 200] - height 200 pixels with width equal parent size.
  // - [200, undefined] - width 200 pixels with height equal parent size.
  // - [true, true] - auto size according to the content like wrap_content in android :)
  var firstSurface = new Surface({
    size: [200, 500],
    content: 'Hello Famo.us \m/',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#4473ee'
    }
  });

  // Exercise
  var mySurface = new Surface({
    size: [200, undefined],
    content: 'Chai Phonbopit',
    properties: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: '#fa5c4f',
      fontSize: '40px',
      borderRadius: '15px'
    }
  });

  // Set content on the fly.
  firstSurface.setContent('<h1>Awesome!!</h1>');

  // Add Surface to mainContext
  // mainContext.add(firstSurface);

  // Add mySurface to mainContext
  mainContext.add(mySurface);
});
