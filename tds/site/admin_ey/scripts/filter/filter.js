'use strict';

define(['angular', 'app', 'service/values'], function (angular, md) {


    md.filter('positionStatus', function () {
        var config = {
            'OPEN': '招聘进行中',
            'CLOSED': '招聘关闭'
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
            if (_.findWhere(expService, {code: input}))
                return _.findWhere(expService, {code: input}).label;
        }
    }]);
    md.filter('salary', ['salary', function (salaryService) {
        return function (input) {
            if (_.findWhere(salaryService, {code: input}))
                return _.findWhere(salaryService, {code: input}).label;
        }
    }]);

    md.filter('edu', ['edu', function (eduService) {
        return function (input) {
            if (_.findWhere(eduService, {code: input}))
                return _.findWhere(eduService, {code: input}).label;
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


    md.filter('cv_source', function () {
        var config = {
            '51job': {
                label: '前程无忧',
                img: 'images/ic51.png'
            },
            'liepin': {
                label: '猎聘',
                img: 'images/iclp.png'
            },
            'zhaopin': {
                label: '智联招聘',
                img: 'images/iczp.png'
            },
            'dajie': {
                label: '大街',
                img: 'images/icdj.png'
            },
            'linkedin': {
                label: 'Linkedin',
                img: 'images/iclk.png'
            },
            'm91': {
                label: '魅力91',
                img: 'images/icm91.png'
            },
            'yjs': {
                label: '应届生',
                img: 'images/icyjs.png'
            },
            'manual': {
                label: '新建简历'
            },
            'referral': {
                label: '简历推荐'
            }
        };

        return function (input, isImg) {
            if (isImg) {
                return config[input] && config[input].img;
            } else {
                return config[input] && config[input].label;
            }

        }
    });

    md.filter('posProp', function () {
        var config = {
            'SOCIAL': '社会招聘',
            'CAMPUS': '校园招聘'

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
            FEMALE: 'ion-female',
            MALE: 'ion-male'
        };

        var sexTxtConf = {
            FEMALE: '女',
            MALE: '男'
        };

        return function (input, type) {
            if (type == 0) {
                return sexConf[input];
            } else {
                return sexTxtConf[input];
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

