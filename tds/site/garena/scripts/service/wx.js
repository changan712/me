'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('wxUser', ['$rootScope', '$http', '$location', '$q', 'APIHOST', 'COMPANY', function ($rootScope, $http, $location, $q, APIHOST, COMPANY) {
        /* return $resource(apiHost + 'job/:method/:id', {id: '@id',method:'@method'});*/

        var local = 1;
        if (location.host.indexOf('jingle.cn') != -1) {
            local = 0;
        }

        function getUrlParam(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            }
            else {
                return results[1] || 0;
            }
        }

        return {

            getUser: function (callback) {
                var data = JSON.parse(localStorage.getItem('wxUser'));

                return {
                    weixin_unionid: data.openid,
                    weixin_nickname: data.nickname
                }
            },


            setShare: function (title, desc, link, img_link) {

                if (local) return;
                var share_params = {
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: img_link,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    }
                };

                wx.onMenuShareTimeline(share_params);
                wx.onMenuShareAppMessage(share_params);
                wx.onMenuShareQQ(share_params);
                wx.onMenuShareWeibo(share_params);
                wx.onMenuShareQZone(share_params);

            },

            getConfig :function(){
                return share_params
            },
            bindEvent: function () {


            }

        };

    }]);
});
