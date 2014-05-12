/**
 * Created by brizarda on 29/04/14.
 * JavaScript file to test the loading of the different
 * Javascript libraries and their compatibillity.
 */

require.config({
    paths: {
});

require([], function(){
    // TODO: define tests

    QUnit.load();
    QUnit.start();
});
