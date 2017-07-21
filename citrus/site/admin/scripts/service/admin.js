'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('admin', ['$resource', 'apiHost', function ($resource, apiHost) {
        return $resource(apiHost + 'user/:method/:id', {id: '@id', method: '@method'}, {

        });
    }]);
});