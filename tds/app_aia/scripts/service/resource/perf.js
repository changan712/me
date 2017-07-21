'use strict';

define(['app'], function (md) {
    md.service('perf', ['$resource', function ($resource) {
        return $resource('/api/app/perf/:id', {}, {
            update: {
                method: 'put'
            }

        });
    }]);
});