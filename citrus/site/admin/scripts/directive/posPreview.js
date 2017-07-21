define(['app', 'angular'], function (md, angular) {
    md.directive('posPreview', ['$document',function ($document) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/pos-preview.html',
            scope: {
                data: '=',
                isShow: '='
            },
            link: function (scope, ele, attr) {

                var vm = scope.vm = {};
                vm.pos = scope.data;

                scope.close = function () {
                    scope.isShow = false;
                };

                scope.$on('$destroy',function(){
                    $document.off('click.posPreview');
                });

                $document.on('click.posPreview',function(){
                    scope.$apply(function(){
                        scope.close();
                    });
                })

            }
        }

    }]);

});
