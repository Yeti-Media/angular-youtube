module.exports = function(grunt) {
  // load all grunt tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    karma: {
      options: {
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        files: [
          "bower_components/angular/angular.js",
          "bower_components/angular-mocks/angular-mocks.js",
          "lib/angular-youtube.js",
          "lib/services/*.js",
          "test/specs/**/*.js"
        ]
      },
      single: {
        singleRun: true
      },
      develop: {
        autoWatch: true
      }
    }
  });

  grunt.registerTask("test", ["karma:single"]);
  grunt.registerTask("develop", ["karma:develop"]);
}