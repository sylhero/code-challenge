(function(angular) {
    'use strict';
    angular.module('app.account.password-reset').component('passwordReset', {
        controller: 'app.account.password-reset.PasswordResetController',
        controllerAs: 'vm',
        templateUrl: 'app.account.password-reset.template.html'
    });
})(angular);
