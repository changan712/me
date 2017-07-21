'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resume', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/app/resumes/:id', {id: '@id'}, {
            upload: {
                method: 'POST',
                url: APIHOST + '/app/resume/upload'
            },
            ref: {
                method: 'POST',
                url: APIHOST + '/app/resume/ref'
            },
            edit: {
                method: 'POST',
                url: APIHOST + '/app/resume/update2/:id'
            },

            send: {
                method: 'POST',
                url: APIHOST + '/app/resume'
            },
            import: {
                method: 'POST',
                url: APIHOST + '/app/resume/import'
            },
            //保存问卷调查
            saveQuestionnaire: {
                method: 'POST',
                url: APIHOST + '/app/resume/questionaire'
            },
            wxStore: {
                method: 'POST',
                url: APIHOST + '/app/wx/storage'
            }

        });
    }]);
});