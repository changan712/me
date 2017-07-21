'use strict';

define(['angular', 'app', 'service/values'], function (angular, md) {
    md.filter('positionStatus', function () {
        var config = {
            1: '招聘进行中',
            0: '招聘关闭'
        };

        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }

        }
    });

    md.filter('exp', ['exp', function (expService) {
        return function (input) {
            if (input)
                return _.findWhere(expService, {code: input}).label;
            else
                return input;
        }
    }]);
    md.filter('salary', ['salary', function (salaryService) {

        return function (input) {
            if (input)
                return _.findWhere(salaryService, {code: input}).label;
            else
                return input;
        }
    }]);

    md.filter('edu', ['edu', function (eduService) {
        return function (input) {
            if (input)
                return _.findWhere(eduService, {code: input}).label;
            return input;
        }
    }]);


    md.filter('positionReleaseTime', function () {
        var config = {
            '0': '不限',
            '7': '一周内',
            '30': '一月内',
            '90': '三月内',
            '180': '半年内'
        };

        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }

        }
    });

    md.filter('posTag', function () {
        var config = {
            'urgent': '急',
            'hot': '热'
        };
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return ''
            }

        }
    });

    md.filter('posProp', function () {
        var config = {
            1: '社会招聘',
            2: '校园招聘'

        };
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }

        }
    });

    md.filter('greeting', function () {
        return function (input) {
            var hour = parseInt(input);

            if (hour >= 0 && input < 5) {
                return "凌晨好";
            } else if (hour >= 5 && input < 12) {
                return "上午好"
            } else if (hour >= 12 && input < 13) {
                return "中午好"
            } else if (hour >= 13 && input < 19) {
                return "下午好"
            } else if (hour >= 19 && input < 24) {
                return "晚上好"
            }

        }
    });

    md.filter('sex', function () {
        var sexConf = {
            female: 'ion-female',
            male: 'ion-male'
        };

        var sexTxtConf = {
            female: '女',
            male: '男'
        };

        return function (input, type) {
            if (type == 0) {
                return sexTxtConf[input];
            } else {
                return sexConf[input];
            }

        }
    });
    md.filter('myDate', function () {
        return function (input) {
            if (input) {

                var time = new Date(input).getTime(),
                    now = new Date().getTime(),
                    dt = now - time;

                if (2 * 24 * 60 * 60 * 1000 > dt && dt >= 24 * 60 * 60 * 1000) {
                    return '前天';
                }
                else if (2 * 24 * 60 * 60 * 1000 > dt && dt >= 24 * 60 * 60 * 1000) {
                    return '昨天';
                } else if (24 * 60 * 60 * 1000 > dt && dt >= 60 * 60 * 1000) {
                    return Math.round(dt / (60 * 60 * 1000)) + '小时前'
                } else if (60 * 60 * 1000 > dt && dt >= 60 * 1000) {
                    return Math.round(dt / (60 * 1000)) + '分钟前'
                }
                else if (60 * 1000 > dt && dt >= 1000) {
                    return Math.round(dt / 1000) + '秒前'
                }
                else {
                    return input;
                }
            } else {
                return '未知时间'
            }
        }
    });

});

