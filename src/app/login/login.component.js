(function(angular) {
    'use strict';
    angular.module('app.login').component('login', {
        controller: 'app.login.LoginController',
        controllerAs: 'vm',
        templateUrl: 'app.login.template.html'
    });
})(angular);
