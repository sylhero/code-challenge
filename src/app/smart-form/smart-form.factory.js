(function(angular) {
    'use strict';
    angular.module('app.smart-form')
        .factory('app.smart-form.SmartFormFactory', SmartFormFactory);
    SmartFormFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function SmartFormFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            registration: registration,
            updateInfo: updateInfo
        };

        function registration() {
            var url = '/clients/';
            return $resource(baseUrl + url, {}, {
                register: {
                    method: 'POST',
                    headers: {
                        'X-Api-Token': 'yulong-song',
                        'Content-Type': 'application/json'
                    }
                }
            });
        }

        function updateInfo(token) {
            var url = '/clients/:id/';
            return $resource(baseUrl + url, {
                id: '@id'
            }, {
                update: {
                    method: 'PUT',
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
