'use strict';

define(['app'], function (md) {
    md.service('common', ['$resource', function ($resource) {
        return $resource('/api/app/common/:field', {});
    }]);
});