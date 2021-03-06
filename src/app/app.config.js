(function(angular) {
    'use strict';

    angular.module('app').config([
        '$stateProvider',
        '$urlRouterProvider',
        'cfpLoadingBarProvider',
        'app.StateConstant',
        '$locationProvider',
        '$urlMatcherFactoryProvider',
        '$mdThemingProvider',
        function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider,
            StateConstant, $locationProvider, $urlMatcherFactoryProvider,
            $mdThemingProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
            $urlMatcherFactoryProvider.strictMode(false);
            $mdThemingProvider.theme('pink')
            .primaryPalette('pink');
            $mdThemingProvider.theme('blue')
            .primaryPalette('blue');
            var params = {
                theme: {
                    squash: true,
                    value: null
                },
                id: {
                    squash: true,
                    value: null
                },
                token: {
                    squash: true,
                    value: null
                }
            };
            //TODO imlement routing guard by resolving token authentication here
            $stateProvider.state(StateConstant.APP, {
                abstract: true
            });
            $stateProvider.state(StateConstant.LOGIN, {
                url: '/login',
                views: {
                    'main@': {
                        component: 'login'
                    }
                }
            });

            $stateProvider.state(StateConstant.REGISTRATION, {
                url: '/registration',
                views: {
                    'main@': {
                        component: 'registration'
                    }
                }
            });

            $stateProvider.state(StateConstant.ACCOUNT, {
                url: '/account?theme&id&token',
                params: params,
                views: {
                    'header@': {
                        component: 'header'
                    },
                    'main@': {
                        component: 'account'
                    },
                    'sidebar@': {
                        component: 'sidebar'
                    },
                    'footer@': {
                        component: 'footer'
                    }
                }
            });

            $stateProvider.state(StateConstant.LEADS, {
                url: '/leads?theme&id&token',
                params: params,
                views: {
                    'header@': {
                        component: 'header'
                    },
                    'main@': {
                        component: 'leads'
                    },
                    'sidebar@': {
                        component: 'sidebar'
                    },
                    'footer@': {
                        component: 'footer'
                    }
                }
            });

            $stateProvider.state(StateConstant.ERROR_404, {
                url: '/404',
                views: {
                    'main@': {
                        component: 'error404'
                    }
                }
            });
            $urlRouterProvider.when('/', '/login');
            $urlRouterProvider.otherwise('/404');
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }
    ]);
})(angular);
