define(['app', 'kindeditor'], function (md) {


    md.directive('um', function ($window, $rootScope) {

        var linkFn = function (scope, elm, attr, ctrl) {
            if (!ctrl) return;
            if (typeof window.KindEditor === 'undefined') {
                console.error('Please import the local resources of kindeditor!');
                return;
            }
            var editor;

            var _config = {
                width: '100%',
                autoHeightMode: true,
                items:[
                    'source', '|', 'undo', 'redo', '|', 'preview', 'template', 'code', 'cut', 'copy', 'paste',
                    'plainpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                    'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                    'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'table',
                    'hr', 'emoticons', 'baidumap', 'pagebreak',
                    'anchor', 'link', 'unlink'
                ]
            };


            var editorId = elm[0],
                editorConfig = angular.extend(_config, scope.config);

            editorConfig.afterChange = function () {
                var that = this;
                if (that.html()){
                    ctrl.$setViewValue(that.html());
                }
            };

            editor = KindEditor.create(editorId, editorConfig);

            ctrl.$render = function () {
                if (ctrl.$modelValue){
                    editor.html(ctrl.$modelValue);
                }
            };


            /*    var evt = document.createEvent('Event');
             evt.initEvent('load', false, false);
             window.dispatchEvent(evt);*/


        };

        return {
            restrict: 'A',
            require: '?^ngModel',

            scope: {},
            link: linkFn
        };
    });

});