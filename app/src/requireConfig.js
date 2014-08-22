/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond'
    }
});
// Require only file or multiple files.
require(['lesson4']);
// require(['lesson1', 'lesson2', 'lesson3']);
