'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('company', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'companies/:id', {id: '@id'}, {
            'update': { method:'PUT' },
            'image': {
                method:'POST',
                url:APIHOST+'companies/image'
            }
        });
    }]);

});