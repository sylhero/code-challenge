(function(angular) {
    'use strict';
    angular.module('app.leads')
        .controller('app.leads.LeadsController', LeadsController);
    LeadsController.$inject = [];

    function LeadsController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'this is leads';
        }
    }
})(angular);
