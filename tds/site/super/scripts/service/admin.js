'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('admin', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'admin/:id', {id: '@id'},{
            getUser:{
                method:'GET',
                url:APIHOST+'admin/current'
            },
            logout:{
                method:'GET',
                url:APIHOST+'admin/logout'
            }
        });
    }]);
});