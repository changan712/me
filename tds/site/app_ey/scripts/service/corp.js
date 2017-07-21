'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('corp', ['$resource', 'APIHOST', 'COMPANY', function ($resource, APIHOST, COMPANY) {
        return $resource(APIHOST + '/app/company?url_name=' + COMPANY);
    }]);
});