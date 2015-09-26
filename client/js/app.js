angular.module('olxadsense', ['ionic', 'olxadsense.controllers', 'firebase'])
    .factory('tokenInjector', [function() {
        var tokenInjector = {
            request: function(config) {
                if (window.sessionStorage['auth_token'] != null || typeof window.sessionStorage['auth_token'] != 'undefined') {
                    config.headers['olx-auth-token'] = window.sessionStorage['auth_token'];
                    config.headers['olx-user-id'] = window.sessionStorage['user_id'];
                }
                return config;
            }
        };
        return tokenInjector;
    }])
    .config(function($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('tokenInjector');
    }])
    .run(function($rootScope, $state, $ionicPlatform, $window, $firebase, $http) {
//        var ref = new Firebase("https://olxadsense.firebaseio.com");

//        var fb = $firebase(ref);

        $ionicPlatform.ready(function() {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/tabs.html",
            controller: "AppCtrl"
        })
        .state('app.home', {
            url: "/home",
            views: {
                'tab-home': {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                }
            }
        })

        // fallback route
        $urlRouterProvider.otherwise('/app/home');

    });
