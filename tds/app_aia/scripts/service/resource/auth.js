'use strict';

define(['app'], function (md) {
    md.service('auth', ['$resource', function ($resource) {
        return $resource('/api/hr/auth/:action',{});
    }]);
});