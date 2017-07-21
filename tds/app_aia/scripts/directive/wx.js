define(['app','service/log'], function (md) {

    md.directive('wxPreviewImg', ['log',function (log) {
        return {
            restrict: 'A',

            link: function ($scope, $el, attr) {
                $el.on('click', function (e) {
                    e.stopPropagation();
                    var images = $el.find('img'), localIds = [];
                    _.each(images, function (img) {
                        localIds.push(getFullImgUrl(img));
                    });
                    var index = _.indexOf(images, e.target);
                    if (index > -1) {
                        wx.previewImage({
                            current: localIds[index],
                            urls: localIds
                        });
                    }
                });

                $scope.$on('$destroy', function () {
                    $el.off('click')
                });

                function getFullImgUrl(img) {
                    if (img.getAttribute('data-full-href')) {
                        return location.origin + img.getAttribute('data-full-href');
                    } else {
                        return img.src;
                    }
                }

            }

        }

    }]);

    md.directive('wxMap', [function () {
        return {
            restrict: 'A',
            link: function ($scope, $el, attr) {
                $el.on('click', function (e) {
                    e.stopPropagation();
                    var option = $scope.$eval(attr.wxMap);
                    wx.openLocation(option);
                });

                $scope.$on('$destroy', function () {
                    $el.off('click')
                })

            }

        }

    }]);

    md.directive('wxChooseImg', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function ($scope, $el, attr, ctrl) {

                $el.on('click', function (e) {
                    var maxLength = $scope.$eval(attr.wxChooseImgMaxLength) || 9;

                    wx.chooseImage({
                        count: maxLength, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                            $rootScope.$apply(function () {
                                ctrl.$setViewValue(res.localIds);
                            })
                        },
                        fail:function (err) {
                            log('wx_choose_image_error',res);
                        }

                    });

                });

                $scope.$on('$destroy', function () {
                    $el.off('click')
                })

            }

        }
    }]);
});

