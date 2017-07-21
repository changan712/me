'use strict';

define(['app', 'service/constant', 'service/user', 'service/corp'], function (md) {

    md.service('position', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST, user, corp) {
        return $resource(APIHOST + 'positions/:id', {id: '@id',status:'open'}, {
            'update': {
                method: 'PUT'
            }
        });
    }]);

});