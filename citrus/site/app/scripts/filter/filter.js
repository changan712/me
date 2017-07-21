'use strict';

define(['app'], function (md) {
    md.filter('positionStatus', function () {
        var config = {
            '0': '招聘进行中',
            '1': '招聘关闭'
        };

        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }

        }
    });
    md.filter('styleMenu', function () {
        var config = {
            '1': 'style-dark',
            '2': 'style-bright'
        };
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return ''
            }

        }
    });

    md.filter('posProperty', function () {
        var config = {
            '1': '社会招聘',
            '2': '校园招聘'
        };

        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }

        }
    });

    md.filter('sex', function () {
        var sexConf = {
            'FEMALE': 'ion-female',
            'MALE': 'ion-male'
        };

        var sexTxtConf = {
            'FEMALE': '女',
            'MALE': '男'
        };

        return function (input, type) {
            if (type == 0) {
                return sexTxtConf[input];
            } else {
                return sexConf[input];
            }

        }
    });


    md.filter('source', function () {
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
            'chinahr': {
                label: '中华英才网',
                img: 'images/icyc.png'
            },
            '58': {
                label: '58同城',
                img: 'images/ic58.png'
            },
            'highpin': {
                label: '卓聘',
                img: 'images/ichp.png'
            },


            'manual': {
                label: '新建简历'
            }
        };

        return function (input, isImg) {
            if (isImg) {
                return config[input].img;
            } else {
                return config[input].label;
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


    md.filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
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

