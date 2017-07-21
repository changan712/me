'use strict';

//用户管理
define(['app'], function (md) {
    md.service('user', ['$resource', function ($resource) {
        return $resource('/api/app/users/:id', {id: '@id'}, {
            importUser: {
                url: '/api/app/users/import',
                method: 'post',
                isArray: true
            },
            update: {
                method: 'put',
                isArray: true
            },

            getAll: {
                url: '/api/app/users?all=1',
                method: 'get',
                isArray: true
            },
            getPinyinList:{
                url: '/api/app/users/pinyin-list',
                method:'get'
            },

            getAtUserList: {
                url: '/api/app/users/at-user-list/:uid',
                method: 'get',
                isArray: true
            },
            //app 获取当前信息；
            getCurrentUserInfo: {
                url: '/api/app/users/info',
                method: 'get'
            },
            login: {
                url: '/api/app/user/test',
                method: 'get'
            }
        });
    }]);
});