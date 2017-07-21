'use strict';

define([
    'app',
    '../services/alert',
    '../services/utils'
], function (md) {
    md.factory('myInterceptor', ['$rootScope', '$q', '$injector', '$location','alertService','utils',
        function ($rootScope, $q, $injector, $location, alertService, utils) {
            return {
                request: function(res){
                    res.headers['corpId'] = utils.getCorpId();
                    res.headers['custom'] = utils.getCustom();
                    return res;
                },
                responseError: function (res) {
                    //var user = $injector.get('user');
                    var $state = $injector.get('$state');
                    if (res.status == '401') {
                        var msg = (res.data && res.data.message) || '请先登录';
                        //删除user;
                        //user.delete();
                        $state.go('login');
                        //alertService.add(msg, 3000, 'danger');
                        return $q.reject(res);
                    }
                    try {
                        if (res.config.method == 'GET') {
                            //处理来自接口的get错误;
                            if (isFromAPI(res)) {
                                return errorHandler(res);
                            }
                        } else {
                            return errorHandler(res);
                        }

                    } catch (e) {
                        alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                        return $q.reject(res);
                    }
                }
            };

            function isFromAPI(res) {
                var url = res.config.url,
                    pathReg = /(.*?)\//,
                    result = pathReg.exec(url)[1];
                return result != 'views';
            }

            function errorHandler(res) {

                if (res && res.data) { //&& res.data.message
                    var data = angular.isArray(res.data) ? res.data[0] : res.data;
                    if (data.message) {
                        alertService.add(data.message, 3000, 'danger');
                        return $q.reject(res);
                    }

                } else {
                    alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                    return $q.reject(res);
                }
            }

        }
    ]);
});
