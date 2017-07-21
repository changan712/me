define(['app'], function (md) {
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
});
