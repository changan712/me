'use strict';

define(['app', 'service/constant', 'service/user', 'service/corp'], function (md) {

    md.service('statistic', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST, user, corp) {
        return $resource(APIHOST + 'statistic', {}, {
            select:{
                method:'GET',
                url: APIHOST + 'statistic/select'
            },
            search:{
                method:'POST',
                url: APIHOST + 'statistic'
            },
            track:{
                method:'GET',
                url: APIHOST + 'statistic/trackuser',
                isArray: true
            },
            track_detail:{
                method:'GET',
                url: APIHOST + 'statistic/trackuserdetail',
            }
        });
    }]);
});