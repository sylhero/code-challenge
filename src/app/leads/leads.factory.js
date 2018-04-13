(function(angular) {
    'use strict';
    angular.module('app.leads')
        .factory('app.leads.LeadsFactory', LeadsFactory);
    LeadsFactory.$inject = ['app.common.CommonConstant', '$resource'];

    function LeadsFactory(CommonConstant, $resource) {
        var baseUrl = CommonConstant.BASE_URL;
        return {
            getLeads: getLeads
        };

        function getLeads() {
            var url = '/leads';
            return $resource(baseUrl + url, {}, {
                leads: {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'X-Api-Token': 'yulong-song',
                        'Content-Type': 'application/json'
                    }
                }
            });
        }
    }

})(angular);
