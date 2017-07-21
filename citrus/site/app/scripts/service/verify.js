'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('verify', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/company/verify', {
        });
    }]);
});