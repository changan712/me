'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('position', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/positions/:id', {id: '@id',status:'open'}, {
            hasApplied: {
                method: 'GET',
                url: APIHOST + '/app/positions/applied'
            },
            apply: {
                method: 'POST',
                url: APIHOST + '/app/positions/apply'
            },

            rec: {
                method: 'POST',
                url: APIHOST + '/app/positions/recommend'
            }
        });
    }]);

});