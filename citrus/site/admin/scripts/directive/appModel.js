define(['app', 'angular'], function (md, angular) {

    /**
     * appParse
     * 添加而且parser 把viewValue复杂数据结构转换为简单的modelValue数据结构；
     * @param {String} app-parser 传递给modelValue的key值；
     * 如viewValue为{label:'本科',code:'5'}
     * dom添加属性：app-parse="code";将通过ngModelController.$parsers向modelValue传递值为'5';
     */
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

    /**
     * appFormat
     * 添加而且formatter 把modelValue简单数据结构转换为相对复杂的modelValue数据结构；
     * @param {String} app-format 传递给viewValue的key值以及view的映射表；
     * 如modelValue为 '5'；vm.edu=[{code:1,label:'小学'},{code:5:label:'本科'},....]
     * dom添加属性 app-format="vm.edu|code";将通过ngModelController.$formatter 向modelValue传递值为{code:5:label:'本科'};
     *  app-format="vm.edu|code"中 前半部分"vm.edu"为隐射表，后半部分code为通过key值用来找到相应的数据；
     */

    md.directive('appFormat', [function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, ele, attr, ctrl) {
                var aAttrValue = attr.appFormat.split('|');
                var map = scope.$eval(aAttrValue[0], scope);
                var key = aAttrValue[1];
                ctrl.$formatters.push(function (input) {
                    if (input!=undefined) {
                        var filterObj = {}, filterObj2 = {};
                        //todo code/id为int值时出现的麻烦
                        filterObj[key] = input;
                        filterObj2[key] = parseInt(input);
                        return _.findWhere(map, filterObj)||_.findWhere(map, filterObj2);
                    }
                });
            }
        }

    }]);

});
