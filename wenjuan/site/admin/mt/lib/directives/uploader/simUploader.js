define([
    'app',
    'fileUpload'
], function (md) {
    md.directive('simUploader', ['FileUploader', '$timeout', function (FileUploader, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                //对外暴露的方法;
                exports: '='
            },
            controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
                var uploader = $scope.uploader = new FileUploader();
                var currentUploadUrl = '';
                var formData = {};
                var callbackError = angular.noop;
                var callbackSuccess = angular.noop;
                var exports = $scope.exports = {};

                uploader.errors = [];

                //上传附件  success 成功后回调   error 失败后回调
                exports.uploadAll = $scope.uploadAll = function (success, error) {
                    callbackSuccess = success;
                    callbackError = error;
                    uploader.uploadAll();
                };

                //设置上传地址
                exports.setUrl = $scope.setFormData = function (url) {
                    currentUploadUrl = url;
                };

                //设置上传时其它json数据
                exports.setFormData = $scope.setFormData = function (data) {
                    formData = data;
                };

                //获取文件队列长度，判断用户是否添加附件；
                exports.getQueueLength = function () {
                    return uploader.queue.length
                };

                uploader.onBeforeUploadItem = function (item) {
                    item.url = currentUploadUrl;
                    item.formData.push(formData);
                };

                uploader.onErrorItem = function (o) {
                    uploader.errors.push(o._file);
                };

                uploader.onCompleteItem = function(item, data){
                    if (uploader.errors.length) {
                        callbackError && callbackError(data)
                    } else {
                        callbackSuccess && callbackSuccess(data);
                    }
                };

                uploader.onCompleteAll = function () {
                    uploader.clearQueue();
                    currentUploadUrl = '';
                    formData = null;
                    uploader.errors = [];
                    uploader.destroy();
                };


                uploader.onAfterAddingAll = function () {
                    if (uploader.queue.length > 1) {
                        uploader.queue.shift();
                    }
                    uploader.errors = [];
                };

                uploader.filters.push({
                    name: 'fileFilter',
                    fn: function (item, options) {
                        return getAccept(item);
                    }
                });

                function getAccept(item) {
                    var type = item.name.slice(item.name.lastIndexOf('.') + 1);
                    var repeated;
                    if ($scope.acceptFileType.indexOf(type) == -1 || item.size > (1024 * 1000 * $scope.uploadMaxSize)) {
                        $rootScope.$broadcast('errorNotAccepted', {msg: '请上传正确的格式并小于' + $scope.uploadMaxSize + 'M的文件'})
                    }

                    repeated = _.find(uploader.queue, function (o) {
                        if (o.file.name == item.name) {
                            return true;
                        }
                    });

                    return $scope.acceptFileType.indexOf(type) > -1 && !repeated && item.size < (1024 * 1000 * $scope.uploadMaxSize);
                }

            }],
            templateUrl: 'lib/directives/uploader/sim-uploader.html',
            link: function (scope, element, attrs) {
                scope.acceptFileType = scope.$eval(attrs.acceptFileType) || ['png', 'jpg', 'jpeg', 'gif', 'txt', 'doc', 'docx', 'dot', 'html', 'htm', 'mht', 'pdf', 'msg', 'eml', 'xls', 'xlsx', 'rtf', 'zip'];
                scope.uploadMaxSize = scope.$eval(attrs.maxSize) || 20;

                $timeout(function () {
                    scope.enable = true;
                })

            }
        }
    }])
});