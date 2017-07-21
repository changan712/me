'use strict';

define(['app'], function (md) {
    md.service('notice', ['$resource', function ($resource) {
        return $resource('/api/app/notice/:id', {}, {
            getUnreadCount: {
                method: 'get',
                url: '/api/app/notice/unread-count'
            },
            like:{
                method:'post',
                url:'/api/app/notice-like/:action'
            },
            comment:{
                method:'post',
                url:'/api/app/notice-comment'
            },
            getComments:{
                method:'get',
                isArray:true,
                url:'/api/app/notice-comment'
            }
        });
    }]);
});