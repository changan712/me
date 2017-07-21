'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('ref', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'references/:id', {id: '@id'}, {

            getHistoryList: {
                method:'GET',
                url: APIHOST + 'ref/history/:id'

            },

            'update': {
                method: 'PUT'
            }
        });
    }]);

});