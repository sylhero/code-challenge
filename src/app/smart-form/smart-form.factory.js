(function(angular) {
    'use strict';
    angular.module('app.smart-form')
        .factory('app.smart-form.SmartFormFactory', SmartFormFactory);
    SmartFormFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function SmartFormFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            registration: registration,
            updateInfo: updateInfo,
            getUser: getUser
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
        function getUser(token) {
            var url = '/clients/:id/';
            return $resource(baseUrl + url, {
                id: '@id'
            }, {
                get: {
                    method: 'GET',
                    headers: {
                        'X-Api-Token': 'yulong-song',
                        'Content-Type': 'application/json',
                        'X-Login-Token': token
                    }
                }
            });
        }
        function updateInfo(token) {
            var url = '/clients/:client_id/';
            return $resource(baseUrl + url, {
                /*jshint camelcase: false */
                client_id: '@client_id'
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
