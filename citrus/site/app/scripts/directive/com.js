'use strict';

define(['app'], function (md) {


    md.directive('showItemOptions', function () {
        return {
            scope: {
                showItemOptionsValue: '='
            },
            link: function (scope, el, attrs) {

                scope.$watch('showItemOptionsValue', function (n) {
                    var item = el.find('ion-option-button').parent();
                    if (n) {
                        item.addClass('show-options');
                    } else {
                        item.removeClass('show-options');
                    }
                });
            }
        }
    });

    md.directive('sticky', ['$ionicPosition', '$ionicScrollDelegate', function ($ionicPosition, $ionicScrollDelegate) {
        return {
            scope: true,
            link: function (scope, ele, attrs) {
                var scroller = angular.element(document.getElementById('sticky_content'));
                //var eventOnEmitted = false, eventOffEmitted = false;
                var eventNamespace = attrs.stickyEvnet;
                var stickyTop = attrs.stickyTop || 0;

                var initTop = $ionicPosition.position(ele).top;
                if (top <= stickyTop) {
                    scope.$emit('stickyTrue.' + eventNamespace, {ele: ele});
                } else {
                    scope.$emit('stickyFalse.' + eventNamespace, {ele: ele});
                }

                scroller.on('scroll', function () {
                    var top = $ionicPosition.position(ele).top;
                    if (top <= stickyTop) {
                        scope.$emit('stickyOn.' + eventNamespace, {ele: ele});
                    } else {
                        scope.$emit('stickyOff.' + eventNamespace, {ele: ele});
                    }
                });

                scope.$on('$destroy', function () {
                    scroller.off('scroll');
                })
            }
        }
    }]);

    md.directive('fileUpload', function () {
        return {
            scope: true,        //create a new scope
            link: function (scope, el, attrs) {

                el.bind('change', function (event) {
                    var files = event.target.files;
                    //iterate files since 'multiple' may be specified on the element
                    for (var i = 0; i < files.length; i++) {
                        //emit event upward
                        scope.$emit("fileSelected", {file: files[i]});
                    }
                });
            }
        };
    });


    md.directive("fileread", [function () {
        return {
            scope: {
                fileread: "=",
                fileType: '=',
                fileInfo: '=',
                readerError: "&",
                readerSuccess: '&',
                readerChange: '&'
            },
            link: function (scope, element, attributes) {
                var allowedType = ['pdf', 'jpg', 'gif', 'png', 'jpeg', 'doc', 'docx'];
                if (!FileReader) return;

                element.on("change", function (changeEvent) {

                    function readAndPreview(file, key) {
                        var reader = new FileReader();
                        fileType = file.name.split('.').pop().toLowerCase();
                        reader.onload = function (loadEvent) {

                            scope.$apply(function () {
                                scope.fileread = (loadEvent.target.result).match(/,(.*)$/)[1];
                                scope.readerSuccess({
                                    fileData: {
                                        data: scope.fileread,
                                        info: file,
                                        type: fileType,
                                        index: key
                                    }
                                });
                            });
                        }
                        reader.readAsDataURL(file);

                        reader.onerror = function (e) {
                            scope.fileInfo = null;
                            scope.fileread = null;
                            scope.readerError({msg: e});
                        }

                        scope.$on('$destroy', function () {
                            element.off('change');
                            if (reader)
                                reader.onload = null;
                        })
                    }

                    var fileType = [];

                    if (changeEvent.target.files.length > 4){
                        scope.readerError({msg: '最多上传4个文件'});
                        scope.fileInfo = null;
                        scope.fileread = null;
                        return;
                    }

                    for (var i=0;i<changeEvent.target.files.length;i++) {
                        if (changeEvent.target.files[i].size > 1024 * 1000 * 4){
                            scope.readerError({msg: '请上传小于4m的文件'});
                            scope.fileInfo = null;
                            scope.fileread = null;
                            return;
                        }
                        var type = changeEvent.target.files[i].name.split('.').pop().toLowerCase();
                        if (allowedType.indexOf(type) < 0) {
                            scope.readerError({msg: '请上传正确的格式'});
                            scope.fileInfo = null;
                            scope.fileread = null;
                            return false;
                        }
                        fileType.push(type);
                    }

                    scope.$apply(function () {
                        scope.fileInfo = changeEvent.target.files;
                        scope.fileType = fileType;
                    });

                    _.each(changeEvent.target.files, readAndPreview);
                });



            }
        }
    }]);

    md.directive('clickReload', [function () {

        return {
            restrict: 'A',

            link: function (scope, ele, attr) {
                ele.on('click', function () {
                    location.reload()
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

                scope.$on('$destroy', function () {

                    ele.off('click.stopProp');
                })

            }
        }
    });


});