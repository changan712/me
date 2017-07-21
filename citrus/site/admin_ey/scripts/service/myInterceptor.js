'use strict';

define(['angular', 'app', 'service/alert', 'service/com'], function (angular, md) {
        md.factory('myInterceptor', ['$rootScope', '$q', '$injector', 'alertService', 'com', function ($rootScope, $q, $injector, alertService, com) {
                return {
                    request: function (config) {
                        config.headers = config.headers || {};

                        return config;
                    },
                    responseError: function (res) {

                        if (res.status == '401') {
                            location.href = com.getHost() + com.getCorporation() + '/admin_ey/login.html' + location.hash;
                            return res;
                        }

                        try {
                            if (res.config.method != 'GET') {
                                if (res.data && res.data.message) {
                                    alertService.add(res.data.message, 3000, 'danger');
                                    return $q.reject(res.data.message);
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
