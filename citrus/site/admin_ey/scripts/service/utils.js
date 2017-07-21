'use strict';

define(['app'], function (md) {
    md.factory('utils', [function () {
        return {
            getCorporation: function () {

                var url = location.href;

                if (/localhost:/.test(url)) {
                    return 'demo';
                } else {
                    var reg = /http:\/\/.*?\/(\w+)/;
                    return (reg.exec(url) && reg.exec(url)[1]) || 'demo';
                }
            },


            getHost: function () {
                var host = 'http://10.21.109.23/';
                var url = location.href;
                return (/localhost:/.test(url)) ? host : '/';
            },

            isLocal: function () {
                return /localhost:/.test(location.href)
            },

            isDomain: function () {
                return (/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/).test(location.host)
            },

            getUrlParam: function (name) {
                var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
                if (results == null) {
                    return null;
                }
                else {
                    return results[1] || 0;
                }
            }

        };
    }])
});


