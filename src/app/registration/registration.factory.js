(function(angular) {
    'use strict';
    angular.module('app.registration')
        .factory('app.registration.RegistrationFactory', RegistrationFactory);
    RegistrationFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function RegistrationFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            registration: registration
        };

        function registration() {
            var url = '/clients/';
            return $resource(baseUrl + url, {
                /* jshint ignore:start */
                full_name: '@fullName',
                /* jshint ignore:end */
                phone: '@phone',
                email: '@email',
                password: '@password',
                template: '@theme'
            }, {
                register: {
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
