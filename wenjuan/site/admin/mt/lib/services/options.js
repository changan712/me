'use strict';

define(['app'], function (md) {
    return md.service('options',function () {
        this.gender = [{
            name:'',
            value:''
        },{
            name:'男',
            value:1
        },{
            name:'女',
            value:2
        }];

        this.whether = [{
            name:'是',
            value:1
        },{
            name:'否',
            value:0
        }]
    });
});