'use strict';

define(['angular', 'app', 'service/alert'], function (angular, md) {
        md.factory('myInterceptor', ['$rootScope', 'alertService', function ($rootScope, alertService) {
                return {
                    request: function (config) {
                        config.headers = config.headers || {};

                        return config;
                    },
                    responseError: function (res) {
                        if (res.status == '401' || res.data.code == '401') {
                            alert("尚未登录");
                            location.href = 'login.html' + location.hash;
                            return res;
                        }


                        try {
                            if (res.config.method != 'GET') {
                                if (res.data && res.data.msg) {
                                    alertService.add(res.data.msg, 3000, 'danger');
                                    return $q.reject(res.data.msg);
                                } else {
                                    alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                                    return $q.reject('服务器错误请稍后再试');
                                }
                            } else {
                                return $q.reject(res);
                            }
                        } catch (e) {
                            alertService.add('服务器错误请稍后再试！', 3000, 'danger');
                            return $q.reject('服务器错误请稍后再试');
                        }
                    },

                    response: function (res) {


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
