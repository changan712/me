'use strict';

define(['app', 'service/alert', 'service/tip'], function (md) {
        md.factory('myInterceptor', ['$rootScope', '$location', '$timeout', '$injector', '$q', 'alertService', function ($rootScope, $location, $timeout, $injector, $q, alertService) {


                return {
                    request: function (res) {

                        if (res.method != 'GET') {
                            var loading = $injector.get('$ionicLoading');
                            loading.show({delay: 500});
                        }

                        return res;
                    },
                    responseError: function (res) {
                        var loading = $injector.get('$ionicLoading');

                        try {
                            if (res.config.method != 'GET') {
                                loading.hide();
                                if (res.data && res.data.msg) {
                                    alertService.add(res.data.msg, 3000, 'danger');
                                    return $q.reject(res.data.msg);
                                } else {
                                    alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                                    return $q.reject('服务器错误请稍后再试');
                                }
                            }
                        } catch (e) {
                            loading.hide();
                            alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                            return $q.reject('服务器错误请稍后再试');
                        }
                    },

                    response: function (res) {
                        if (res&&res.method != 'GET') {
                            var loading = $injector.get('$ionicLoading');
                            loading.hide();
                            //loading.hide();
                        }
                        return res;
                    }
                };
                function getInfo() {
                    if (JSON.parse(localStorage.getItem('user')).userInfo && JSON.parse(localStorage.getItem('user')).userInfo.hasOwnProperty('token')) {
                        return JSON.stringify(JSON.parse(localStorage.getItem('user')).userInfo);
                    } else {
                        return JSON.stringify(user);
                    }
                }
            }]
        );
    }
);
