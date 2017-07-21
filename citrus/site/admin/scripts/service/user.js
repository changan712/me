'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('user', ['$resource', 'APIHOST', function ($resource, APIHOST) {
         return $resource(APIHOST + 'user/:id', {id: '@id'},{
             getUser:{
                 method:'GET',
                 url:APIHOST+'user'
             },
             logout:{
                 method:'POST',
                 url:APIHOST+'user/logout'
             }
         });
    }]);
});