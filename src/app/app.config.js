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
                url: '/account',
                views: {
                    'main@': {
                        component: 'account'
                    }
                }
            });

            $stateProvider.state(StateConstant.LEADS, {
                url: '/leads',
                views: {
                    'main@': {
                        component: 'leads'
                    }
                }
            });

            $stateProvider.state(StateConstant.ERROR_401, {
                url: '/401',
                views: {
                    'main@': {
                        component: 'error401'
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
