module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          debug: false,
          port: 9000,
          protocol: 'http'
        }
      },
      servertest: {
        options: {
          keepalive: false,
          debug: false,
          port: 9000,
          protocol: 'http'
        }
      }
    },
    qunit: {
      all: ['test/*.html']
    }
  });

  grunt.registerTask('test', ['connect:servertest', 'qunit']);

  // Load Connect
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
};