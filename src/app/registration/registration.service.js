(function(angular) {
    'use strict';
    angular.module('app.registration')
        .service('app.registration.RegistrationService', RegistrationService);
    RegistrationService.$inject = ['app.registration.RegistrationFactory'];

    function RegistrationService(RegistrationFactory) {
        var svc = this;
        svc.registration = registration;

        function registration(fullName, phone, email, password, theme) {
            return RegistrationFactory.registration()
                .register({
                    fullName: fullName,
                    phone: phone,
                    email: email,
                    password: password,
                    theme: theme
                }).$promise;
        }
    }
})(angular);
