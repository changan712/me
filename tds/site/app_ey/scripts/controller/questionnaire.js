'use strict';

define([
    'app',
    'service/resume',
    'service/user',
    'service/tip',
    'service/values'
], function (md) {
    //调查问卷
    md.controller('questionnaireCtrl', ['$rootScope', '$scope', '$location', 'resume', '$state', 'user', 'schools', 'tip', function ($rootScope, $scope, $location, resume, $state, user, schools, tip) {

        var vm = $scope.vm = {};

        vm.view = {
            cities: [{
                city: '北京',
                departments: ['咨询-风险（日语）', '咨询-风险', '审计', '审计（日语）', '税务', '税务-人力资本', '税务（日语）', '税务-转让定价', '财务交易服务']
            },
                {
                    city: '广州',
                    departments: ['咨询-风险', '审计', '审计（日语）', '税务', '税务-人力资本', '税务（日语）', '财务交易服务']
                },
                {
                    city: '南京',
                    departments: ['审计']
                },
                {
                    city: '苏州',
                    departments: ['审计']
                },
                {
                    city: '上海',
                    departments: ['咨询-风险（日语）', '咨询-风险', '审计', '审计（日语）', '税务（日语）', '税务', '税务-人力资本', '税务-转让定价', '财务交易服务']
                },
                {
                    city: '深圳',
                    departments: ['咨询-风险', '审计', '审计（日语）', '税务', '税务-人力资本']
                },
                {
                    city: '天津',
                    departments: ['审计', '税务', '税务-人力资本']
                }, {
                    city: '厦门',
                    departments: ['审计', '税务']
                }],
            departments: ['咨询-风险（日语）', '咨询-风险', '审计', '审计（日语）', '税务', '税务-人力资本', '税务（日语）', '税务-转让定价', '财务交易服务'],
            scholarship: ['院级奖学金', '校级奖学金', '省/市级奖学金', '国家级奖学金', '无'],
            english: ['CET-6(425以下)', 'CET-6(425-519)', 'CET-6(520-580)', 'CET-6(581-710)', 'TEM-4', 'TEM-8', '无'],
            otherEnglish: ['IELTS(5.5以上)', 'IELTS(5.5以下)', 'TOEFL(83以上)', 'TOEFL(83以下)', 'TOEIC(699以上)', 'TOEIC(699以下)', 'BULATS(75以上)', 'BULATS(75以下)', '无'],
            duty: ['班长', '学生会干事', '学生会部长', '学生会主席', '无', '其他'],
            practice: ['四大会计师事务所', '其他会计师事务所', '500强外资企业', '非500强外资企业', '民营公司', '无'],
            CICPA: ['1', '2', '3', '4', '5', '6', '7'],
            ACCA: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
            schools: schools
        };

        vm.cityChange = function () {
            vm.view.departments = _.where(vm.view.cities, {city: vm.mod.city.city})[0].departments;
            vm.mod.department = _.findWhere(vm.view.cities, {city: vm.mod.city.city}).departments[0];
        };


        vm.mod = {
            city: vm.view.cities[0],
            department: vm.view.cities[0].departments[0],
            scholarship: '院级奖学金',
            english: 'CET-6(425以下)',
            otherEnglish: 'IELTS(5.5以上)',
            duty: '班长',
            practice: '四大会计师事务所',
            CICPA: '1',
            ACCA: '1',
            schools: schools[0]
        };

        var map = {
            city: '希望工作城市',
            department: '希望工作部门',
            scholarship: '曾获奖学金',
            english: '英语水平',
            otherEnglish: '其它英语水平',
            duty: '学校任职',
            practice: '实习经历',
            CICPA: 'CICPA',
            ACCA: 'ACCA',
            schools: '学校'
        };

        vm.submit = function (form) {
            var data = vm.mod;
            data.map = map;
            if (form.$valid) {
                resume.saveQuestionnaire({}, {questionaire: data,resume_id:user.resume.id}).$promise.then(function (res) {
                    tip.show('提交成功！');
                    $state.go('success', {},{location:'replace'});
                });


            }
        }

    }]);

});

