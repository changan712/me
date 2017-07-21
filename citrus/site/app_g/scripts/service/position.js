'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('position', ['$resource', 'APIHOST',  function ($resource, APIHOST) {
        return $resource(APIHOST + 'job/:id', {id: '@id'});
    }]);

});