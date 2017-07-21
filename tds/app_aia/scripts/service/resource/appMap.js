'use strict';

define(['app'], function (md) {

    //网站 静态映射表；
    md.service('appMap', ['$resource', function ($resource) {
        return $resource('/js/:field/:key');
    }]);
});