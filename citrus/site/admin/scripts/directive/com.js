'use strict';

define(['app'], function (md) {


    md.directive("fileread", [function () {
        return {
            scope: {
                fileread: "=",
                filetype: '=',
                fileInfo: '=',
                readerError: "&",
                readerSuccess: '&'
            },
            link: function (scope, element, attributes) {
                var reader;
                var allowedType = [ 'jpg', 'gif', 'png', 'jpeg'];
                if (!FileReader) return;


                element.on("change", function (changeEvent) {
                    reader = new FileReader();
                    reader.onload = function (loadEvent) {

                        scope.$apply(function () {

                            scope.fileread = (loadEvent.target.result);//.match(/,(.*)$/)[1];
                            scope.readerSuccess({
                                fileData: {
                                    data: scope.fileread,
                                    info: scope.fileInfo,
                                    type: scope.filetype
                                }
                            })
                        });
                    };
                    if (changeEvent.target.files[0].size > 1024 * 200 ) {
                        scope.readerError({msg: '请上传小于200k的文件'});
                        scope.fileInfo = null;
                        scope.fileread = null;
                        return
                    }
                    var filetype = changeEvent.target.files[0].name.split('.').pop().toLowerCase();

                    if (allowedType.indexOf(filetype) < 0) {
                        scope.readerError({msg: '请上传正确的格式'});
                        scope.fileInfo = null;
                        scope.fileread = null;
                        return false;
                    }

                    scope.$apply(function () {
                        scope.fileInfo = changeEvent.target.files[0];
                        scope.filetype = filetype;
                    });

                    reader.readAsDataURL(changeEvent.target.files[0]);

                    reader.onerror = function (e) {
                        scope.fileInfo = null;
                        scope.fileread = null;
                        scope.readerError({msg: e});
                    }
                });

                scope.$on('$destroy', function () {
                    element.off('change');
                    if (reader)
                        reader.onload = null;
                })

            }
        }
    }]);


    md.directive('clickReload', ['$state', function ($state) {

        return {
            restrict: 'A',

            link: function (scope, ele, attr) {
                ele.on('click', function () {
                    $state.reload();
                })

            }
        }

    }]);

    md.directive('eleModel', ['$sce', function ($sce) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) return;
                // Specify how UI should be updated
                ngModel.$render = function () {
                    element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
                };
                // Listen for change events to enable binding
                element.on('blur keyup change', function () {
                    scope.$evalAsync(read);
                });
                read(); // initialize

                // Write data to the model
                function read() {
                    var text = element.text();
                    // When we clear the content editable the browser leaves a <br> behind
                    // If strip-br attribute is provided then we strip this out
                    if (attrs.stripBr && text == '<br>') {
                        text = '';
                    }
                    ngModel.$setViewValue(text);
                }
            }
        };
    }]);

    md.directive('popPopup', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {title: '@', content: '@', placement: '@', animation: '&', isOpen: '&'},
            templateUrl: 'template/popover/popover.html'
        };
    });

    md.directive('pop', function pop($tooltip, $timeout) {
        var tooltip = $tooltip('pop', 'pop', 'event');
        var compile = angular.copy(tooltip.compile);
        tooltip.compile = function (element, attrs) {
            var first = true;
            attrs.$observe('popShow', function (val) {
                if (JSON.parse(!first || val || false)) {
                    $timeout(function () {
                        element.triggerHandler('event');
                    });
                }
                first = false;
            });
            return compile(element, attrs);
        };
        return tooltip;
    });
    md.directive('clickOuterHide', function () {
        return {
            restrict: 'A',
            scope: {
                onHide: '&',
                clickOuterHideExcept: '@'

            },
            link: function (scope, ele) {


                angular.element(scope.clickOuterHideExcept).on('click', function (e) {

                    e.stopPropagation();
                });
                angular.element('body').on('click.outHide', function () {

                    scope.$apply(function () {
                        scope.onHide();
                        $(ele).hide();
                    });

                });
                ele.on('click', function (e) {
                    e.stopPropagation();
                });

                scope.$on('$destroy', function () {
                    angular.element('body').off('click.outHide');
                    ele.off('click');
                })

            }
        }
    });

    /**
     * 阻止冒泡
     */
    md.directive('clickStopProp', function () {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, ele) {

                ele.on('click.stopProp', function (e) {
                    e.stopPropagation();
                });

                scope.$on('$destroy',function(){

                    ele.off('click.stopProp');
                })

            }
        }
    });


});