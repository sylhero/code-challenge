(function(angular) {
    'use strict';
    angular.module('app.account').component('account', {
        controller: 'app.account.AccountController',
        controllerAs: 'vm',
        templateUrl: 'app.account.template.html'
    });
})(angular);
