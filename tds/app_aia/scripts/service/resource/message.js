'use strict';

define(['app'], function (md) {
    md.service('message', ['$resource', function ($resource) {
        return $resource('/api/app/message/:id', {id: '@id'}, {
            count:{
                url:'/api/app/message/count',
                method:'get'
            },
            visited:{
                url:'/api/app/message/visited',
                method:'post'
            }
        });
    }]);
});