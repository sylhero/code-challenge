(function(angular) {
    'use strict';
    angular.module('app.login')
        .controller('app.login.LoginController', LoginController);
    LoginController.$inject = [];

    function LoginController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.user = {
                username: '',
                password: ''
            };
        }
    }
})(angular);
