'use strict';

//用户管理
define(['app'], function (md) {
    md.service('feedLike', ['$resource', function ($resource) {
        return $resource('/api/app/feed-likes/:id', {id: '@id'}, {});
    }]);
});