'use strict';

define(['app','service/constant'], function (md) {
    md.service('talentLevel',['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST+'talent-level/:id', {id:'@id'}, {
            'update':{
                method: 'PUT'
            }
        })
    }])
});
