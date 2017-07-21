'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resume', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/resumes/:id', {id: '@id'}, {
            upload: {
                method: 'POST',
                url: APIHOST + '/app/resumes/upload'
            },
            ref: {
                method: 'POST',
                url: APIHOST + '/app/resumes/ref'
            },
            edit:{
                method: 'PUT'
            },

            send:{
                method: 'POST',
                url: APIHOST + '/app/resumes'
            },
            import:{
                method: 'POST',
                url: APIHOST + '/app/resumes/import'
            }

        });
    }]);
});