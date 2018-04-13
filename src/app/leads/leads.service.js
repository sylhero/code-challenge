(function(angular) {
    'use strict';
    angular.module('app.leads')
        .service('app.leads.LeadsService', LeadsService);
    LeadsService.$inject = ['app.leads.LeadsFactory'];

    function LeadsService(LeadsFactory) {
        var svc = this;
        svc.getLeads = getLeads;

        function getLeads() {
            return LeadsFactory.getLeads()
                .leads().$promise;
        }
    }
})(angular);
