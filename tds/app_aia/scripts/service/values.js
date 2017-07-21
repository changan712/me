'use strict';

define(['app'], function (md) {
    md.service('edu', function () {
        return ["初中", "高中", "中专", "大专", "本科", "硕士", "博士", "博士后", "其它"];
    });
    md.service('salary', function () {
        return [
            {
                "label": "面议",
                "code": "0"
            },
            {
                "label": "1500\u4ee5\u4e0b",
                "code": "1"
            },
            {
                "label": "1500-1999",
                "code": "2"
            },
            {
                "label": "2000-2999",
                "code": "3"
            },
            {
                "label": "3000-4499",
                "code": "4"
            },
            {
                "label": "4500-5999",
                "code": "5"
            },
            {
                "label": "6000-7999",
                "code": "6"
            },
            {
                "label": "8000-9999",
                "code": "7"
            },
            {
                "label": "10000-14999",
                "code": "8"
            },
            {
                "label": "15000-19999",
                "code": "9"
            },
            {
                "label": "20000-24999",
                "code": "10"
            },
            {
                "label": "25000-29999",
                "code": "11"
            },
            {
                "label": "30000-39999",
                "code": "12"
            },
            {
                "label": "40000-49999",
                "code": "13"
            },
            {
                "label": "50000-59999",
                "code": "14"
            },
            {
                "label": "60000-69999",
                "code": "15"
            },
            {
                "label": "70000--99999",
                "code": "16"
            },
            {
                "label": "100000\u4ee5\u4e0a",
                "code": "17"
            }
        ]
    });

    md.service('exp', function () {
        return [
            {
                label: "不限",
                code: "0"
            },
            {
                label: "无经验",
                code: "1"
            },
            {
                label: "应届生",
                code: "2"
            },
            {
                label: "1年以下",
                code: "3"
            },
            {
                label: "1-3年",
                code: "4"
            },
            {
                label: "3-5年",
                code: "5"
            },
            {
                label: "5-7年",
                code: "6"
            },
            {
                label: "8-9年",
                code: "7"
            },
            {
                label: "10年以上",
                code: "8"
            }
        ]
    });

    md.service('schools', function () {
        return [
            {
                name: '对外经济贸易大学',
                province: '北京'
            },
            {
                name: '中央财经大学',
                province: '北京'
            },
            {
                name: '中国人民大学',
                province: '北京'
            },
            {
                name: '首都经济贸易大学',
                province: '北京'
            },
            {
                name: '北京工商大学',
                province: '北京'
            },
            {
                name: '北京林业大学',
                province: '北京'
            },
            {
                name: '北京大学',
                province: '北京'
            },
            {
                name: '北京邮电大学',
                province: '北京'
            },
            {
                name: '北京交通大学',
                province: '北京'
            },
            {
                name: '中国农业大学',
                province: '北京'
            },
            {
                name: '北京化工大学',
                province: '北京'
            },
            {
                name: '北京理工大学',
                province: '北京'
            },
            {
                name: '北京工业大学',
                province: '北京'
            },
            {
                name: '北京航空航天大学',
                province: '北京'
            },
            {
                name: '中央民族大学',
                province: '北京'
            },
            {
                name: '北京科技大学',
                province: '北京'
            },
            {
                name: '北京师范大学',
                province: '北京'
            },
            {
                name: '清华大学',
                province: '北京'
            },
            {
                name: '北京外国语大学',
                province: '北京'
            },
            {
                name: '中国科学院',
                province: '北京'
            },
            {
                name: '中国政法大学',
                province: '北京'
            },
            {
                name: '中国传媒大学',
                province: '北京'
            },
            {
                name: '北京中医药大学',
                province: '北京'
            },
            {
                name: '中国科学院研究生院',
                province: '北京'
            },
            {
                name: '首都医科大学',
                province: '北京'
            },
            {
                name: '华北电力大学',
                province: '河北省'
            },
            {
                name: '天津财经大学',
                province: '天津市'
            },
            {
                name: '南开大学',
                province: '天津市'
            },
            {
                name: '天津大学',
                province: '天津市'
            },
            {
                name: '辽宁大学',
                province: '辽宁省'
            },
            {
                name: '东北大学',
                province: '辽宁省'
            },
            {
                name: '沈阳医科大学',
                province: '辽宁省'
            },
            {
                name: '中国医科大学',
                province: '辽宁省'
            },
            {
                name: '东北财经大学',
                province: '辽宁省'
            },
            {
                name: '大连理工大学',
                province: '辽宁省'
            },
            {
                name: '大连海事大学',
                province: '辽宁省'
            },
            {
                name: '山东财经大学',
                province: '山东省'
            },
            {
                name: '山东大学',
                province: '山东省'
            },
            {
                name: '青岛大学',
                province: '山东省'
            },
            {
                name: '中国海洋大学',
                province: '山东省'
            },
            {
                name: '青岛科技大学',
                province: '山东省'
            },
            {
                name: '中国石油大学',
                province: '山东省'
            },
            {
                name: '西安交通大学',
                province: '陕西省'
            },
            {
                name: '西北大学',
                province: '陕西省'
            },
            {
                name: '西北工业大学',
                province: '陕西省'
            },
            {
                name: '西安电子科技大学',
                province: '陕西省'
            },
            {
                name: '西北农林科技大学',
                province: '陕西省'
            },
            {
                name: '兰州大学',
                province: '甘肃省'
            },
            {
                name: '吉林大学',
                province: '吉林省'
            },
            {
                name: '东北师范大学',
                province: '吉林省'
            },
            {
                name: '新疆大学',
                province: '新疆省'
            },
            {
                name: '哈尔滨工业大学',
                province: '黑龙江省'
            },
            {
                name: '哈尔滨工程大学',
                province: '黑龙江省'
            },
            {
                name: '上海财经大学',
                province: '上海'
            },
            {
                name: '上海大学',
                province: '上海'
            },
            {
                name: '东华大学',
                province: '上海'
            },
            {
                name: '华东理工大学',
                province: '上海'
            },
            {
                name: '同济大学',
                province: '上海'
            },
            {
                name: '上海交通大学',
                province: '上海'
            },
            {
                name: '华东师范大学',
                province: '上海'
            },
            {
                name: '复旦大学',
                province: '上海'
            },
            {
                name: '上海外国语大学',
                province: '上海'
            },
            {
                name: '华东政法大学',
                province: '上海'
            },
            {
                name: '上海对外经贸大学',
                province: '上海'
            },
            {
                name: '浙江大学',
                province: '浙江省'
            },
            {
                name: '宁波诺丁汉大学',
                province: '浙江省'
            },
            {
                name: '西南财经大学',
                province: '四川省'
            },
            {
                name: '四川大学',
                province: '四川省'
            },
            {
                name: '西南交通大学',
                province: '四川省'
            },
            {
                name: '成都信息工程学院',
                province: '四川省'
            },
            {
                name: '电子科技大学',
                province: '四川省'
            },
            {
                name: '西南石油大学',
                province: '四川省'
            },
            {
                name: '河海大学',
                province: '江苏省'
            },
            {
                name: '南京师范大学',
                province: '江苏省'
            },
            {
                name: '南京大学',
                province: '江苏省'
            },
            {
                name: '南京审计大学',
                province: '江苏省'
            },
            {
                name: '东南大学',
                province: '江苏省'
            },
            {
                name: '南京航空航天大学',
                province: '江苏省'
            },
            {
                name: '南京邮电大学',
                province: '江苏省'
            },
            {
                name: '南京理工大学',
                province: '江苏省'
            },
            {
                name: '南京农业大学',
                province: '江苏省'
            },
            {
                name: '中国药科大学',
                province: '江苏省'
            },
            {
                name: '苏州大学',
                province: '江苏省'
            },
            {
                name: '江南大学',
                province: '江苏省'
            },
            {
                name: '郑州大学',
                province: '河南省'
            },
            {
                name: '湖南大学',
                province: '湖南省'
            },
            {
                name: '中南大学',
                province: '湖南省'
            },
            {
                name: '合肥工业大学',
                province: '安徽省'
            },
            {
                name: '中国科学技术大学',
                province: '安徽省'
            },
            {
                name: '广东外语外贸大学',
                province: '广东省'
            },
            {
                name: '中山大学',
                province: '广东省'
            },
            {
                name: '暨南大学',
                province: '广东省'
            },
            {
                name: '华南理工大学',
                province: '广东省'
            },
            {
                name: '广东商学院',
                province: '广东省'
            },
            {
                name: '华南农业大学',
                province: '广东省'
            },
            {
                name: '华南师范大学',
                province: '广东省'
            },
            {
                name: '广东工业大学',
                province: '广东省'
            },
            {
                name: '南方医科大学',
                province: '广东省'
            },
            {
                name: '深圳大学',
                province: '广东省'
            },
            {
                name: '广东医学院',
                province: '广东省'
            },
            {
                name: '厦门大学',
                province: '福建省'
            },
            {
                name: '福州大学',
                province: '福建省'
            },
            {
                name: '云南大学',
                province: '云南省'
            },
            {
                name: '其他',
                province: '其他'
            }
        ]
    });
});


