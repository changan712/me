'use strict';

//企业价值观
define(['app'], function (md) {
    md.service('valueType', ['$resource', function ($resource) {
        return $resource('/api/app/value-types/:id', {id: '@id'}, {
        });
    }]);
});