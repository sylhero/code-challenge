(function(angular) {
    'use strict';
    angular.module('app.login')
        .service('app.login.LoginService', LoginService);
    LoginService.$inject = ['app.login.LoginFactory'];

    function LoginService(LoginFactory) {
        var svc = this;
        svc.login = login;

        function login(email, password) {
            return LoginFactory.login()
                .auth({
                    email: email,
                    password: password
                }).$promise;
        }
    }
})(angular);
