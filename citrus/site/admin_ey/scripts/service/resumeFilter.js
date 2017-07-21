'use strict';

define(['app', 'service/constant'], function (md) {
    md.service('resumeFilter', ['$resource', 'APIHOST', function ($resource, APIHOST) {


        return [
            {
                label: '居住地',
                code: 'loc',
                count:125,
                checked:true,
                child: [
                    {
                        label: '北京',
                        count: 111
                    },
                    {
                        label: '陕西',
                        count: 12
                    },
                    {
                        label: '江苏',
                        count: 1
                    }


                ]
            },

            {
                label: '现任公司',
                code: 'corp',
                count:125,
                checked:true,
                child: [
                    {
                        label: '新加坡航空公司',
                        count: 111
                    },
                    {
                        label: '花旗银行',
                        count: 12

                    },
                    {
                        label: '通用磨坊',
                        count: 1
                    }


                ]
            },
            {
                label: '曾任公司',
                code: 'corp2',
                count:125,
                checked:true,
                child: [
                    {
                        label: '新加坡航空公司',
                        count: 111
                    },
                    {
                        label: '花旗银行',
                        count: 12
                    },
                    {
                        label: '通用磨坊',
                        count: 1
                    }


                ]
            },

            {
                label: '学校',
                code: 'edu',
                checked:true,
                count:125,
                child: [
                    {
                        label: '清华大学',
                        count: 111
                    },
                    {
                        label: '北京大学',
                        count: 12
                    },
                    {
                        label: '北京人民大学',
                        count: 1
                    }


                ]
            },
            {
                label: '工作经验',
                checked:true,
                code: 'exp',
                count:125,
                child: [
                    {
                        label: '1-2年 ',
                        count: 11
                    },
                    {
                        label: '1-4年',
                        count: 2
                    },
                    {
                        label: '4-10年',
                        count: 1
                    }


                ]
            },

            {
                label: '简历更新',
                checked:true,
                code: 'ud',
                count:125,
                child: [
                    {
                        label: '10天内',
                        count: 11
                    },
                    {
                        label: '5天内',
                        count: 2
                    },
                    {
                        label: '1天内',
                        count: 1
                    }


                ]
            }
        ]

    }]);
});