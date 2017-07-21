'use strict';

define([
    'app',
    'service/resume',
    'service/alert',
    'service/utils',
    'directive/email'

], function (md) {
    md.controller('resumeDetailCtrl', ['$rootScope', '$scope', '$sce', '$location', '$http', '$state', 'resume', 'utils', function ($rootScope, $scope, $sce, $location, $http, $state, resume, utils) {

        $rootScope.page = '';
        var vm = $scope.vm = {};
        var acceptType = ['pdf', 'jpg', 'jpeg', 'png', 'gif', 'html'];

        vm.resume_id = $state.params.id;

        //可预览附件；
        vm.files = [];

        vm.getDlUrl = function () {
            return utils.getHost() + utils.getCorporation() + '/admin/resumes/download?id=' + vm.resume_id;
        };

        vm.getTrustedUrl = function (url) {
            return $sce.trustAsUrl(url.toString());
        };


        resume.get({id: vm.resume_id}, function (res) {

            vm.resume = res;
            //todo questionaire 后台字段少些一个n...
            vm.questionnaire = formatQuestionnaire(vm.resume.questionaire);

            angular.forEach(vm.resume.file, function (v, k) {

                var type = v.split('.').pop().toLowerCase();
                var isImg = false, isAcceptType = true;
                if (acceptType.indexOf(type) < 0) {
                    v = '';
                    isAcceptType = false;
                } else {
                    v = utils.getHost() + utils.getCorporation() + '/admin/resumes/preview?id=' + vm.resume_id + '&index=' + k;
                    if (['jpg', 'jpeg', 'png', 'gif'].indexOf(type) >= 0) {
                        isImg = true;
                    }
                    vm.files.push({
                        index: k,
                        type: type,
                        url: v,
                        isAcceptType: isAcceptType,
                        isImg: isImg
                    });
                }
            });
        });

        function formatQuestionnaire(data) {
            if (!data) return null;
            var newData = {};

            var map = {
                city: '希望工作城市',
                department: '希望工作部门',
                city2: '第二志愿工作城市',
                department2: '第二志愿工作部门',
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
            _.forEach(data, function (value, key) {
                if (key != 'map'&&key!='meeting') {
                    switch (key) {
                        case 'city':
                          //  newData[map[key]] = value.city;
                            break;
                        case 'city2':
                            newData[map[key]] = value.city;
                            break;
                        case 'schools':
                            newData[map[key]] = value.name;
                            break;
                        default:
                            newData[map[key]] = value;
                    }
                }
            });
            return newData;
        }
    }
    ]);

});

