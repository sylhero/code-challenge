(function(angular) {
    'use strict';
    angular.module('app.leads').component('leads', {
        controller: 'app.leads.LeadsController',
        controllerAs: 'vm',
        templateUrl: 'app.leads.template.html'
    });
})(angular);
