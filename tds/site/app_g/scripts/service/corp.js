'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('corp', ['$resource', 'APIHOST', 'COMPANY', function ($resource, APIHOST, COMPANY) {
        return $resource(APIHOST + 'user/info?url_name=' + COMPANY);
    }]);
});