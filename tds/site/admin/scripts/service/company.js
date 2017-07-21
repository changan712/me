'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('company', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'company/:id', {id: '@id'}, {
            'update': {
                method: 'PUT',
                url: APIHOST + 'company/image'
            },
            'image': {
                method: 'PUT',
                url: APIHOST + 'companies/image'
            }
        });
    }]);

});
