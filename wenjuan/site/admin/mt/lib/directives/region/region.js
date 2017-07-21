'use strict';

define(['app'], function (md) {
    md.directive('region', [function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'lib/directives/region/region.html',
            require: '?ngModel',
            scope: {
                isShow: '=',
                maxLength: '=',
                name: '@'
            },
            link: function (scope, ele, attr, ngModel) {
                //  var c2 = [];
                if (!ngModel) return;
                var region = getData();
                scope.max = scope.maxLength || 5;
                scope.isShow = false;
                scope.error = false;
                scope.cc = region.common;
                scope.c1 = region.data;

                scope.result = [];


                ngModel.$render = function () {
                    if( ngModel.$modelValue){
                        scope.result = ngModel.$modelValue;
                    }
                };


                scope.$on('$destroy', function () {
                    ele.remove();
                    //scope.$destroy();
                });


                scope.$watch('result', function (n) {
                    if (n) {
                        _.each(scope.cc, function (item) {
                            item.active = false;
                        });
                        _.each(n, function (item) {
                            if (_.findWhere(scope.cc, item))
                                _.findWhere(scope.cc, item).active = true;
                        });
                        if (attr.required) {
                            ngModel.$setValidity('required', !!n.length);
                        }

                    }


                    // _.intersection(scope.cc, scope.result).active = false;
                }, true);


                scope.clickCc = function (item) {
                    if (_.findWhere(scope.result, item)) return;
                    if (scope.result.length >= scope.max) {
                        scope.error = true;
                        scope.onMaxLength && scope.onMaxLength();
                        return;
                    }
                    item.active = true;
                    scope.result.push(item);
                    ngModel.$setViewValue(scope.result);
                };

                scope.clickC1 = function (item) {
                    scope.c2 = item.child;
                    scope.c2Show = true;
                };


                scope.clickC2 = function (item) {
                    if (_.findWhere(scope.result, item)) return;
                    if (scope.result.length >= scope.max) {
                        scope.error = true;
                        scope.onMaxLength || scope.onMaxLength();
                        return;
                    }
                    item.active = true;
                    scope.result.push(item);
                    ngModel.$setViewValue(scope.result);

                };
                scope.closeC2 = function () {
                    scope.c2Show = false;
                    _.each(scope.c2, function (item) {
                        item.active = false;
                    })
                };

                scope.removeResult = function (item) {
                    var activeC2 = _.findWhere(scope.c2, item);
                    var activeCc = _.findWhere(scope.cc, item);
                    scope.result.splice(_.indexOf(scope.result, item), 1);
                    ngModel.$setViewValue(scope.result);
                    if (activeC2)
                        activeC2.active = false;
                    if (activeCc)
                        activeCc.active = false;
                    scope.error = false;
                };

                scope.hide = function () {
                    scope.isShow = false;
                    scope.error = false;
                    scope.closeC2();
                };

                scope.show = function () {
                    scope.isShow = true;
                };


                scope.ok = function () {
                    scope.hide();

                };

                scope.cancel = function () {
                    scope.hide();
                    scope.result = [];
                    scope.error = false;
                    _.each(scope.c2, function (item) {
                        item.active = false;
                    })

                    _.each(scope.cc, function (item) {
                        item.active = false;
                    })
                };


                function getC2() {

                    var item = _.findWhere(region, {active: true});
                    if (item)
                        return item.child;
                    return [];
                }

            }
        };


        function getData() {
            return {
                common: [
                    {"code": "010000", "label": "北京"},
                    {"code": "020000", "label": "上海"},
                    {"code": "030200", "label": "广州"},
                    {"code": "040000", "label": "深圳"},
                    {"code": "050000", "label": "天津"},
                    {"code": "060000", "label": "重庆"}
                ],
                data: [
                    {
                        "child": [{"code": "030200", "label": "广州"},
                            {"code": "040000", "label": "深圳"},
                            {"code": "030300", "label": "惠州"},
                            {"code": "030400", "label": "汕头"},
                            {"code": "030500", "label": "珠海"},
                            {"code": "030600", "label": "佛山"},
                            {"code": "030700", "label": "中山"},
                            {"code": "030800", "label": "东莞"},
                            {"code": "031400", "label": "韶关"},
                            {"code": "031500", "label": "江门"},
                            {"code": "031700", "label": "湛江"},
                            {"code": "031800", "label": "肇庆"},
                            {"code": "031900", "label": "清远"},
                            {"code": "032000", "label": "潮州"},
                            {"code": "032100", "label": "河源"},
                            {"code": "032200", "label": "揭阳"},
                            {"code": "032300", "label": "茂名"},
                            {"code": "032400", "label": "汕尾"},
                            {"code": "032600", "label": "梅州"},
                            {"code": "032700", "label": "开平"},
                            {"code": "032800", "label": "阳江"},
                            {"code": "032900", "label": "云浮"}],
                        "code": "030000",
                        "label": "广东省"
                    },

                    {
                        "child": [{"code": "070200", "label": "南京"},
                            {"code": "070300", "label": "苏州"},
                            {"code": "070400", "label": "无锡"},
                            {"code": "070408", "label": "宜兴市"},
                            {"code": "070409", "label": "江阴市"},
                            {"code": "070500", "label": "常州"},
                            {"code": "070506", "label": "金坛市"},
                            {"code": "070507", "label": "溧阳市"},
                            {"code": "070600", "label": "昆山"},
                            {"code": "070700", "label": "常熟"},
                            {"code": "070800", "label": "扬州"},
                            {"code": "070900", "label": "南通"},
                            {"code": "071000", "label": "镇江"},
                            {"code": "071100", "label": "徐州"},
                            {"code": "071200", "label": "连云港"},
                            {"code": "071300", "label": "盐城"},
                            {"code": "071400", "label": "张家港"},
                            {"code": "071600", "label": "太仓"},
                            {"code": "071800", "label": "泰州"},
                            {"code": "071900", "label": "淮安"},
                            {"code": "072000", "label": "宿迁"},
                            {"code": "072100", "label": "丹阳"},
                            {"code": "072300", "label": "泰兴"},
                            {"code": "072500", "label": "靖江"}],
                        "code": "070000",
                        "label": "江苏省"
                    },
                    {
                        "child": [{"code": "080200", "label": "杭州"},
                            {"code": "080300", "label": "宁波"},
                            {"code": "080307", "label": "慈溪市"},
                            {"code": "080308", "label": "余姚市"},
                            {"code": "080309", "label": "奉化市"},
                            {"code": "080400", "label": "温州"},
                            {"code": "080500", "label": "绍兴"},
                            {"code": "080600", "label": "金华"},
                            {"code": "080700", "label": "嘉兴"},
                            {"code": "080800", "label": "台州"},
                            {"code": "080900", "label": "湖州"},
                            {"code": "081000", "label": "丽水"},
                            {"code": "081100", "label": "舟山"},
                            {"code": "081200", "label": "衢州"},
                            {"code": "081400", "label": "义乌"},
                            {"code": "081600", "label": "海宁"}],
                        "code": "080000",
                        "label": "浙江省"
                    },
                    {
                        "child": [{"code": "090200", "label": "成都"},
                            {"code": "090210", "label": "都江堰市"},
                            {"code": "090211", "label": "彭州市"},
                            {"code": "090212", "label": "邛崃市"},
                            {"code": "090213", "label": "崇州市"},
                            {"code": "090300", "label": "绵阳"},
                            {"code": "090400", "label": "乐山"},
                            {"code": "090500", "label": "泸州"},
                            {"code": "090600", "label": "德阳"},
                            {"code": "090700", "label": "宜宾"},
                            {"code": "090800", "label": "自贡"},
                            {"code": "090900", "label": "内江"},
                            {"code": "091000", "label": "攀枝花"},
                            {"code": "091100", "label": "南充"},
                            {"code": "091200", "label": "眉山"},
                            {"code": "091300", "label": "广安"},
                            {"code": "091400", "label": "资阳"},
                            {"code": "091500", "label": "遂宁"},
                            {"code": "091600", "label": "广元"},
                            {"code": "091700", "label": "达州"},
                            {"code": "091800", "label": "雅安"},
                            {"code": "091900", "label": "西昌"},
                            {"code": "092000", "label": "巴中"},
                            {"code": "092100", "label": "甘孜"},
                            {"code": "092200", "label": "阿坝"},
                            {"code": "092300", "label": "凉山"}],
                        "code": "090000",
                        "label": "四川省"
                    },
                    {
                        "child": [{"code": "100200", "label": "海口"},
                            {"code": "100300", "label": "三亚"},
                            {"code": "100500", "label": "文昌"},
                            {"code": "100600", "label": "琼海"},
                            {"code": "100700", "label": "万宁"},
                            {"code": "100800", "label": "儋州"},
                            {"code": "100900", "label": "东方"},
                            {"code": "101000", "label": "五指山"},
                            {"code": "101100", "label": "定安"},
                            {"code": "101200", "label": "屯昌"},
                            {"code": "101300", "label": "澄迈"},
                            {"code": "101400", "label": "临高"}],
                        "code": "100000",
                        "label": "海南省"
                    },
                    {
                        "child": [{"code": "110200", "label": "福州"},
                            {"code": "110212", "label": "福清市"},
                            {"code": "110213", "label": "长乐市"},
                            {"code": "110300", "label": "厦门"},
                            {"code": "110400", "label": "泉州"},
                            {"code": "110500", "label": "漳州"},
                            {"code": "110600", "label": "莆田"},
                            {"code": "110700", "label": "三明"},
                            {"code": "110800", "label": "南平"},
                            {"code": "110900", "label": "宁德"},
                            {"code": "111000", "label": "龙岩"}],
                        "code": "110000",
                        "label": "福建省"
                    },
                    {
                        "child": [{"code": "120200", "label": "济南"},
                            {"code": "120210", "label": "章丘市"},
                            {"code": "120300", "label": "青岛"},
                            {"code": "120307", "label": "胶州市"},
                            {"code": "120308", "label": "即墨市"},
                            {"code": "120309", "label": "平度市"},
                            {"code": "120310", "label": "莱西市"},
                            {"code": "120400", "label": "烟台"},
                            {"code": "120500", "label": "潍坊"},
                            {"code": "120600", "label": "威海"},
                            {"code": "120700", "label": "淄博"},
                            {"code": "120800", "label": "临沂"},
                            {"code": "120900", "label": "济宁"},
                            {"code": "121000", "label": "东营"},
                            {"code": "121100", "label": "泰安"},
                            {"code": "121200", "label": "日照"},
                            {"code": "121300", "label": "德州"},
                            {"code": "121400", "label": "菏泽"},
                            {"code": "121500", "label": "滨州"},
                            {"code": "121600", "label": "枣庄"},
                            {"code": "121700", "label": "聊城"},
                            {"code": "121800", "label": "莱芜"}],
                        "code": "120000",
                        "label": "山东省"
                    },
                    {
                        "child": [{"code": "130200", "label": "南昌"},
                            {"code": "130300", "label": "九江"},
                            {"code": "130400", "label": "景德镇"},
                            {"code": "130500", "label": "萍乡"},
                            {"code": "130600", "label": "新余"},
                            {"code": "130700", "label": "鹰潭"},
                            {"code": "130800", "label": "赣州"},
                            {"code": "130900", "label": "吉安"},
                            {"code": "131000", "label": "宜春"},
                            {"code": "131100", "label": "抚州"},
                            {"code": "131200", "label": "上饶"}],
                        "code": "130000",
                        "label": "江西省"
                    },
                    {
                        "child": [{"code": "140200", "label": "南宁"},
                            {"code": "140300", "label": "桂林"},
                            {"code": "140400", "label": "柳州"},
                            {"code": "140500", "label": "北海"},
                            {"code": "140600", "label": "玉林"},
                            {"code": "140700", "label": "梧州"},
                            {"code": "140800", "label": "防城港"},
                            {"code": "140900", "label": "钦州"},
                            {"code": "141000", "label": "贵港"},
                            {"code": "141100", "label": "百色"},
                            {"code": "141200", "label": "河池"},
                            {"code": "141300", "label": "来宾"},
                            {"code": "141400", "label": "崇左"},
                            {"code": "141500", "label": "贺州"}],
                        "code": "140000",
                        "label": "广西"
                    },
                    {
                        "child": [{"code": "150200", "label": "合肥"},
                            {"code": "150211", "label": "巢湖市"},
                            {"code": "150300", "label": "芜湖"},
                            {"code": "150400", "label": "安庆"},
                            {"code": "150500", "label": "马鞍山"},
                            {"code": "150600", "label": "蚌埠"},
                            {"code": "150700", "label": "阜阳"},
                            {"code": "150800", "label": "铜陵"},
                            {"code": "150900", "label": "滁州"},
                            {"code": "151000", "label": "黄山"},
                            {"code": "151100", "label": "淮南"},
                            {"code": "151200", "label": "六安"},
                            {"code": "151400", "label": "宣城"},
                            {"code": "151500", "label": "池州"},
                            {"code": "151600", "label": "宿州"},
                            {"code": "151700", "label": "淮北"},
                            {"code": "151800", "label": "亳州"}],
                        "code": "150000",
                        "label": "安徽省"
                    },
                    {
                        "child": [{"code": "160200", "label": "石家庄"},
                            {"code": "160300", "label": "廊坊"},
                            {"code": "160400", "label": "保定"},
                            {"code": "160500", "label": "唐山"},
                            {"code": "160600", "label": "秦皇岛"},
                            {"code": "160700", "label": "邯郸"},
                            {"code": "160800", "label": "沧州"},
                            {"code": "160900", "label": "张家口"},
                            {"code": "161000", "label": "承德"},
                            {"code": "161100", "label": "邢台"},
                            {"code": "161200", "label": "衡水"}],
                        "code": "160000",
                        "label": "河北省"
                    },
                    {
                        "child": [{"code": "170200", "label": "郑州"},
                            {"code": "170208", "label": "巩义市"},
                            {"code": "170209", "label": "荥阳市"},
                            {"code": "170210", "label": "新密市"},
                            {"code": "170211", "label": "新郑市"},
                            {"code": "170212", "label": "登封市"},
                            {"code": "170300", "label": "洛阳"},
                            {"code": "170400", "label": "开封"},
                            {"code": "170500", "label": "焦作"},
                            {"code": "170600", "label": "南阳"},
                            {"code": "170700", "label": "新乡"},
                            {"code": "170800", "label": "周口"},
                            {"code": "170900", "label": "安阳"},
                            {"code": "171000", "label": "平顶山"},
                            {"code": "171100", "label": "许昌"},
                            {"code": "171200", "label": "信阳"},
                            {"code": "171300", "label": "商丘"},
                            {"code": "171400", "label": "驻马店"},
                            {"code": "171500", "label": "漯河"},
                            {"code": "171600", "label": "濮阳"},
                            {"code": "171700", "label": "鹤壁"},
                            {"code": "171800", "label": "三门峡"},
                            {"code": "171900", "label": "济源"}],
                        "code": "170000",
                        "label": "河南省"
                    },
                    {
                        "child": [{"code": "180200", "label": "武汉"},
                            {"code": "180300", "label": "宜昌"},
                            {"code": "180400", "label": "黄石"},
                            {"code": "180500", "label": "襄阳"},
                            {"code": "180600", "label": "十堰"},
                            {"code": "180700", "label": "荆州"},
                            {"code": "180800", "label": "荆门"},
                            {"code": "180900", "label": "孝感"},
                            {"code": "181000", "label": "鄂州"},
                            {"code": "181100", "label": "黄冈"},
                            {"code": "181200", "label": "随州"},
                            {"code": "181300", "label": "咸宁"},
                            {"code": "181400", "label": "仙桃"},
                            {"code": "181500", "label": "潜江"},
                            {"code": "181600", "label": "天门"},
                            {"code": "181700", "label": "神农架"},
                            {"code": "181800", "label": "恩施"}],
                        "code": "180000",
                        "label": "湖北省"
                    },
                    {
                        "child": [{"code": "190200", "label": "长沙"},
                            {"code": "190209", "label": "浏阳市"},
                            {"code": "190300", "label": "株洲"},
                            {"code": "190400", "label": "湘潭"},
                            {"code": "190500", "label": "衡阳"},
                            {"code": "190600", "label": "岳阳"},
                            {"code": "190700", "label": "常德"},
                            {"code": "190800", "label": "益阳"},
                            {"code": "190900", "label": "郴州"},
                            {"code": "191000", "label": "邵阳"},
                            {"code": "191100", "label": "怀化"},
                            {"code": "191200", "label": "娄底"},
                            {"code": "191300", "label": "永州"},
                            {"code": "191400", "label": "张家界"},
                            {"code": "191500", "label": "湘西"}],
                        "code": "190000",
                        "label": "湖南省"
                    },
                    {
                        "child": [{"code": "200200", "label": "西安"},
                            {"code": "200300", "label": "咸阳"},
                            {"code": "200400", "label": "宝鸡"},
                            {"code": "200500", "label": "铜川"},
                            {"code": "200600", "label": "延安"},
                            {"code": "200700", "label": "渭南"},
                            {"code": "200800", "label": "榆林"},
                            {"code": "200900", "label": "汉中"},
                            {"code": "201000", "label": "安康"},
                            {"code": "201100", "label": "商洛"},
                            {"code": "201200", "label": "杨凌"}],
                        "code": "200000",
                        "label": "陕西省"
                    },
                    {
                        "child": [{"code": "210200", "label": "太原"},
                            {"code": "210300", "label": "运城"},
                            {"code": "210400", "label": "大同"},
                            {"code": "210500", "label": "临汾"},
                            {"code": "210600", "label": "长治"},
                            {"code": "210700", "label": "晋城"},
                            {"code": "210800", "label": "阳泉"},
                            {"code": "210900", "label": "朔州"},
                            {"code": "211000", "label": "晋中"},
                            {"code": "211100", "label": "忻州"},
                            {"code": "211200", "label": "吕梁"}],
                        "code": "210000",
                        "label": "山西省"
                    },
                    {
                        "child": [{"code": "220200", "label": "哈尔滨"},
                            {"code": "220216", "label": "双城市"},
                            {"code": "220217", "label": "尚志市"},
                            {"code": "220218", "label": "五常市"},
                            {"code": "220300", "label": "伊春"},
                            {"code": "220400", "label": "绥化"},
                            {"code": "220500", "label": "大庆"},
                            {"code": "220600", "label": "齐齐哈尔"},
                            {"code": "220700", "label": "牡丹江"},
                            {"code": "220800", "label": "佳木斯"},
                            {"code": "220900", "label": "鸡西"},
                            {"code": "221000", "label": "鹤岗"},
                            {"code": "221100", "label": "双鸭山"},
                            {"code": "221200", "label": "黑河"},
                            {"code": "221300", "label": "七台河"},
                            {"code": "221400", "label": "大兴安岭"}],
                        "code": "220000",
                        "label": "黑龙江省"
                    },
                    {
                        "child": [{"code": "230200", "label": "沈阳"},
                            {"code": "230213", "label": "新民市"},
                            {"code": "230300", "label": "大连"},
                            {"code": "230307", "label": "瓦房店市"},
                            {"code": "230308", "label": "普兰店市"},
                            {"code": "230309", "label": "庄河市"},
                            {"code": "230313", "label": "长兴岛"},
                            {"code": "230400", "label": "鞍山"},
                            {"code": "230500", "label": "营口"},
                            {"code": "230600", "label": "抚顺"},
                            {"code": "230700", "label": "锦州"},
                            {"code": "230800", "label": "丹东"},
                            {"code": "230900", "label": "葫芦岛"},
                            {"code": "231000", "label": "本溪"},
                            {"code": "231100", "label": "辽阳"},
                            {"code": "231200", "label": "铁岭"},
                            {"code": "231300", "label": "盘锦"},
                            {"code": "231400", "label": "朝阳"},
                            {"code": "231500", "label": "阜新"}],
                        "code": "230000",
                        "label": "辽宁省"
                    },
                    {
                        "child": [{"code": "240200", "label": "长春"},
                            {"code": "240211", "label": "榆树市"},
                            {"code": "240212", "label": "九台市"},
                            {"code": "240213", "label": "德惠市"},
                            {"code": "240300", "label": "吉林"},
                            {"code": "240400", "label": "辽源"},
                            {"code": "240500", "label": "通化"},
                            {"code": "240600", "label": "四平"},
                            {"code": "240700", "label": "松原"},
                            {"code": "240800", "label": "延吉"},
                            {"code": "240900", "label": "白山"},
                            {"code": "241000", "label": "白城"},
                            {"code": "241100", "label": "延边"}],
                        "code": "240000",
                        "label": "吉林省"
                    },
                    {
                        "child": [{"code": "250200", "label": "昆明"},
                            {"code": "250214", "label": "安宁市"},
                            {"code": "250300", "label": "曲靖"},
                            {"code": "250400", "label": "玉溪"},
                            {"code": "250500", "label": "大理"},
                            {"code": "250600", "label": "丽江"},
                            {"code": "251000", "label": "红河州"},
                            {"code": "251100", "label": "普洱"},
                            {"code": "251200", "label": "保山"},
                            {"code": "251300", "label": "昭通"},
                            {"code": "251400", "label": "文山"},
                            {"code": "251500", "label": "西双版纳"},
                            {"code": "251600", "label": "德宏"},
                            {"code": "251700", "label": "楚雄"},
                            {"code": "251800", "label": "临沧"},
                            {"code": "251900", "label": "怒江"},
                            {"code": "252000", "label": "迪庆"}],
                        "code": "250000",
                        "label": "云南省"
                    },
                    {
                        "child": [{"code": "260200", "label": "贵阳"},
                            {"code": "260300", "label": "遵义"},
                            {"code": "260400", "label": "六盘水"},
                            {"code": "260500", "label": "安顺"},
                            {"code": "260600", "label": "铜仁"},
                            {"code": "260700", "label": "毕节"},
                            {"code": "260800", "label": "黔西南"},
                            {"code": "260900", "label": "黔东南"},
                            {"code": "261000", "label": "黔南"}],
                        "code": "260000",
                        "label": "贵州省"
                    },
                    {
                        "child": [{"code": "270200", "label": "兰州"},
                            {"code": "270300", "label": "金昌"},
                            {"code": "270400", "label": "嘉峪关"},
                            {"code": "270500", "label": "酒泉"},
                            {"code": "270600", "label": "天水"},
                            {"code": "270700", "label": "武威"},
                            {"code": "270800", "label": "白银"},
                            {"code": "270900", "label": "张掖"},
                            {"code": "271000", "label": "平凉"},
                            {"code": "271100", "label": "定西"},
                            {"code": "271200", "label": "陇南"},
                            {"code": "271300", "label": "庆阳"},
                            {"code": "271400", "label": "临夏"},
                            {"code": "271500", "label": "甘南"}],
                        "code": "270000",
                        "label": "甘肃省"
                    },
                    {
                        "child": [{"code": "280200", "label": "呼和浩特"},
                            {"code": "280300", "label": "赤峰"},
                            {"code": "280400", "label": "包头"},
                            {"code": "280700", "label": "通辽"},
                            {"code": "280800", "label": "鄂尔多斯"},
                            {"code": "280900", "label": "巴彦淖尔"},
                            {"code": "281000", "label": "乌海"},
                            {"code": "281100", "label": "呼伦贝尔"},
                            {"code": "281200", "label": "乌兰察布"},
                            {"code": "281300", "label": "兴安盟"},
                            {"code": "281400", "label": "锡林郭勒盟"},
                            {"code": "281500", "label": "阿拉善盟"}],
                        "code": "280000",
                        "label": "内蒙古"
                    },
                    {
                        "child": [{"code": "290200", "label": "银川"},
                            {"code": "290300", "label": "吴忠"},
                            {"code": "290400", "label": "中卫"},
                            {"code": "290500", "label": "石嘴山"},
                            {"code": "290600", "label": "固原"}],
                        "code": "290000",
                        "label": "宁夏"
                    },
                    {
                        "child": [{"code": "300200", "label": "拉萨"},
                            {"code": "300300", "label": "日喀则"},
                            {"code": "300400", "label": "林芝"},
                            {"code": "300500", "label": "山南"},
                            {"code": "300600", "label": "昌都"},
                            {"code": "300700", "label": "那曲"},
                            {"code": "300800", "label": "阿里"}],
                        "code": "300000",
                        "label": "西藏"
                    },
                    {
                        "child": [{"code": "310200", "label": "乌鲁木齐"},
                            {"code": "310300", "label": "克拉玛依"},
                            {"code": "310500", "label": "伊犁"},
                            {"code": "310600", "label": "阿克苏"},
                            {"code": "310700", "label": "哈密"},
                            {"code": "310800", "label": "石河子"},
                            {"code": "310900", "label": "阿拉尔"},
                            {"code": "311000", "label": "五家渠"},
                            {"code": "311100", "label": "图木舒克"},
                            {"code": "311200", "label": "昌吉"},
                            {"code": "311300", "label": "阿勒泰"},
                            {"code": "311400", "label": "吐鲁番"},
                            {"code": "311500", "label": "塔城"},
                            {"code": "311600", "label": "和田"},
                            {"code": "311700", "label": "克孜勒苏柯尔克孜"},
                            {"code": "311800", "label": "巴音郭楞"},
                            {"code": "311900", "label": "博尔塔拉"}],
                        "code": "310000",
                        "label": "新疆"
                    },
                    {
                        "child": [{"code": "320200", "label": "西宁"},
                            {"code": "320300", "label": "海东"},
                            {"code": "320400", "label": "海西"},
                            {"code": "320500", "label": "海北"},
                            {"code": "320600", "label": "黄南"},
                            {"code": "320700", "label": "海南"},
                            {"code": "320800", "label": "果洛"},
                            {"code": "320900", "label": "玉树"}],
                        "code": "320000",
                        "label": "青海省"
                    },
                    {"child": [{"code": "330000", "label": "香港"}], "code": "330000", "label": "香港"},
                    {"child": [{"code": "340000", "label": "澳门"}], "code": "340000", "label": "澳门"},
                    {"child": [{"code": "350000", "label": "台湾"}], "code": "350000", "label": "台湾"}]
            }
        }

    }]);
});

