'use strict';

define(['app', 'service/constant','service/user','service/corp'], function (md) {
    md.service('general', ['$resource', 'APIHOST','user','corp', function ($resource, APIHOST,user,corp) {
        return $resource(APIHOST + 'general/:key', {key: '@key'});
    }]);
});