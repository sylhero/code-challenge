(function(angular) {
    'use strict';
    angular.module('app.smart-form')
        .service('app.smart-form.SmartFormService', SmartFormService);
    SmartFormService.$inject = ['app.smart-form.SmartFormFactory'];

    function SmartFormService(SmartFormFactory) {
        var svc = this;
        svc.registration = registration;
        svc.updateInfo = updateInfo;
        svc.getUser = getUser;

        function registration(fullName, email, phone, theme) {
            return SmartFormFactory.registration()
                .register({
                    /*jshint camelcase: false */
                    full_name: fullName,
                    email: email,
                    phone: phone,
                    template: theme
                }).$promise;
        }

        function getUser(id, token) {
            return SmartFormFactory.getUser(token)
                .get({
                    id: id
                }).$promise;
        }

        function updateInfo(id, fullName, phone, email, theme, token) {
            return SmartFormFactory.updateInfo(token)
                .update({
                    /*jshint camelcase: false */
                    client_id: parseInt(id),
                    /*jshint camelcase: false */
                    full_name: fullName,
                    phone: phone,
                    email: email,
                    template: theme
                }).$promise;
        }
    }
})(angular);
