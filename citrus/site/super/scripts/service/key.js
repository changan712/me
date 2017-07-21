'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('key', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'keys/:id', {id: '@id'}, {
            'update': { method:'PUT' }
        });
    }]);

});