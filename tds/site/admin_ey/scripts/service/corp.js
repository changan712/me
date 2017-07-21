'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('corp', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        /* return $resource(apiHost + 'job/:method/:id', {id: '@id',method:'@method'});*/
        return {
            corp_name:'jingle',
            id:10086
        }
    }]);
});