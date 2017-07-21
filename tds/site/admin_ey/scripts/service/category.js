'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('category', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST) {
        return $resource(APIHOST + 'categories/:id', {id: '@id'}, {

            edit: {
                method: 'PUT'
            }
        });
    }]);

});