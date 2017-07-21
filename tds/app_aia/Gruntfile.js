module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['scripts/**/*.js', '!scripts/main.min.*'],
                tasks: ['requirejs'],
                options: {
                    debounceDelay: 250
                }
            }
        },

        requirejs: {

            compile: {
                options: {
                    mainConfigFile: "./scripts/main.js",
                    optimize: "uglify",
                    generateSourceMaps: true,
                    preserveLicenseComments: false,

                    name: "main",
                    out: "./scripts/main.min.js",
                    report: 'min',

                    mangle: false,
                    include: ['controller/app/feed/list', 'controller/app/feedProject/list']
                }
            }
        }

    });

    // Load plugins
    //grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Dev mode tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['requirejs']);
}
