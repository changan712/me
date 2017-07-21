'use strict';

define(['app'], function (md) {
    md.service('edu', function () {
        return [
            {"label": "不限", "code": 0},
            {"label": "初中", "code": 1},
            {"label": "高中", "code": 2},
            {"label": "中专", "code": 3},
            {"label": "大专", "code": 4},
            {"label": "本科", "code": 5},
            {"label": "硕士", "code": 6},
            {"label": "博士", "code": 7}
        ]
    });

    md.service('salary', function () {
        return [
            {
                "label": "面议",
                "code": 0
            },
            {
                "label": "1500\u4ee5\u4e0b",
                "code": 1
            },
            {
                "label": "1500-1999",
                "code": 2
            },
            {
                "label": "2000-2999",
                "code": 3
            },
            {
                "label": "3000-4499",
                "code": 4
            },
            {
                "label": "4500-5999",
                "code": 5
            },
            {
                "label": "6000-7999",
                "code": 6
            },
            {
                "label": "8000-9999",
                "code": 7
            },
            {
                "label": "10000-14999",
                "code": 8
            },
            {
                "label": "15000-19999",
                "code": 9
            },
            {
                "label": "20000-24999",
                "code": 10
            },
            {
                "label": "25000-29999",
                "code": 11
            },
            {
                "label": "30000-39999",
                "code": 12
            },
            {
                "label": "40000-49999",
                "code": 13
            },
            {
                "label": "50000-59999",
                "code": 14
            },
            {
                "label": "60000-69999",
                "code": 15
            },
            {
                "label": "70000--99999",
                "code": 16
            },
            {
                "label": "100000\u4ee5\u4e0a",
                "code": 17
            }
        ]
    });

    md.service('exp', function () {
        return [
            {
                label: "不限",
                code: 0
            },
            {
                label: "无经验",
                code: 1
            },
            {
                label: "应届生",
                code: 2
            },
            {
                label: "1年以下",
                code: 3
            },
            {
                label: "1-3年",
                code: 4
            },
            {
                label: "3-5年",
                code: 5
            },
            {
                label: "5-7年",
                code: 6
            },
            {
                label: "8-9年",
                code: 7
            },
            {
                label: "10年以上",
                code: 8
            }
        ]
    })
});
