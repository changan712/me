'use strict';
//企业号
define(['app'], function (md) {
    md.service('qy', ['$resource', function ($resource) {
        return $resource('/app/qy/:field');
    }]);
});