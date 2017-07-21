'use strict';

//用户管理
define(['app'], function (md) {
    md.service('feed', ['$resource', function ($resource) {
        return $resource('/api/app/feeds/:id', {id: '@id'}, {
            update: {
                method: 'put'
            },
            score: {
                method: 'get',
                url: '/api/app/feeds/score/:id',
                isArray: true
            }
        });
    }]);
});