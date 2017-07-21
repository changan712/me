'use strict';

define(['app'], function (md) {
    md.service('project', ['$resource', function ($resource) {
        return $resource('/api/app/project/:id', {id: '@id'}, {

        });
    }]);
});