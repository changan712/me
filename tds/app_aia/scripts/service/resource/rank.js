'use strict';

define(['app'], function (md) {
    md.service('rank', ['$resource', function ($resource) {
        return $resource('/api/app/point/:field');
    }]);
});