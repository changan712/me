'use strict';

define(['app','service/constant'], function (md) {
    md.service('talent',['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST+'talent/:id', {id:'@id'}, {
            'update':{
                method: 'PUT'
            }
        })
    }])
});
