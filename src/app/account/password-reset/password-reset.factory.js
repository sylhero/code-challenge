(function(angular) {
    'use strict';
    angular.module('app.account.password-reset')
        .factory('app.account.password-reset.PasswordResetFactory', PasswordResetFactory);
    PasswordResetFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function PasswordResetFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            updatePassword: updatePassword
        };

        function updatePassword(token) {
            var url = '/clients/:id/password';
            return $resource(baseUrl + url, {
                id: '@id'
            }, {
                update: {
                    method: 'PATCH',
                    headers: {
                        'X-Api-Token': 'yulong-song',
                        'Content-Type': 'application/json',
                        'X-Login-Token': token
                    }
                }
            });
        }
    }

})(angular);
