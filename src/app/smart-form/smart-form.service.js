(function(angular) {
    'use strict';
    angular.module('app.smart-form')
        .service('app.smart-form.SmartFormService', SmartFormService);
    SmartFormService.$inject = ['app.smart-form.SmartFormFactory'];

    function SmartFormService(SmartFormFactory) {
        var svc = this;
        svc.registration = registration;
        svc.updateInfo = updateInfo;

        function registration(fullName, phone, email, password, theme) {
            return SmartFormFactory.registration()
                .register({
                    fullName: fullName,
                    phone: phone,
                    email: email,
                    password: password,
                    theme: theme
                }).$promise;
        }

        function updateInfo(id, fullName, phone, email, theme, token) {
            return SmartFormFactory.updateInfo(token)
                .update({
                    id: id,
                    fullName: fullName,
                    phone: phone,
                    email: email,
                    theme: theme
                }).$promise;
        }
    }
})(angular);
