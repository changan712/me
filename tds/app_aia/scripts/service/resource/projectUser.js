'use strict';

define(['app'], function (md) {
    md.service('projectUser', ['$resource', function ($resource) {
        return $resource('/api/app/project-user/:id', {id: '@id'}, {});
    }]);
});