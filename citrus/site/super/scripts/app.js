'use strict';
define([
    'angular',
    'ui-router',
    'ui-bootstrap',
    'angular-sanitize',
    'ui-select',
    'sticky',
    '_',
    'ngUnderScore',
    'ngResource',
    'highcharts-ng',
    'fileUpload',
    'colorpicker'
], function (angular) {
    return angular.module('app', ['ui.router', 'ngResource', 'ngSanitize', 'ui.bootstrap', 'ui.select', 'angularFileUpload', 'angular-underscore', 'sticky', 'highcharts-ng', 'colorpicker.module']);
});

