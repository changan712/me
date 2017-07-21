'use strict';
//企业号
define(['app'], function (md) {
    md.service('devPlanComment', ['$resource', function ($resource) {
        return $resource('/api/app/development-comment/:id', {}, {
            update: {
                method: 'put'
            }
        });
    }]);
});