'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resume', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'resumes/:id', {id: '@id'}, {
            'update': {
                method: 'PUT'
            },
            'preview': {
                method: 'GET',
                url: APIHOST + 'resumes/preview'
            }
        });
    }]);
});