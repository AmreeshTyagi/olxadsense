angular.module('olxadsense', ['ionic', 'olxadsense.controllers', 'firebase'])
    .factory('tokenInjector', [function () {
        var tokenInjector = {
            request: function (config) {
                if (window.sessionStorage['auth_token'] != null || typeof window.sessionStorage['auth_token'] != 'undefined') {
                    config.headers['olx-auth-token'] = window.sessionStorage['auth_token'];
                    config.headers['olx-user-id'] = window.sessionStorage['user_id'];
                }
                return config;
            }
        };
        return tokenInjector;
    }])
    .config(function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('tokenInjector');
    }])
    .run(function ($rootScope, $state, $ionicPlatform, $window, $firebase, $http) {
        //        var ref = new Firebase("https://olxadsense.firebaseio.com");

        //        var fb = $firebase(ref);

        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        $rootScope.cities = [
            {
                id: 1,
                city: 'Noida',
                desc: 'Noida city!',
                lat: 28.5355161,
                long: 77.3910265
    },
            {
                id: 2,
                city: 'Delhi',
                desc: 'Capital of India',
                lat: 28.7040592,
                long: 77.1024902
    },
            {
                id: 3,
                city: 'Mumbai',
                desc: 'Mumbai..!',
                lat: 19.0759837,
                long: 72.8776559
    },
            {
                id: 4,
                city: 'Bangalore',
                desc: 'Bangalore..!',
                lat: 12.9715987,
                long: 77.5945627
    }
];

    })
    .config(function ($stateProvider, $urlRouterProvider) {
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