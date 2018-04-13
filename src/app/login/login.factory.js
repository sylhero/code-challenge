(function(angular) {
    'use strict';
    angular.module('app.login')
        .factory('app.login.LoginFactory', LoginFactory);
    LoginFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function LoginFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            login: login
        };

        function login() {
            var url = '/clients/login/';
            return $resource(baseUrl + url, {}, {
                auth: {
                    method: 'POST',
                    headers: {
                        'X-Api-Token': 'yulong-song',
                        'Content-Type': 'application/json'
                    }
                }
            });
        }
    }

})(angular);
