/**
 * v1.0.1
 * 增加parse功能
 */
'use strict';

define([
    'app',
    'service/klass'
], function (md) {
    md.factory('PageList', ['$rootScope', '$q', '$timeout', '$state', '$ionicScrollDelegate', 'klass', function ($rootScope, $q, $timeout, $state, $ionicScrollDelegate, klass) {

        return klass(null, {
            /**
             * @param resource
             * @param config 默认参数
             * @param getMethod
             * @private
             */
            __construct: function (resource, config, getMethod) {

                this.resource = resource;
                if (angular.isString(config)) {
                    getMethod = config;
                    this.config = {};
                } else {
                    this.config = config;
                }

                this.setting = {};
                this.setting = _.extend({}, this.setting, this.config);

                this.getMethod = getMethod || 'query';
                this.section = 1;
                this.list = [];
                this._meta = {};
                this.hasMore = false;
                this.loading = false;

            },
            resetConfig: function (config) {
                this.config = config;
                this.setting = _.extend({}, config);
            },
            hasSection: function () {
                return !!this._meta.currentSection;
            },
            isFirstSection: function () {
                return this.hasSection() && this.section == 1;
            },
            sectionTo: function (sectionIndex) {

                var page = this._meta.perSection * (sectionIndex - 1) + 1;
                this.getList({_page: page}, false, true);
            },
            isSectionBd: function () {
                if (this.hasSection()) {
                    return !(this._meta.currentPage % this._meta.perSection);
                }
            },

            parse: function (data) {
                return data;
            },

            getList: function (params, isAdd, scrollTop) {
                var _this = this;
                this.loading = true;
                params = _.extend({}, {_page_size: 10}, this.setting, params);

                return this.resource[this.getMethod](params, function (res, headers) {

                    res = _this.parse(res);

                    if (isAdd) {
                        _this.list = _this.list.concat(res);
                    } else {
                        _this.list = res;
                    }
                    _this.loading = false;
                    _this._meta = JSON.parse(headers('X-Meta-List')) || {};
                    // console.log(_this._meta);
                    _this.section = _this._meta.currentSection;
                    _this.hasMore = _this._meta.currentPage < _this._meta.pageCount;
                    if (scrollTop) {
                        $ionicScrollDelegate.scrollTop();
                        $ionicScrollDelegate.resize();
                    }

                    $timeout(function () {
                        $rootScope.$broadcast('app.pageChange', {meta: _this._meta, state: $state.current});
                        $rootScope.$broadcast('scroll.infiniteScrollComplete');
                    })

                    // return _this.list;
                }).$promise;
            },

            loadMore: function (pageNew) {
                if (this._meta) {
                    this.getList({_page: this._meta.currentPage + 1}, true);
                }
            },

            refresh: function (params, isEnforce) {
                if (!angular.isObject(params)) {
                    isEnforce = params;
                    params = {};
                }
                // this.isFirstSection():解决ion-refresher 在第section2 ng-if隐藏仍然触发函数的相关bug
                if (isEnforce || this.isFirstSection() || !this.hasSection()) {
                    $ionicScrollDelegate.scrollTop();
                    this.getList(params).then(function (res) {
                        $rootScope.$broadcast('scroll.refreshComplete');

                        $ionicScrollDelegate.resize();
                    });
                }
            }
        });

    }]);
});