'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('rank', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST, {}, {
            data: {
                method: 'GET',
                url: APIHOST + '/app/wx/rank'
            }
        });
    }]);

});