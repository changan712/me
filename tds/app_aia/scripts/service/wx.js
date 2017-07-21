'use strict';

define([
    'app',
    'service/utils',
    'service/log'
], function (md) {
    md.factory('wx', ['$q', '$http', 'utils','log', function ($q, $http, utils,log) {
        return {
            uploadImg: uploadImg,
            getLocation: getLocation,
            init: init
        };

        function init() {
            var defer = $q.defer();
            $http.get('/api/app/test/js-sign?url=' + encodeURIComponent(location.href)).success(function (conf_data) {
               // conf_data = {};
                wx.config({
                    debug: utils.isDebug(),
                    appId: conf_data['appId'],
                    timestamp: conf_data['timestamp'],
                    nonceStr: conf_data['noncestr'],
                    signature: conf_data['signature'],
                    jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'openLocation', 'getLocation']
                });
                wx.error(function (e) {
                    utils.isDebug() ? alert(JSON.stringify(e)) : console.log(e);
                    log('wx_config_error',e);
                   // $http.post('/api/app/test/log?corp_id=aia',{'wx_config_error':JSON.stringify(res)});
                    defer.reject(e);
                });
                wx.ready(function () {
                    defer.resolve({msg:'wxReady!'})
                })
            });
            return defer.promise;
        }

        function getLocation() {

            var defer = $q.defer();

            wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    defer.resolve(res)
                },
                fail: function (err) {
                    defer.reject(err);
                }
            });


            return defer.promise;
        }


        function uploadImg(ids) {
            var dupIds = angular.copy(ids);
            var defer = $q.defer();
            uploadAllImg(dupIds).then(function (res) {
                defer.resolve(res);
            }).catch(function (e) {

                defer.reject(e);
            });
            return defer.promise;
        }

        function uploadAllImg(ids) {
            var defer = $q.defer();
            var serverIds = [];
            uploadToWx(ids);
            function uploadToWx(ids) {

                if (ids.length) {
                    var id = ids.shift();

                    wx.uploadImage({
                        localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 0, // 默认为1，显示进度提示
                        success: function (res) {

                            serverIds.push(res.serverId);
                            uploadToWx(ids)
                        },
                        fail: function (e) {

                            defer.reject(e);
                        }
                    });
                } else {

                    defer.resolve(serverIds);
                }
            }

            return defer.promise;
        }

        /*  function postImgToServer(ids) {

         return $http.post('/api/app/test/download', {id_list: ids.join('|')});
         }*/


    }]);
});