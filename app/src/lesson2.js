// Lesson 2 : Learn how to position elements in Famo.us

/* globals define */
define(function(require, exports, module) {
  'use strict';

  // Use Famo.us Engine
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  // Use StateModifier and Transform 
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  // Create new Contenxt
  var mainContext = Engine.createContext();

/*  createSurface();
  createModifiedSurface();


  function createSurface() {
    var surface = new Surface({
      size: [200, 200],
      content: 'Surface',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#fa5c4f'
      }
    });

    mainContext.add(surface);
  }

  function createModifiedSurface() {
    var surface = new Surface({
      size: [200, 200],
      content: 'Modified Surface',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#67fa4f'
      }
    });

    // Create StateModifier
    var stateModifier = new StateModifier({
      // .translate(x, y, z)
      // number of x, y and z translation
      transform: Transform.translate(300, 300, 0)
    });

    // Add StateModifier between context and surface
    mainContext.add(stateModifier).add(surface);
  }*/

  /* ============================================
     Chaning Modifiers
     ============================================ */
  var translateModifierOne = new StateModifier({
    transform: Transform.translate(200, 0, 0)
  });

  var rotateModifierOne = new StateModifier({
    transform: Transform.rotateZ(Math.PI / 4)
  });

  var redSurface = new Surface({
    size: [100, 100],
    content: 'Red',
    properties: {
      textAlign: 'center',
      backgroundColor: 'red',
      padding: '10px'
    }
  });


  mainContext
    .add(translateModifierOne)
    .add(rotateModifierOne)
    .add(redSurface);
});
