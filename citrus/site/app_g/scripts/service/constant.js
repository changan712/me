'use strict';

define(['app'], function (md) {
    var host = 'http://10.21.100.237/';
    md.constant({
        APIHOST: getHost() + getCorporation() + '/api/',
        COMPANY: getCorporation()
    });

    function getHost() {
        var url = location.href;
        return (/localhost:/.test(url)) ? host : '/';
    }

    function getCorporation() {
        var url = location.href;

        if (/localhost:/.test(url)) {
            return 'jingle';
        } else {
            var reg = /http:\/\/.*?\/(\w+)/;
            return (reg.exec(url) && reg.exec(url)[1]) || 'jingle';
        }
    }

});