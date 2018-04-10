(function(angular) {
    'use strict';
    angular.module('app.registration')
        .controller('app.registration.RegistrationController', RegistrationController);
    RegistrationController.$inject = [];

    function RegistrationController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'registration';
        }
    }
})(angular);
