'use strict';
define(['app', 'service/constant'], function (md) {

    md.service('reference', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/reference', {}, {
            getDetail: {
                method:'get',
                url: APIHOST + '/app/reference/get-detail',
                isArray : true
            }
        });
    }]);
});