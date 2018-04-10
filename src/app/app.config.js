(function(angular) {
    'use strict';

    angular.module('app').config([
        '$stateProvider',
        '$urlRouterProvider',
        'cfpLoadingBarProvider',
        'app.StateConstant',
        '$locationProvider',
        '$urlMatcherFactoryProvider',
        function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider,
            StateConstant, $locationProvider, $urlMatcherFactoryProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
            $urlMatcherFactoryProvider.strictMode(false);

            $stateProvider.state(StateConstant.APP, {
                abstract: true
            });
            $stateProvider.state(StateConstant.APP_LOGIN, {
                url: '/login',
                views: {
                    'main@': {
                        component: 'loginComponent'
                    }
                }
            });

            $stateProvider.state(StateConstant.APP_REGISTRATION, {
                url: '/registration',
                views: {
                    'main@': {
                        component: 'registrationComponent'
                    }
                }
            });

            $stateProvider.state(StateConstant.APP_ACCOUNT, {
                url: '/account',
                views: {
                    'main@': {
                        component: 'accountComponent'
                    }
                }
            });

            $stateProvider.state(StateConstant.APP_401, {
                url: '/401',
                views: {
                    'main@': {
                        component: 'error401Component'
                    }
                }
            });

            $stateProvider.state(StateConstant.APP_404, {
                url: '/404',
                views: {
                    'main@': {
                        component: 'error404Component'
                    }
                }
            });

            $urlRouterProvider.otherwise('/404');
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }
    ]);
})(angular);