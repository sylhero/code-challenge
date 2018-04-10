(function(angular) {
    'use strict';
    angular.module('app.account')
        .controller('app.account.AccountController', AccountController);
    AccountController.$inject = [];

    function AccountController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'this is account';
        }
    }
})(angular);
