(function(angular) {
    'use strict';
    angular.module('app.registration')
        .controller('app.registration.RegistrationController', RegistrationController);
    RegistrationController.$inject = [
        '$state',
        'app.StateConstant',
        'app.registration.RegistrationService',
        'app.common.CommonService'];

    function RegistrationController($state, StateConstant, RegistrationService, CommonService) {
        var vm = this;
        vm.$onInit = init;
        vm.submit = submit;
        function init() {
            vm.user = {
                fullName: '',
                phone: '',
                email: '',
                password: '',
                scheme: ''
            };
            vm.isLoading = false;
        }
        function submit() {
            vm.isLoading = true;
            RegistrationService.registration(vm.user.fullName,
                vm.user.phone, vm.user.email, vm.user.password, vm.user.theme).then(function() {
                $state.go(StateConstant.LOGIN);
            }, function(error) {
                vm.isLoading = false;
                CommonService.showToast('Opps! Please try again later');
            });
        }
    }
})(angular);
