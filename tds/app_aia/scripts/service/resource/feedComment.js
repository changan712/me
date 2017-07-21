'use strict';

//用户管理
define(['app'], function (md) {
    md.service('feedComment', ['$resource', function ($resource) {
        return $resource('/api/app/feed-comments/:id', {id: '@id'}, {

        });
    }]);
});