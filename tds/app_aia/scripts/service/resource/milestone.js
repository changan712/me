'use strict';

//用户管理
define(['app'], function (md) {
    md.service('milestone', ['$resource', function ($resource) {
        return $resource('/api/app/milestone/:id', {id: '@id'}, {

        });
    }]);
});