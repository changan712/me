'use strict';

define(['app'], function (md) {

    md.directive('requiredAtLeast', function () {
        return {
            restrict: 'A',
            require: '?^ngModel',
            link: function (scope, element, attrs, ctrl) {
                if (!ctrl) return;
                var length = scope.$eval(attrs.requiredAtLeast);

                scope.$watch(function () {
                    return ctrl.$modelValue;
                }, function (n, o) {
                    ctrl.$setValidity('requiredAtLeast', getValid(n));
                }, true);

                function getValid(modalValue) {
                    var valid = true;

                    var i = 0;
                    _.each(modalValue, function (v, k) {

                        if (angular.isArray(v) && v.length) {
                            i++;
                        } else if (angular.isDefined(v) && v !== '' && !angular.isArray(v)) {
                            i++
                        }
                    });

                    if (i < length) {
                        valid = false;
                    }

                    return valid;
                }

            }
        }
    });

    md.directive('activeClass', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('touchstart', function () {
                    element.addClass('active');
                });
                element.on('touchend', function () {
                    element.removeClass('active');
                })
            }
        }
    });

    md.directive('scrollTo', ['$ionicScrollDelegate', function ($ionicScrollDelegate) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var value = scope.$eval(attrs.scrollTo);
                var scrollInstance = $ionicScrollDelegate.$getByHandle(attrs.scrollToName);
                if (value)
                    scrollInstance.scrollTo(value);
            }
        }
    }]);

    md.directive('ngMin', function () {
        return {
            restrict: 'A',
            require: ['ngModel'],
            link: function (scope, element, attrs, controllers) {
                var ngModelController = controllers[0];
                scope.$watch($attr.ngMin, function watchNgMin(value) {
                    element.attr('min', value);
                    ngModelController.$render();
                })
            }

        }
    });
    md.directive('ngMax', function () {
        return {
            restrict: 'A',
            require: ['ngModel'],
            compile: function ($element, $attr) {
                return function linkDateTimeSelect(scope, element, attrs, controllers) {
                    var ngModelController = controllers[0];
                    scope.$watch($attr.ngMax, function watchNgMax(value) {
                        element.attr('max', value);
                        ngModelController.$render();
                    })
                }
            }
        }
    });

    md.directive('dynamicElement', ['$compile', '$timeout', function ($compile, $timeout) {
        return {
            restrict: 'E',
            template: '<div class="dynamic-element"></div>',
            replace: true,
            link: function (scope, element, attr) {
                var html = angular.element(scope.$eval(attr.html));
                element.append(html);
                $timeout(function () {
                    $compile(html)(scope);
                })
            }
        }
    }]);

    md.directive('focusCaret', ['$timeout', function ($timeout) {

        return {
            restrict: 'A',
            scope: {
                focusCaret: '&'
            },
            link: function (scope, element) {
                var timeout,
                    dom = element[0];
                element.on('focus', setCaret);
                scope.$on('$destroy', dispose);

                function onFocus() {
                    // $timeout.cancel(timeout);
                    // timeout = $timeout(setCaret, 0);

                }

                function setCaret() {
                    var arg = scope.focusCaret(),
                        int = (typeof arg !== 'number') ? NaN : (arg < 0) ? Math.ceil(arg) : Math.floor(arg),
                        length = (typeof dom.value === 'string') ? dom.value.length : 0,
                        index = isNaN(int) ? length : (int < 0) ? Math.max(0, length + int) : Math.min(length, int);
                    dom.setSelectionRange(index, index);
                }

                function dispose() {
                    // $timeout.cancel(timeout);
                    element.off('focus', onFocus);
                }
            }
        };
    }]);

    md.directive('appParse', [function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, ele, attr, ctrl) {
                ctrl.$parsers.push(function (input) {
                    if (input)
                        return input[attr.appParse];
                });
            }
        }
    }]);

    md.directive('appFormat', [function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, ele, attr, ctrl) {
                var aAttrValue = attr.appFormat.split('|');
                var map = scope.$eval(aAttrValue[0], scope);
                var key = aAttrValue[1];
                ctrl.$formatters.push(function (input) {
                    if (input != undefined) {
                        var filterObj = {}, filterObj2 = {};
                        //todo code/id为int值时出现的麻烦
                        filterObj[key] = input;
                        filterObj2[key] = parseInt(input);
                        return _.findWhere(map, filterObj) || _.findWhere(map, filterObj2);
                    }
                });
            }
        }

    }]);

    md.constant('imageViewConfig', {
        itemMargin: 2,
        itemWidth: 80
    });
    md.directive('imagesView', ['imageViewConfig', function (imageViewConfig) {
        return {
            restrict: 'E',
            templateUrl: 'views/com/components/images-view.html',
            replace: true,
            scope: {
                list: '=data',
                noWrap: '@'
            },

            link: function (scope, ele, attr) {

                scope.config = imageViewConfig;
                scope.getConStyle = function () {
                    if (scope.noWrap) {
                        var widthCalculated = imageViewConfig.itemWidth * scope.list.length + imageViewConfig.itemMargin * 2 * scope.list.length;
                        if (scope.list.length > 3) {
                            return {
                                width: widthCalculated + 'px'

                            }
                        }
                    }
                }
            }
        }
    }]);

    md.factory('back', ['$rootScope', '$ionicHistory', '$state', function ($rootScope, $ionicHistory, $state) {
        return function (backDefaultState, params) {
            if ($rootScope.from) {
                $state.go($rootScope.from, params || ($rootScope.fromParams || {}));
                return;
            }

            if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else if (backDefaultState) {
                $state.go(backDefaultState, params);
            } else {
                window.history.back();
            }
        }

    }]);

    md.directive('back', ['$rootScope', '$ionicHistory', '$state', 'back', function ($rootScope, $ionicHistory, $state, back) {
        return {
            restrict: 'A',
            link: function ($scope, $el, attr) {
                $el.on('click', function () {
                    back(attr.backDefaultState, $scope.$eval(attr.backParams));
                });
            }
        }
    }]);
    md.directive('hideTabs', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $el, attributes) {
                /*  console.log($scope.$eval(attributes.hideTabs));
                 $scope.$root.hideTabs = $scope.$eval(attributes.hideTabs);*/

                /*  $scope.$on('$ionicView.beforeLeave', function () {
                 $scope.$root.hideTabs = false;
                 console.log(1);
                 });*/
            }
        };
    }]);

    md.directive('contenteditable', ['$sce', function ($sce) {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) return; // do nothing if no ng-model

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
    }])

    md.directive('errorLabel', function () {
        return {
            require: '?ngModel',
            link: function (scope, el, attrs, ctrl) {
                if (!ctrl) return;
                ctrl.errorLabel = attrs.errorLabel;
                if (attrs.errorLabelType) {
                    ctrl.errorLabelType = attrs.errorLabelType;
                }

            }
        }
    });

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
                var reader;

                var allowedType = ['pdf', 'jpg', 'gif', 'png', 'jpeg', 'doc', 'docx'];
                if (!FileReader) return;

                element.on("change", function (changeEvent) {
                    if (reader) {
                        reader = null;
                    }

                    reader = new FileReader();
                    reader.onload = function (loadEvent) {

                        scope.$apply(function () {
                            scope.fileread = (loadEvent.target.result).match(/,(.*)$/)[1];
                            scope.readerSuccess({
                                fileData: {
                                    data: scope.fileread,
                                    info: scope.fileInfo,
                                    type: scope.fileType
                                }
                            })
                        });
                    };
                    if (changeEvent.target.files[0].size > 1024 * 1000 * 4) {
                        scope.readerError({msg: '请上传小于4m的文件'});
                        scope.fileInfo = null;
                        scope.fileread = null;
                        return
                    }
                    var fileType = changeEvent.target.files[0].name.split('.').pop().toLowerCase();

                    if (allowedType.indexOf(fileType) < 0) {
                        scope.readerError({msg: '请上传正确的格式'});
                        scope.fileInfo = null;
                        scope.fileread = null;
                        return false;
                    }

                    scope.$apply(function () {
                        scope.fileInfo = changeEvent.target.files[0];
                        scope.fileType = fileType;
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
    md.directive('stopPropagation', [function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attr) {
                ele.on('click.stp', function (e) {
                    e.stopPropagation();
                });

                ele.on('touchstart.stp', function (e) {
                    e.stopPropagation();
                });

                /*      scope.$on('$destroy',function(){
                 ele.off('click.stp');
                 ele.off('touchstart.stp')
                 })*/

            }
        }

    }]);

});