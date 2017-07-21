'use strict';

//用户管理
define(['app'], function (md) {
    md.service('milestoneScore', ['$resource', function ($resource) {
        return $resource('/api/app/milestone-score/:id', {id: '@id'}, {});
    }]);
});