(function(angular) {
    'use strict';
    angular.module('app.account.password-reset')
        .service('app.account.password-reset.PasswordResetService', PasswordResetService);
    PasswordResetService.$inject = ['app.account.password-reset.PasswordResetFactory'];

    function PasswordResetService(PasswordResetFactory) {
        var svc = this;
        svc.updatePassword = updatePassword;

        function updatePassword(id, token, password) {
            return PasswordResetFactory.updatePassword(token)
                .update({
                    id: id,
                    password: password
                }).$promise;
        }
    }
})(angular);
