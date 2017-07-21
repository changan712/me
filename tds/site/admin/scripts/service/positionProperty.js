'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('positionProperty', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'position-properties/:id', {id: '@id'});
    }]);

});