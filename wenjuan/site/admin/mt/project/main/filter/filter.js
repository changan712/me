'use strict';

define([
    'app',
    'main/filter/values'
], function (md) {

    md.filter('interviewFeedback', [function () {
        var config = {
            "1": "合格",
            "2": "不合格",
            "3": "待定",
            "4": "缺席"
        };
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }
        }
    }]);

    md.filter('posProperty', ['mapPosProperty', function (config) {
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }
        }
    }]);

    md.filter('posStatus', ['mapPosStatus', function (config) {
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return '未知'
            }
        }
    }]);

    md.filter('recruitType', [function () {
        var config = {
            'PUBLIC': '公开招聘',
            'PRIVATE': '隐秘招聘'
        };
        return function (input) {
            return config[input];
        }
    }]);

    /**
     * 根据headhunter_status 返回icon和 颜色；
     * @param [key] {String}
     */
    md.filter('resumeHeadhunterStatus', function () {
        return function (input, key) {
            var data = {};
            switch (input) {
                case 'ACCEPT':
                    data = {
                        icon: 'icon-right',
                        bgColor: 'success',
                        label: '接受'
                    };
                    break;
                case 'NOACCEPT':
                case 'NOOFFER':
                    data = {
                        icon: 'icon-cross',
                        label: '拒绝',
                        bgColor: 'danger'
                    };
                    break;

                case 'NEW':
                default:
                    data = {
                        icon: 'icon-clock',
                        bgColor: 'info',
                        label: '待定'
                    };
                    break;

            }

            return data[key || icon];

        }
    });

    md.filter('resumeStatus', ['mapResumeStatus', function (config) {
        var newConfig = {};
        //
        angular.forEach(config, function (value, key) {

            switch (key) {
                case 'ACCEPT':
                case 'NEW':
                case 'SCREEN':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'info',
                        icon: 'icon-timer'
                    };
                    break;

                case 'NOACCEPT':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'fail',
                        icon: 'icon-cross'
                    };
                    break;
                case 'NOOFFER':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'fail',
                        icon: 'icon-cross'
                    };
                    break;
                case 'INTERVIEW':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'warning',
                        icon: 'icon-people2'
                    };
                    break;
                case 'OFFER':
                case 'SEND_OFFER':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'success',
                        icon: 'icon-msg-open'
                    };
                    break;

                case 'BOARD':
                case 'GET_OFFER':
                    newConfig[key] = {
                        label: value,
                        bgColor: 'success',
                        icon: 'icon-msg-open'
                    };
                    break;


            }
        });

        return function (input, key) {
            key = key || 'label';
            if (newConfig[input]) {
                return newConfig[input][key];
            } else {
                return '未知'
            }
        }
    }]);


    md.filter('edu', ['viewEdu', function (config) {
        return function (input) {
            if (_.findWhere(config, {code: input})){
                return _.findWhere(config, {code: input}).label;
            }
            return '[未知]';
        }
    }]);

    md.filter('exp', ['viewExp', function (config) {
        return function (input) {
            if (_.findWhere(config, {code: input})){
                return _.findWhere(config, {code: input}).label;
            }
            return '[未知]';
        }
    }]);

    md.filter('salary', ['viewSalary', function (viewSalary) {
        var config = viewSalary;
        return function (input) {
            if (_.findWhere(config, {code: input}))
                return _.findWhere(config, {code: input}).label;

        }
    }]);

    md.filter('posCharacter', function () {
        var config = {
            'urgent': '急',
            'hot': '热',
            'project': '项'
        };
        return function (input) {
            if (config[input]) {
                return config[input];
            } else {
                return ''
            }

        }
    });

    md.filter('posTag', function () {
        var config = {
            'fulltime': '全职招聘',
            'parttime': ' 兼职招聘',
            'practice': ' 实习'
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

    md.filter('gender', function () {
        var sexConf = {
            2: 'ion-female',
            1: 'ion-male'
        };

        var sexTxtConf = {
            2: '女',
            1: '男',
            UNKNOWN: '[未知]'
        };

        return function (input, type) {
            if (!type) {
                if(!sexConf[input]){
                    return '[未知]';
                }
                return sexTxtConf[input];
            } else {
                return sexConf[input];
            }

        }
    });

    /*md.filter('role', function () {
        return function (input, key) {
            var data = {};
            switch (input) {
                case 'SUPER/ADMIN':
                    data = {
                        src: 'images/'
                    };
                    break;
                case 'NOACCEPT':
                case 'NOOFFER':
                    data = {
                        icon: 'icon-cross',
                        label: '拒绝',
                        bgColor: 'danger'
                    };
                    break;

                case 'NEW':
                default:
                    data = {
                        icon: 'icon-clock',
                        bgColor: 'info',
                        label: '待定'
                    };
                    break;

            }

            return data[key || icon];

        }
    });*/

    /**
     * @filter range
     * @return {String}
     * 在ng-repeat 在没有数据情况下循环 时使用
     * 如循环5次：(ng-repeat item in 5|range)
     */
    md.filter('range', function () {
        return function (n,from) {
            var res = [];
            for (var i = from||0; i < n; i++) {
                res.push(i);
            }
            return res;
        };

    });

    /**
     * @filter limitString 根据中英文不同截取字符串
     * @limit {Number} 截取字数 中文长度为2其它字符为1
     * @return {String}
     * 不推荐大量使用，请尽量使用css解决问题
     */
    md.filter('limitString', [function () {
        return function (input, limit) {
            if (!input) return;
            if (getStrLength(input) <= limit) {
                return input;
            }
            return cutString(input, limit) + '...';
        };


        function getStrLength(str) {
            var realLength = 0;
            var len = str.length;
            var charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) {
                    realLength += 1;
                } else {
                    realLength += 2;
                }
            }
            return realLength;
        }

        function cutString(str, limit) {
            var currentLength = 0;
            var len = str.length;
            var charCode = -1;
            for (var i = 0; i < len; i++) {
                if (currentLength < limit) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128) {
                        currentLength += 1;
                    } else {
                        // 如果是中文则长度加2
                        currentLength += 2;
                    }
                } else {
                    str = str.substring(0, i);
                }
            }
            return str;
        }


    }]);

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
                } else if (dt < 1000) {
                    return '刚刚';
                }
                else {
                    return input;
                }
            } else {
                return '未知时间'
            }
        }
    });

    md.filter('eventType', ['eventTypeMap',
        function(map){
            return function(input){
                return map[input];
            }
        }
    ]);
    md.filter('eventFormat', ['eventFormatMap',
        function(map){
            return function(params, type){
                if(map[type]){
                    return map[type](params);
                }
                return '未知操作';
            }
        }
    ])
});

