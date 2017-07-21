'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('corp', ['$resource', 'APIHOST', 'COMPANY', function ($resource, APIHOST) {

        return $resource(APIHOST + '/app/company',{},{
            brief:{
                method:'get',
                url:APIHOST + '/app/company/brief'
            }
        });
    }]);
});