'use strict';

define(['app', 'service/alert', 'service/tip', 'service/wx'], function (md) {
        md.factory('myInterceptor', ['$rootScope', '$location', '$timeout', '$injector', '$q', 'alertService', function ($rootScope, $location, $timeout, $injector, $q, alertService, wxUser) {
                var wxId = '';
                return {
                    request: function (res) {
                        if (!wxId) {
                            wxId = $injector.get('wxUser').getUser().weixin_unionid;
                        }
                        res.headers = res.headers || {};
                        res.headers['wxId'] = wxId;

                        if (res.method != 'GET') {
                            var loading = $injector.get('$ionicLoading');
                            loading.show({delay: 500});
                        }
                        return res;
                    },
                    responseError: function (res) {
                        console.log(res);
                        var loading = $injector.get('$ionicLoading');
                        try {
                            if (res.config.method != 'GET') {
                                loading.hide();
                                if (res && res.data) { //&& res.data.message
                                    var data = angular.isArray(res.data) ? res.data[0] : res.data;
                                    if (data.message) {
                                        alertService.add(data.message, 3000, 'danger');
                                        return $q.reject(data.message);
                                    }

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
                        if (res && res.method != 'GET') {
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
