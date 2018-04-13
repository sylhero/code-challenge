(function(angular) {
    'use strict';
    angular.module('app.header')
        .controller('app.header.HeaderController', HeaderController);
    HeaderController.$inject = ['$state', '$stateParams', 'app.StateConstant'];

    function HeaderController($state, $stateParams, StateConstant) {
        var vm = this;
        vm.$onInit = init;
        vm.logout = logout;

        function init() {
            vm.theme = $stateParams.theme;
        }
        function logout() {
            //TODO delete user token in the localstorage
            $state.go(StateConstant.LOGIN);

        }

    }
})(angular);
