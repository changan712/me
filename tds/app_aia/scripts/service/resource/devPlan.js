'use strict';
//企业号
define(['app'], function (md) {
    md.service('devPlan', ['$resource', function ($resource) {
        return $resource('/api/app/development-plan/:id', {}, {
            update: {
                method: 'put'
            }

        });
    }]);
});