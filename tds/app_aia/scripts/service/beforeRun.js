'use strict';

define([
    'app',
    'service/resource/user',
    'service/resource/message',
    'service/utils'
], function (md) {
    md.factory('beforeRun', ['$rootScope', '$q', 'utils', 'user','message', function ($rootScope, $q, utils, user,message) {

        var uid = utils.getUrlParam('uid') || 1;
        var corpId = utils.getCorpId();
        return {
            getUser: function () {
                //统一返回promise;
                var defer = $q.defer();
                if ($rootScope.currentUser) {
                    defer.resolve($rootScope.currentUser);
                    return defer.promise;
                }

                if (!corpId) {
                    alert('公司信息错误');
                    defer.reject('公司信息错误');
                    return defer.promise;

                }

                return user.getCurrentUserInfo().$promise.then(function (res) {
                    //console.log(res.toJSON());
                    return res.toJSON();
                }, function (e) {
                    if (utils.isWXBrowser()) {

                        //alert('获取用户信息失败');
                        //虚拟登录后获取假的用户信息；
                        location.href = "/api/app/user/app-entry?corp_id=" + corpId;
                        /*return user.login({id: uid}).$promise.then(function () {
                         return user.getCurrentUserInfo().$promise;
                         })*/
                    } else {

                        return user.login({id: uid, corp_id: corpId}).$promise.then(function () {
                            return user.getCurrentUserInfo().$promise;
                        })
                    }
                });


            },
            getTabsConfig: function () {
                return ['app.index', 'app.perf.overview', 'app.feed.list','app.notice.list','app.others'];
            },
            getMsgCount:function(){
                return message.count({corp_id:corpId}).$promise;
            }
        };


    }]);
});