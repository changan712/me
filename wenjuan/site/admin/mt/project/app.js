'use strict';
define([
    'ui-router',
    'ui-bootstrap',
    'angular-checklist-model',
    'ngResource',
    'ui-select',
    'sticky',
    'fileUpload'
], function () {
    return angular.module('app', ['ui.router', 'ngResource', 'ngSanitize', 'ui.bootstrap', 'ui.select', 'angularFileUpload','sticky', 'checklist-model', 'textAngular']);
});

