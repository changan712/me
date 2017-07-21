'use strict';
//企业号
define(['app'], function (md) {
    md.service('carousel', ['$resource', function ($resource) {
        return $resource('/api/app/carousel/:id');
    }]);
});