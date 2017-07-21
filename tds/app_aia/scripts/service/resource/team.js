'use strict';

//用户管理
define(['app'], function (md) {
    md.service('team', ['$resource', function ($resource) {
        return $resource('/app/teams/:id', {id: '@id'}, {

            update: {
                method: 'put'
            }
        });
    }]);
});