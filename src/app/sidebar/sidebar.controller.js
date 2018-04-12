(function(angular) {
    'use strict';
    angular.module('app.sidebar')
        .controller('app.sidebar.SidebarController', SidebarController);
    SidebarController.$inject = ['$state',
        'app.StateConstant'];

    function SidebarController($state, StateConstant) {
        var vm = this;
        vm.goToLeads = goToLeads;
        vm.goToAccount = goToAccount;

        function goToLeads() {
            $state.go(StateConstant.LEADS);
        }

        function goToAccount() {
            $state.go(StateConstant.ACCOUNT);
        }
    }
})(angular);
