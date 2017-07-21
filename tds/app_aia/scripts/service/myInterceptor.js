'use strict';

define(['app', 'service/alert', 'service/tip', 'service/wx', 'service/user', 'service/utils'], function (md) {
        md.factory('myInterceptor', ['$rootScope', '$location', '$timeout', '$injector', '$q', 'alertService', 'utils',
            function ($rootScope, $location, $timeout, $injector, $q, alertService, utils) {
                var wxId = '';
                var screen_msg = 0;
                return {
                    request: function (req) {
                        req.headers = req.headers || {};
                        req.headers['wxId'] = wxId;
                        req.headers['corpId'] = utils.getCorpId();
                       // req.headers['custom'] = utils.getCustom();

                        if (req.method != 'GET') {
                            var loading = $injector.get('$ionicLoading');
                            loading.show({delay: 500});
                        }else if(!/^\/api/.test(req.url)) {
                            var args = 'v='+global_version;
                            req.url += (req.url.indexOf('?') === -1 ? '?' : '&') + args;
                        }
                        return req;
                    },
                    responseError: function (res) {
                        var user = $injector.get('user'),
                            $state = $injector.get('$state');

                        var loading = $injector.get('$ionicLoading');
                        if (res.status == '401') {
                            if(!screen_msg){
                                screen_msg = 1;
                                var msg = (res.data && res.data.message) || '获取用户信息失败';
                                loading.hide();
                                alertService.add(msg, 3000, 'danger');
                                if (utils.isWXBrowser()) {
                                    //虚拟登录后获取假的用户信息；
                                    location.href = "/api/app/user/app-entry?corp_id=" + utils.getCorpId();
                                }
                            }
                            return $q.reject(res);
                        }

                        try {
                            if (res.headers()['alarm'] == 1) {
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
