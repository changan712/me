'use strict';

define([
    'app',
    'service/dialog',
    'service/resume',
    'service/resumeFilter',
    'directive/listFilter'
], function (md) {

    //人才库
    md.controller('resumeCtrl', ['$rootScope', function ($rootScope) {
        $rootScope.page = 'resume';
    }]);

    //人才库列表页
    md.controller('resumeListCtrl', ['$scope', '$location', '$state', 'dialog', 'resume', 'resumeFilter', function ($scope, $location, $state, dialog, resume, resumeFilter) {
        var vm = $scope.vm = {};
        vm.viewType = 0;


        //pagination

        resume.get($location.search(), function (res) {
            vm.list = res.data.hits.hits;
            vm.totalItems = res.data.hits.total;
            vm.filterData = res.data.aggregations;
        });


        vm.onFilterChange = function (data) {
            var newSearch = _.extend(data, {page: 1});

            $location.search(newSearch);
            // $state.reload();
            //  $state.go('resume.list', newSearch,{reload :true,location :'replace'});
        };


        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };

        vm.checkedAll = false;
        $scope.$watch('vm.checkedAll', function (n) {

            _.each(vm.resumeList, function (item) {
                item.checked = n;
            })
        });


        vm.resumeList = [
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }
            }
        ]
    }
    ]);

    //简历上传
    md.controller('resumeUploadCtrl', ['$scope', '$timeout', 'FileUploader', 'alertService', 'dialog', 'resume', function ($scope, $timeout, FileUploader, alertService, dialog, resume) {
        var vm = $scope.vm = {};

        var acceptFileType = vm.acceptFileType = ['txt', 'doc', 'dot', 'html', 'htm', 'mht', 'pdf', 'msg', 'eml', 'xls', 'xlsx', 'rtf', 'zip'];
        var maxSize = vm.maxSize = 20;
        var limit = vm.limit = 20;
        var randomCode = getRandom();
        vm.result = {};


        var uploader = vm.uploader = new FileUploader({
            url: 'http://pineapple.caicv.com/api/resume',
            queueLimit: limit
        });


        uploader.onBeforeUploadItem = function (item) {
            item.url = item.url + '?code=' + randomCode;
            // item.headers.code = random;
            // item.withCredentials = true;
        };


        function getRandom() {
            return Math.random() + '_' + (new Date()).getTime();

        }

        uploader.filters.push({
            name: 'fileFilter',
            fn: function (item, options) {
                return getAccept(item);
            }
        });

        function getAccept(item) {
            var type = item.name.slice(item.name.lastIndexOf('.') + 1);

            var repeated;
            if (acceptFileType.indexOf(type) == -1 || item.size > (1024 * 1000 * maxSize)) {
                alertService.add('请上传正确的格式并小于20M的文件！', 5000, 'warning')
            }

            repeated = _.find(uploader.queue, function (o) {
                if (o.file.name == item.name) {
                    return true;
                }
            });

            return acceptFileType.indexOf(type) > -1 && !repeated && item.size < (1024 * 1000 * maxSize);
        }

        uploader.onCompleteAll = function (i, data) {
            $timeout(function () {
                vm.updateComplete = true;
                vm.getResult();
                uploader.clearQueue();
                uploader.destroy();
            }, 1000)

        };

        var timer;
        vm.getResult = function () {
            resume.get({a: 'parse', code: randomCode}, function (res) {
                vm.result = res.data;
                if (res.data.percent < 100) {
                    timer = $timeout(function () {
                        vm.getResult()
                    }, 1000)
                } else {
                    timer && $timer.cancel(timer);
                }
            }, function () {
                timer && $timer.cancel(timer);
            })
        }


    }
    ]);


    md.controller('resumeFavoritesCtrl', ['$scope', '$location', function ($scope, $location) {
        var vm = $scope.vm = {};

        vm.viewType = 0;
        vm.totalItems = 50;
        //pagination
        vm.currentPage = parseInt($location.search().page) || 1;
        vm.pageChanged = function () {
            $location.search('page', vm.currentPage);
        };

        vm.checkedAll = false;
        $scope.$watch('vm.checkedAll', function (n) {

            _.each(vm.resumeList, function (item) {
                item.checked = n;
            })
        });


        vm.resumeList = [
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            },
            {
                name: '郭靖',
                update_date: '454545454',
                sex: 'female',
                work_exp: 2,
                university: '北京大学',
                education: '本科',
                professional: '环境',
                location: '上海市徐汇区',
                rr: '北京市海淀区',
                tel: 10472047,
                now_corp: {
                    pos: '架构师',
                    corp_name: 'bjfu'
                },
                old_corp: {
                    pos: '软件开发工程师',
                    corp_name: 'bjfu'
                }

            }


        ]

    }
    ]);


});

