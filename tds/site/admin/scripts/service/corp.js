'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('corp', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'company/:id', {}, {
            updateBrief: {
                method: 'put',
                url: APIHOST + 'company/brief'
            },

            getBrief: {
                method: 'get',
                url: APIHOST + 'company/brief'
            }
        });

    }]);
});