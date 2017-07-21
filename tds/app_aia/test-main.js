var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

   /* paths: {
        ionic: '../../bower_components/ionic/release/js/ionic.bundle',
        ngResource: '../../bower_components/angular-resource/angular-resource.min',
        'fileUpload': '../../bower_components/angular-file-upload/dist/angular-file-upload.min',
        '_': '../../bower_components/underscore/underscore-min',
        'datePicker': '../../bower_components/ionic-datepicker/dist/ionic-datepicker.bundle.min'
    },
    shim: {
        ionic: {
            exports: 'ionic'
        },
        datePicker: ['ionic'],
        fileUpload: ['ionic'],
        ngResource: ['ionic']
    },
*/
    // dynamically load all test files
    deps: allTestFiles,

// we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
