'use strict';

define(['app', 'service/constant'], function (md) {

    md.service('redPacket', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'redpack', {}, {
            getRule: {
                method: 'get',
                url: APIHOST + 'redpack/getrule'
            },
            setRule: {
                method: 'post',
                url: APIHOST + 'redpack/setrule'
            },
            summary: {
                url: APIHOST + 'redpack/summary',
                method: 'get'
            },
            getDetail: {
                method: 'get',
                url: APIHOST + 'redpack/:field'
            }
        });
    }]);
});