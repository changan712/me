'use strict';
define(['app', 'service/constant'], function (md) {

    md.service('redPacket', ['$resource', 'APIHOST', function ($resource, APIHOST) {
        return $resource(APIHOST + 'redpack', {}, {
            sendRedPack: {
                method: 'post',
                url: APIHOST + '/app/wx/redpack'
            },
            getCount: {
                method: 'get',
                url: APIHOST + '/app/wx/redpackcount'
            },
            getRule:{
                method:'get',
                url: APIHOST + '/app/wx/getrule'
            }
        });
    }]);
});