'use strict';

define(['app', 'service/constant', 'service/user', 'service/corp'], function (md) {

    md.service('statistic', ['$resource', 'APIHOST', 'user', 'corp', function ($resource, APIHOST, user, corp) {
        return $resource(APIHOST + 'statistic', {}, {
            pool:{
                method:'POST',
                url: APIHOST + 'statistic/pool'              //全部公司汇总统计
            },
            select:{
                method: 'GET',
                url: APIHOST + 'statistic/select'             //获取全部公司数据
            }
        });
    }]);
});