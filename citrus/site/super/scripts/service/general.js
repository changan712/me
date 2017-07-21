'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('general', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'general/:key', {key: '@key'});
    }]);
});