'use strict';

define([
    'app',
    'service/constant',
    'service/alert'
], function (md) {

    //列表
    md.controller('redpackListCtrl', ['$rootScope', '$scope', '$location', '$state', '$http','APIHOST', function ($rootScope, $scope, $location, $state,$http, APIHOST) {

        $rootScope.page = 'client_list';
        var vm = $scope.vm = {};
        $scope.animationsEnabled = true;
        var search = $location.search();
        search.per_page = 20;

        getClientList(search);

        function getClientList(search){
            $http.get(APIHOST+'redpack/list', {params:search}).success(function(res){
                vm.list = res.items;
                vm._meta = res._meta;
            })
        }

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };
    }]);


    //详情
    md.controller('redpackDetailCtrl', ['$rootScope', '$scope', '$location', '$state', '$http','APIHOST', function ($rootScope, $scope, $location, $state, $http, APIHOST) {
        $rootScope.page = 'redpack_detail';
        var vm = $scope.vm = {};
        $scope.animationsEnabled = true;
        var search = $location.search();
        search.per_page = 20;

        var redpackType = [
            {
                "code":"ALL",
                "label":"--全部--"
            },
            {
                "code":"FORWARD",
                "label":"首次转发红包"
            },
            {
                "code":"RE_FORWARD",
                "label":"二次转发红包"
            },
            {
                "code":"FORWARD_VIEW",
                "label":"转发被浏览红包"
            },
            {
                "code":"FORWARD_APPLY",
                "label":"转发被申请红包"
            },
            {
                "code":"REF_INTERVIEW",
                "label":"内推进入面试红包"
            },
            {
                "code":"REF_ONBOARDING",
                "label":"内推入职红包"
            },
            {
                "code":"REF_PASSPROBATION",
                "label":"内推通过试用期红包"
            }
        ];

        vm.view = {
            type:redpackType,
            date:['0','7','30','90','180']
        };

        vm.filter = {
            type:search.type||"ALL",
            date:search.date
        };

        vm.filterSbm = function(){
            var newSearch = {};
            newSearch = _.extend({}, $location.search(), {type:vm.filter.type, date:vm.filter.date}, {page:1});
            $scope.form.$setPristine();
            $location.search(newSearch);
        };


        getClientList(search);

        getCompanyInfo(search.company_id);

        vm.exportRedpack = function(){
            return '/super/redpack/output?company_id='+search.company_id;
        };

        function getClientList(search){
            $http.get(APIHOST+'redpack/detail', {params:search}).success(function(res){
                angular.forEach(res.items, function(v,k){
                    v.reward_type = redpackTypeMap(v.reward_type);
                });

                vm.list = res.items;
                vm._meta = res._meta;
            })
        }

        function getCompanyInfo(id){
            $http.get(APIHOST+'companies/'+id).success(function(res){
                vm.company_name = res.name;
                vm.username = res.users[0].username;
                vm.contact = res.users[0].contact;
            })
        }

        function redpackTypeMap(redpack_type){
            for(var i=0;i<redpackType.length;i++){
                if(redpackType[i].code == redpack_type){
                    return redpackType[i].label;
                }
            }
        }

        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };
    }]);
});

