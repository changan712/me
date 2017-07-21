'use strict';
define([
    'angular',
    'ui-router',
    'ui-bootstrap',
    'angular-sanitize',
    'ui-select',
    'ngCookies',
    'sticky',
    '_',
    'ngUnderScore',
    'ngResource',
    'highcharts-ng',
    'fileUpload'


], function (angular) {
    return angular.module('app', ['ui.router', 'ngResource','ngCookies', 'ngSanitize', 'ui.bootstrap', 'ui.select', 'angularFileUpload', 'angular-underscore', 'sticky', 'highcharts-ng']);
});

