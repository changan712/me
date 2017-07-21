'use strict';

define(['app'], function (md) {

    md.filter('aiaMetal', function () {

        var config = {
            "35":'images/m_1.png',
            "36":'images/m_2.png',
            "37":'images/m_3.png',
            "38":'images/m_4.png',
            "39":'images/m_5.png',
            "40":'images/m_6.png'
        };
        var configDev = {
            "2":'images/m_1.png',
            "3":'images/m_2.png',
            "4":'images/m_3.png',
            "5":'images/m_4.png',
            "6":'images/m_5.png',
            "7":'images/m_6.png'
        };
        return function (input) {
            if (input) {
                return config[input]
            }
        }
    });

    md.filter('getCName',function () {
        return function (input) {
            if(input){
                var arr = input.split('/');
                return arr[arr.length-1];
            }

        }
    });

    md.filter('splitByN', function () {
        return function (input) {
            if (input) {
                return input.split(/\n/g)
            }
        }
    });

    md.filter('findWhere', function () {
        return function (input, data, key, keyToShow) {
            if (angular.isArray(data)) {
                var filterData = {};
                filterData[key] = input;
                var dataFound = _.findWhere(data, filterData);
                return keyToShow ? (dataFound && dataFound[keyToShow]) : dataFound;

            } else {
                return null;
            }
        }
    });

    md.filter('starr', function () {
        var config = {
            'situation': '情景',
            'task': '任务',
            'action': '行动',
            'result': '结果',
            'reflection': '思考'
        };
        return function (input) {
            if (input) {
                return config[input];
            }
        }
    });

    md.filter('aiaPercent', function () {
        //var track = [[0, 25], [25, 50], [50, 75], [75, 100]];

        return function (input) {

            if (0 <= input && input < 25) {
                return '规划';
            } else if (25 <= input && input < 50) {
                return '设计';
            } else if (50 <= input && input < 75) {
                return '试点';
            } else if (75 <= input && input <= 100) {
                return '实施';
            }
        }
    });

    md.filter('milestone', function () {
        var config = {
            'time': '节省时间',
            'cost': '节省成本',
            'quality': '提高质量',
            'other': '其它'
        };
        return function (input) {
            if (input) {
                return config[input];
            }
        }
    });

    md.filter('sex', function () {
        var sexIconConf = {
            '2': 'ion-female bg-pink',
            '1': 'ion-male bg-blue'
        };

        var sexTxtConf = {
            '2': '女',
            '1': '男'
        };

        return function (input, type) {
            if (type == 'icon') {
                return sexIconConf[input];
            } else {
                return sexTxtConf[input];
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
        return function (input, total, from) {
            total = parseInt(total);

            for (var i = (from || 0); i <= total; i++)
                input.push(i);
            return input;
        };
    });

    md.filter('msgType', function () {
        var config = {
            'feed': '新feed',
            'comment': '评论',
            'like': '点赞'
        };

        return function (input) {
            return config[input];
        }
    });

    md.filter('durationType', function () {
        var config = {
            '1': '小时',
            '2': '天'
        };
        return function (input) {
            return config[input];
        }
    });

    md.filter('dataTransform', function () {
        return function (input) {
            if (input) {
                return dateTransform(input);
            }
        }
    });

    md.filter('perfStep', function () {

        var config = {
            0: 'Goal Setting',
            1: 'HR Verify',
            2: 'Self Review',
            3: 'Supervisor Review',
            4: 'Summary',
            5: 'Sign off',
            6: 'Complete'
        };

        return function (input) {
            return config[input];
        }
    });


    md.filter('myDate', ['$filter', function ($filter) {

        return function (input, strategy) {
            if (input) {
                var ms = dateTransform(input).getTime();
                if (!strategy) {
                    return getDataString(ms, $filter);
                } else {
                    return strategy(ms);
                }
            } else {
                return '未知时间'
            }
        };

        function getTimeDuringFromNow(day) {
            var date = new Date();
            var targetDay = new Date(date.setDate(date.getDate() + day));
            var during = [];

            during[0] =  (new Date(targetDay.getFullYear() + '/' + (targetDay.getMonth()+1)  + '/' + targetDay.getDate())).getTime();
            during[1] = during[0] + (24 * 60 * 60 * 1000);

            return during;
        }

        function getDataString(ms, $filter) {
            var during1 = getTimeDuringFromNow(-1),
                during2 = getTimeDuringFromNow(-2);

            var now = new Date().getTime(),
                dt = now - ms;

            //如果小于24小时
            if (dt < 24 * 60 * 60 * 1000) {
                if (dt >= 60 * 60 * 1000) {
                    return Math.floor(dt / (60 * 60 * 1000)) + '小时前'
                } else if (60 * 60 * 1000 > dt && dt >= 60 * 1000) {
                    return Math.floor(dt / (60 * 1000)) + '分钟前'
                } else if (60 * 1000 > dt && dt >= 1000) {
                    return Math.floor(dt / 1000) + '秒前'
                } else if (dt < 1000) {
                    return '刚刚';
                }
            } else {


                if(during1[1]>ms&&ms>=during1[0]){
                    return '昨天';
                }else if(during2[1]>ms&&ms>=during2[0]){
                    return '前天';
                }else{
                    return $filter('date')(ms, 'yyyy-MM-dd')
                }
            }
        }

    }]);

    function dateTransform(dateStr) {
        // dateStr="2011-08-03 09:15:11"; returned from mysql timestamp/datetime field
        var a = dateStr.split(" ");
        var d = a[0].split("-");
        var t = a[1].split(":");
        return new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
    }

});



