'use strict';

define([
    'app',
    'service/ref',
    'service/resume',
    'service/dialog'
], function (md) {

    //内部推荐列表
    md.controller('recDetailCtrl', ['$rootScope', '$scope', '$state', '$location', 'ref', 'resume','dialog', function ($rootScope, $scope, $state, $location, ref, resume,dialog) {
        $rootScope.page = 'rec';
        var vm = $scope.vm = {};
        vm.totalItems = 0;

        ref.get({id: $state.params.id}, function (res) {
            vm.refer = res;
        });

        vm.viewRefResult = [
            {
                label:'新简历',
                code:'NEW'
            },
            {
                label:'进入面试',
                code:'INTERVIEWED'
            },
            {
                label:'入职',
                code:'ONBOARDING'
            },
            {
                label:'拒绝',
                code:'NOACCEPT'
            }
            ];

        try {
            if (global_company.custom.rec){
                vm.viewRefResult.push({
                    label:'通过试用期',
                    code:'PASSPROBATION'
                },{
                    label:'简历筛选',
                    code:'ACCEPT'
                });
            }
        }catch (e){
            console.log(e);
        }
        vm.modelRefResult = vm.viewRefResult[0];

        getHistory();

        function getHistory(page) {
            /*            ref.getHistoryList({id: $state.params.id, page: page || 1}, function (res) {
             vm.historyList = res.data.list;
             vm.totalItems = res.data.total;
             });*/

            resume.get({ref_id: $state.params.id, page:page}, function (res) {
                vm.historyList = res.items;
                vm.totalItems = res._meta.totalCount;
            })
        }

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            getHistory(vm.currentPage);
            // $location.search('page', vm.currentPage);
        };

        vm.opRef = function (id, status, name) {
            var flag = _.findWhere(vm.viewRefResult,{code:status}).label;

            dialog.confirm('是否确认将<strong>'+name+'</strong>的申请状态修改为<strong>'+flag+'</strong>？<br>申请状态一经改动，系统会向推荐人发送相应邮件提醒。', {
                size:'default',
                btnOk: {
                    label:'确认修改',style: 'btn-success'
                }
            }).success(function () {
                resume.update({'id': id, 'ref_status': status}, function () {
                    getHistory(vm.currentPage);
                })
            }).error(function () {
                getHistory(vm.currentPage);
            });
        }

    }]);


});

