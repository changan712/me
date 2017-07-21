'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resumeAdmin', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + '/admin/resumes', {}, {
            rec: {
                method: 'POST',
                url: APIHOST + '/admin/resumes/recommend'
            }
        });
    }]);
});