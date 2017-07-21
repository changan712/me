'use strict';

define(['app', 'service/alert'], function (md) {
        md.factory('myInterceptor', ['$rootScope', '$location', 'alertService', function ($rootScope, $location, alertService) {
                return {
                    request: function (config) {
                        config.headers = config.headers || {};
                        //config.headers.Authorization = '1111';
                        return config;

                    },
                    responseError: function (res) {
                        if (res.data) {
                            res.data.msg && alertService.add(res.data.msg, 5000, 'danger');
                        } else {
                            alertService.add('服务器错误请稍后再试！', 5000, 'danger');
                        }


                        return res;


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
