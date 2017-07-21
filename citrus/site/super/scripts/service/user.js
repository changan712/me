'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('user', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'users/:id', {id: '@id'}, {
            'update': { method:'PUT' },
            'image': {
                method:'POST',
                url:APIHOST+'companies/image'
            }
        });
    }]);

});