// Karma configuration
// Generated on Tue May 31 2016 11:21:38 GMT+0800 (中国标准时间)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            '../../bower_components/angular/angular.min.js',
            '../../bower_components/ionic/release/js/ionic.bundle.js',
          /*  '../../bower_components/angular-route/angular-route.js',
            '../../bower_components/ui-router/release/angular-ui-router.js',
            '../../bower_components/angular-resource/angular-resource.js',
*/
            /*'../../bower_components/angular-resource/angular-resource.min.js',*/


            /* '../../bower_components/angular-file-upload/dist/angular-file-upload.min.js',*/
           /* '../../bower_components/underscore/underscore-min.js',*/
            /* '../../bower_components/ionic-datepicker/dist/ionic-datepicker.bundle.min.js',*/
            '../../bower_components/angular-mocks/angular-mocks.js',


             /* {pattern: '../../bower_components/!**!/!*.js', included: false},*/
            {pattern: 'scripts/**/*.js', included: false},
            {pattern: 'test/**/*.js', included: false},
            'test-main.js'
        ],


        // list of files to exclude
        exclude: [
            'scripts/main.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
