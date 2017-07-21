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


    md.filter('source', function () {
        var config = {
            '51job': '前程无忧',
            'liepin': '猎聘',
            'zhaopin': '智联招聘',
            'manual': '新建简历',
            'local': '本地上传'
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

     md.filter('catImg', function () {
         var config = {
             '软件开发': 'image/i-cat-code.png',
             '游戏开发': 'image/i-cat-game.png',
             '美术类': 'image/i-cat-art.png',
             '产品类': 'image/i-cat-product.png',
             '运营类': 'image/i-cat-op.png'
         };
 
         return function (input) {
             if (config[input]) {
                 return config[input];
             }
         }
     });


});

