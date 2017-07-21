'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resume', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'resume/wx/:id', {id: '@id'}, {
            upload: {
                method: 'POST',
                url: APIHOST + 'resume/upload'
            },
            ref: {
                method: 'POST',
                url: APIHOST + 'resume/ref'
            },
            send:{
                method: 'POST',
                url: APIHOST + 'resume/send'
            },
            hasSend:{
                method:'GET',
                url: APIHOST + 'resume/send'
            },
            import:{
                method: 'POST',
                url: APIHOST + 'resume/import'

            }


        });
    }]);
});