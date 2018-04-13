(function(angular) {
    'use strict';
    angular.module('app.sidebar')
        .controller('app.sidebar.SidebarController', SidebarController);
    SidebarController.$inject = ['$state', '$stateParams', 'app.StateConstant'];

    function SidebarController($state, $stateParams, StateConstant) {
        var vm = this;
        vm.$onInit = init;
        vm.goToLeads = goToLeads;
        vm.goToAccount = goToAccount;

        function init() {
            vm.theme = $stateParams.theme;
        }
        function goToLeads() {
            $state.go(StateConstant.LEADS, {theme: vm.theme, id: $stateParams.id, token: $stateParams.token});
        }

        function goToAccount() {
            $state.go(StateConstant.ACCOUNT, {theme: vm.theme, id: $stateParams.id, token: $stateParams.token});
        }
    }
})(angular);
