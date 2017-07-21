'use strict';

define(['app', 'service/constant', 'service/user', 'service/corp'], function (md) {

    md.service('rank', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST, user, corp) {
        return $resource(APIHOST + 'rank', {}, {
            search:{
                method:'POST',
                url: APIHOST + 'rank/index',
                isArray: true
            }
        });
    }]);
});