(function(angular) {
    'use strict';
    angular.module('app.header')
        .controller('app.header.HeaderController', HeaderController);
    HeaderController.$inject = [
        '$state',
        'app.StateConstant'];

    function HeaderController($state, StateConstant) {
        var vm = this;
        vm.$onInit = init;
        vm.logout = logout;

        function init() {
            vm.user = {
                theme: 'pink'
            };
        }
        function logout() {
            //TODO delete user token in the localstorage
            $state.go(StateConstant.LOGIN);

        }

    }
})(angular);
