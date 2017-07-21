'use strict';

define(['app','service/constant'], function (md) {
    md.service('talentFunc',['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST+'talent-func/:id', {id:'@id'}, {
            'update':{
                method: 'PUT'
            }
        })
    }])
});
