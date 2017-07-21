'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('com', [function () {
        return {
            getHost: function () {
                var host = 'http://10.21.109.23/';
                var url = location.href;
                return (/localhost:/.test(url)) ? host : '/';
            },
            getCorporation: function () {
                var url = location.href;

                if (/localhost:/.test(url)) {
                    return 'demo';
                } else {
                    var reg = /http:\/\/.*?\/(\w+)/;
                    return (reg.exec(url) && reg.exec(url)[1]) || 'demo';
                }
            }
        }

    }]);
});