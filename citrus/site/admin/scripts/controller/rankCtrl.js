'use strict';

define([
    'app',
    'service/rank',
    'service/alert',
], function (md) {
    var set_data_width = function(data){
        var ret = [];
        var max_length = 0;
        _.each(data, function(item){
            if(!max_length) max_length = item['cnt'];
            var width = 0;
            if(max_length) width = item['cnt'] / max_length * 95;
            width = '' + width + '%';
            ret.push({
                'cnt': item['cnt'],
                'nickname': item['nickname'],
                'width': width
            })
        });
        return ret;
    };

    var get_data = function($scope, rank, method, callback){
        rank.search({'method':method}, function(data){
            var ret = set_data_width(data);
            callback && callback(ret);
        })
    };

    //根据月份筛选
    var filter_data = function ($scope, rank, method, month, callback) {
        rank.search({'method':method, month:month}, function(data){
            var ret = set_data_width(data);
            callback && callback(ret);
        })
    }

    var monthMap = function ($scope, rank, callback) {
        rank.cast(function (data) {
            callback(data);
        })
    }

    //排行榜页入口
    md.controller('rankIndexCtrl', ['$rootScope', '$scope', '$location', '$state', 'rank', function ($rootScope, $scope, $location, $state, rank) {
        $rootScope.page = 'rank';
        var vm = $scope.vm = {};
        get_data($scope, rank, 'share_count', function(data){vm.share_count = data});
        get_data($scope, rank, 'share_view_count', function(data){vm.share_view_count = data});
        get_data($scope, rank, 'share_apply_count', function(data){vm.share_apply_count = data});
        get_data($scope, rank, 'ref_count', function(data){vm.ref_count = data});
    }]);

    //个人转发量排名
    md.controller('rankShareCtrl', ['$rootScope', '$scope', '$location', '$state', 'rank', function ($rootScope, $scope, $location, $state, rank) {
        $scope.sub_title = $state.current.title;
        $rootScope.page = 'rank';
        var vm = $scope.vm = {};

        monthMap($scope, rank, function (data) {
            vm.month_map = data;
        });

        vm.query = function () {
            if (vm.currenyMonth){
                filter_data($scope, rank, 'share_count', vm.currenyMonth, function(data){vm.rank_data = data; vm.rank_color='#fdc111'});
            }
        }

        get_data($scope, rank, 'share_count',function(data){vm.rank_data = data; vm.rank_color='#fdc111'});
    }]);
    //转发职位被访问排名
    md.controller('rankShareViewCtrl', ['$rootScope', '$scope', '$location', '$state', 'rank', function ($rootScope, $scope, $location, $state, rank) {
        $scope.sub_title = $state.current.title;
        $rootScope.page = 'rank';
        var vm = $scope.vm = {};

        monthMap($scope, rank, function (data) {
            vm.month_map = data;
        });

        vm.query = function () {
            if (vm.currenyMonth){
                filter_data($scope, rank, 'share_view_count', vm.currenyMonth, function(data){vm.rank_data = data; vm.rank_color='#01dfd0'});
            }
        }

        get_data($scope, rank, 'share_view_count', function(data){vm.rank_data = data; vm.rank_color='#01dfd0'});
    }]);
    //转发职位被申请排名
    md.controller('rankShareApplyCtrl', ['$rootScope', '$scope', '$location', '$state', 'rank', function ($rootScope, $scope, $location, $state, rank) {
        $scope.sub_title = $state.current.title;
        $rootScope.page = 'rank';
        var vm = $scope.vm = {};

        monthMap($scope, rank, function (data) {
            vm.month_map = data;
        });

        vm.query = function () {
            if (vm.currenyMonth){
                filter_data($scope, rank, 'share_apply_count', vm.currenyMonth, function(data){vm.rank_data = data; vm.rank_color='#b8e06d'});
            }
        }

        get_data($scope, rank, 'share_apply_count', function(data){vm.rank_data = data; vm.rank_color='#b8e06d'});
    }]);
    //员工推荐排名
    md.controller('rankRefCtrl', ['$rootScope', '$scope', '$location', '$state', 'rank', function ($rootScope, $scope, $location, $state, rank) {
        $scope.sub_title = $state.current.title;
        $rootScope.page = 'rank';
        var vm = $scope.vm = {};

        monthMap($scope, rank, function (data) {
            vm.month_map = data;
        });

        vm.query = function () {
            if (vm.currenyMonth){
                filter_data($scope, rank, 'ref_count', vm.currenyMonth, function(data){vm.rank_data = data; vm.rank_color='#ee6f8a'});
            }
        }

        get_data($scope, rank, 'ref_count', function(data){vm.rank_data = data; vm.rank_color='#ee6f8a'});
    }]);
});