'use strict';

define(['app'], function (md) {
    md.service('location', ['$resource', function ($resource) {
        return $resource('/api/hr/location/:id', {id: '@id'}, {
            update:{
                method:'put'
            }
        });
    }]);
});