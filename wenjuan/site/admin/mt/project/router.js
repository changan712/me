define([
    'main/controller',
    'main/filter/values'
], function () {
    return function ($stateProvider, $urlRouterProvider, $controllerProvider, ROUTER_AUTH) {
        $stateProvider
            .state('login', {
                url: '/login',
                //templateUrl: 'project/main/views/login.html',
                //controller: 'LoginController'
                templateUrl: 'project/main/views/local_login.html',
                controller: 'LocalLoginController'
            })
            .state('local_login', {
                url: '/local_login',
                templateUrl: 'project/main/views/local_login.html',
                controller: 'LocalLoginController'
            })
            /*
             根据url /[module]/[controller] 形式，动态加载controller和view
             其中module和controller为驼峰形式命名
             */
            .state('app', {
                url: '/app',
                templateUrl: 'project/main/views/app.html',
                controller: 'AppController'
            })
            .state('app.general', {
                url: '/:module/:controller',
                // the url and the controller name are dynamically created
                templateUrl: function ($stateParams) {
                    console.log($stateParams)
                    return 'project/' + $stateParams.module + "/views/" + $stateParams.controller + ".html";
                },
                controllerProvider: function ($stateParams) {
                    return $stateParams.module + capitalizeFirstLetter($stateParams.controller) + 'Controller';
                },
                resolve: {
                    'ctrl': ['$q', '$stateParams', function ($q, $stateParams) {
                        var script = $stateParams.module + "/" + 'controller';
                        var deferred = $q.defer();
                        require([script], function () {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state('app.general_id', {
                url: '/:module/:controller/:id',
                // the url and the controller name are dynamically created
                templateUrl: function ($stateParams) {
                    return 'project/' + $stateParams.module + "/views/" + $stateParams.controller + ".html";
                },
                controllerProvider: function ($stateParams) {
                    return $stateParams.module + capitalizeFirstLetter($stateParams.controller) + 'Controller';
                },
                resolve: {
                    'ctrl': ['$q', '$stateParams', function ($q, $stateParams) {
                        var script = $stateParams.module + "/" + 'controller';
                        var deferred = $q.defer();
                        require([script], function () {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }]
                }
            })

            .state('404', {
                url: '/404',
                auth: 0,
                templateUrl: 'views/com/404.html',
                controller: '404Ctrl'
            });
        /*  $urlRouterProvider.when('/', '/app/index');
         $urlRouterProvider.when('', '/app/index');*/
        // $urlRouterProvider.when('management.developer.msg', '/index');

        $urlRouterProvider.otherwise(function ($injector) {
            location = "#/app/user/list";
        });

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function camelToDash(string) {
            return string.replace(/([A-Z])/g, function ($1) {
                return "-" + $1.toLowerCase();
            });
        }

    };


});