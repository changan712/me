define(['app', 'service/position'], function (md) {
    md.directive('comment', ['position', function (position) {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/comment.html',
            scope: {
                isShow: '='
            },
            link: function (scope, ele, attr) {
                scope.commentTxt = '';

                scope.close = function () {
                    scope.isShow = false;
                };

                scope.submit = function () {

                };

                scope.getRemain = function () {
                    return 144 - scope.commentTxt.length;
                };

                scope.commentList = [
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试'
                    },
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
                    },
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试'
                    },
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试'
                    },
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试'
                    },
                    {
                        user_name: 'yy',
                        release_date: 545454544,
                        content: '测试测试测试测试'
                    }


                ]


                function getStrLeng(str) {
                    var realLength = 0;
                    var len = str.length;
                    var charCode = -1;
                    for (var i = 0; i < len; i++) {
                        charCode = str.charCodeAt(i);
                        if (charCode >= 0 && charCode <= 128) {
                            realLength += 1;
                        } else {
                            // 如果是中文则长度加3
                            realLength += 3;
                        }
                    }
                    return realLength;
                }

            }


        };


    }]);
});