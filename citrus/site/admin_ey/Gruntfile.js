module.exports = function (grunt) {
    // require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "./scripts/main.js",
                    optimize: "uglify",
                    name: "main",
                    out: "./scripts/main.min.js",
                    report:'min',
                    mangle: false
                }
            }
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Dev mode tasks
    grunt.registerTask('default', ['requirejs']);
}
