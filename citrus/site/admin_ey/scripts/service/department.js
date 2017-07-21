'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('department', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST) {
        return $resource(APIHOST + 'departments/:id', {id: '@id'}, {

            edit: {
                method: 'PUT'
            }
        });
    }]);

});