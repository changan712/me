'use strict';

define(['app'], function (md) {

    md.constant({
        APIHOST: getHost() + getCorporation(),
        COMPANY: getCorporation()
    });

    function getHost() {
        var localHost = 'http://10.21.109.23/';
        var url = location.href;
        return (/localhost:/.test(url)) ? localHost : '/';
    }

    function getCorporation() {
        var url = location.href;

        if (/localhost:/.test(url)) {
            return 'demo';
        } else {
            var reg = /http:\/\/.*?\/(\w+)/;
            return (reg.exec(url) && reg.exec(url)[1]) || 'demo';
        }
    }

});