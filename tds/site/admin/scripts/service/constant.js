'use strict';

define(['app'], function (md) {

    md.constant({
        APIHOST: getHost() + getCorporation() + '/admin/'
    });

    function getHost() {
        var host = 'http://10.21.109.23/';
        var url = location.href;
        return (/localhost:/.test(url)) ? host : '/';
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