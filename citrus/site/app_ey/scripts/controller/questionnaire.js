'use strict';

define([
    'app',
    'service/resume',
    'service/user',
    'service/tip',
    'service/appError',
    'service/utils'
], function (md) {
    //调查问卷
    md.controller('questionnaireCtrl', ['$rootScope', '$scope', '$location', '$http', 'resume', '$state', 'user', 'tip', 'appError', 'utils', function ($rootScope, $scope, $location, $http, resume, $state, user, tip, appError, utils) {

        var vm = $scope.vm = {};
        var isEdit = vm.isEdit = $state.params.type == 'edit';

        vm.view = {
            cities: [{
                city: '北京',
                departments: ['财务交易服务', '审计', '审计（日语）', '税务', '税务-人力资本', '税务-转让定价', '税务（日语）', '瑛明律师事务所北京分所', '咨询-风险', '咨询-风险（日语）']
            },
                {
                    city: '广州',
                    departments: ['审计', '审计（日语）', '税务-企业税服务', '税务-人力资本', '税务（日语）', '咨询-风险']
                },
                {
                    city: '杭州',
                    departments: ['审计']
                },
                {
                    city: '南京',
                    departments: ['审计']
                },

                {
                    city: '上海',
                    departments: ['财务交易服务', '审计', '审计（日语）', '税务', '税务-人力资本', '税务-转让定价', '税务（日语）', '瑛明律师事务所', '咨询-风险', '咨询-风险（日语）']
                },
                {
                    city: '深圳',
                    departments: ['审计', '审计（日语）', '税务-企业税服务', '税务-人力资本', '税务（日语）', '咨询-风险']
                },
                {
                    city: '苏州',
                    departments: ['审计']
                },
                {
                    city: '天津',
                    departments: ['审计', '税务-企业税服务', '税务-人力资本']
                }, {
                    city: '厦门',
                    departments: ['审计', '税务']
                }],
            departments: ['财务交易服务', '审计', '审计（日语）', '税务', '税务-人力资本', '税务-转让定价', '税务（日语）', '瑛明律师事务所北京分所', '咨询-风险', '咨询-风险（日语）'],
            scholarship: ['院级奖学金', '校级奖学金', '省/市级奖学金', '国家级奖学金', '无'],
            english: ['CET-6(425以下)', 'CET-6(425-519)', 'CET-6(520-580)', 'CET-6(581-710)', 'TEM-4', 'TEM-8', '无'],
            otherEnglish: ['IELTS(5.5以上)', 'IELTS(5.5以下)', 'TOEFL(83以上)', 'TOEFL(83以下)', 'TOEIC(699以上)', 'TOEIC(699以下)', 'BULATS(75以上)', 'BULATS(75以下)', '无'],
            duty: ['班长', '学生会干事', '学生会部长', '学生会主席', '无', '其它'],
            practice: ['四大会计师事务所', '其它会计师事务所', '咨询公司或律师事务所', '500强外资企业', '非500强外资企业', '国有企业', '民营公司', '无'],
            CICPA: ['0', '1', '2', '3', '4', '5', '6', '7'],
            ACCA: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],

            meetings: [
                {
                    location: '北京',
                    date: '7月5日或7月6日',
                    shortDate: '2016/7/5或7/6',
                    id: '0'

                }, {
                    location: '厦门',
                    date: '7月9日',
                    shortDate: '2016/7/9',
                    id: '1'

                }, {
                    location: '广州',
                    date: '7月11日',
                    shortDate: '2016/7/11',
                    id: '2'

                }, {
                    location: '上海',
                    date: '7月13日或7月14日',
                    shortDate: '2016/7/13或7/14',
                    id: '3'

                }

            ]
        };
        //vm.view.cities2 = _.without(vm.view.cities,vm.mod.city.city);


        vm.cityChange = function (city) {
            vm.view.departments = _.where(vm.view.cities, {city: city.city})[0].departments;
            vm.mod.department = _.findWhere(vm.view.cities, {city: city.city}).departments[0];
        };
        vm.cityChange2 = function (city) {
            vm.view.departments2 = _.where(vm.view.cities, {city: city.city})[0].departments;
            vm.mod.department2 = _.findWhere(vm.view.cities, {city: city.city}).departments[0];
        };


        vm.mod = {
            city: vm.view.cities[0],
            department: vm.view.cities[0].departments[0],
           /* city2: vm.view.cities[0],
            department2: vm.view.cities[0].departments[0],*/
            scholarship: '院级奖学金',
            english: 'CET-6(425以下)',
            otherEnglish: 'IELTS(5.5以上)',
            duty: '班长',
            practice: '四大会计师事务所',
            CICPA: '0',
            ACCA: '0',
            meeting: vm.view.meetings[0]
        };

        vm.meetingsClick = function () {
            alert('您已选择过SLP终极挑战场次了哦~');
        };


        $scope.$watch('vm.mod.meeting', function (n) {
            if (angular.isString(n)) {
                vm.mod.meeting = _.findWhere(vm.view.meetings, {id: n});
            }
        });
        //在所有环境下刷新city2
        //if (isEdit) {
        vm.mod = user.questionnaire || vm.mod;
       /* vm.cityChange2(vm.mod.city2);*/
        //}


        var map = {
            city: '希望工作城市',
            department: '希望工作部门',
           /* city2: '第二志愿工作城市',
            department2: '第二志愿工作部门',*/
            scholarship: '曾获奖学金',
            english: '英语水平',
            otherEnglish: '其它英语水平',
            duty: '学校任职',
            practice: '实习经历',
            CICPA: 'CICPA',
            ACCA: 'ACCA',
            q_num:'资格考试通过数量',
            certificate:'其他证书',
            other_duty:'在校期间其他职务'
        };

        vm.submit = function (form) {
            var data = vm.mod;
            data.map = map;
            if (form.$valid) {
                resume.saveQuestionnaire({}, {
                    questionaire: data,
                    resume_id: user.resume.id
                }).$promise.then(function (res) {
                    tip.show('提交成功！');
                    user.questionnaire = data;
                    user.meeting = vm.mod.meeting;
                    resume.wxStore({}, user);
                    if (isEdit) {
                        $state.go("position.listByProperty", {property: 2});
                    } else {
                        $state.go('success', {}, {location: 'replace'});
                    }

                });
            } else {
                var tipStr = appError.getTip(form.$error);
                tip.show(tipStr);
            }
        }

    }]);

});

