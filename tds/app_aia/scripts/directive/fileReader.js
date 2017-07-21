'use strict';

define(['app'], function (md) {

    md.directive("fileReader", [function () {
        return {
            require: '?ngModel',
            scope: {
                maxSize: '@', //数字 单位 m
                allowedType: '@', //数组 如  ['pdf', 'jpg', 'gif', 'png', 'jpeg']
                readError: "&",
                readSuccess: '&',
                currentFile: "=?", //input file 对象
                clear: "=?"
            },
            link: function (scope, element, attributes, ngModelCtrl) {

                if (!FileReader || !ngModelCtrl) return;

                var reader, data = null;
                scope.allowedType = scope.$eval(scope.allowedType) || ['jpg', 'gif', 'png', 'jpeg','doc'];
                scope.maxSize = scope.maxSize || 5;


                scope.$watch(function () {
                    return data;
                }, function (n) {
                    ngModelCtrl.$setViewValue(n);
                });

                element.on("change", function (changeEvent) {
                    if (reader) {
                        reader = null;
                    }
                    reader = new FileReader();
                    data = null;
                    reader.onload = readerLoaded;

                    var currentFile = changeEvent.target.files[0];

                    if (currentFile) {
                        //size;
                        if (currentFile.size > 1024 * 1000 * scope.maxSize) {
                            scope.$apply(function () {
                                scope.readError({msg: '请上传小于' + scope.maxSize + 'm的文件'});
                            });
                            scope.clear();
                            return
                        }

                        //type
                        var fileType = currentFile.name.split('.').pop().toLowerCase();

                        if (scope.allowedType.indexOf(fileType) < 0) {
                            scope.$apply(function () {
                                scope.readError({msg: '请上传正确的格式'});
                            });
                            scope.clear();
                            return false;
                        }
                        scope.$apply(function () {
                            scope.currentFile = currentFile;
                        });

                        reader.readAsDataURL(currentFile);
                        reader.onerror = function (e) {
                            scope.clear();
                            scope.readError({msg: e});
                        }
                    }

                });

                function readerLoaded(loadEvent) {
                    scope.$apply(function () {
                        //  var fileDate = (loadEvent.target.result).match(/,(.*)$/)[1];
                        data = loadEvent.target.result;
                        scope.readSuccess(data)
                    });

                }

                scope.clear = function () {
                    data = null;
                    scope.currentFile = undefined;
                    element.val('');
                };

                scope.$on('$destroy', function () {
                    element.off('change');
                    if (reader)
                        reader.onload = null;
                })

            }
        }
    }]);
});