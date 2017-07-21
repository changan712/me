'use strict';

define(['app'], function (md) {
    md.service('feedback', ['$resource', function ($resource) {
        return $resource('/api/app/feedback/:id', {id: '@id'}, {

        });
    }]);
});