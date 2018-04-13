(function(angular) {
    'use strict';
    angular.module('app.account.password-reset')
        .controller('app.account.password-reset.PasswordResetController', PasswordResetController);
    PasswordResetController.$inject = [
        '$stateParams',
        'app.account.password-reset.PasswordResetService',
        'app.common.CommonService'];

    function PasswordResetController($stateParams, PasswordResetService, CommonService) {
        var vm = this;
        vm.$onInit = init;
        vm.submit = submit;
        vm.match = match;

        function init() {
            vm.theme = $stateParams.theme;
            vm.isLoading = false;
        }

        function match() {
            var result = vm.desiredPassword === vm.confirmedPassword;
            if (!result) {
                CommonService.showToast('Opps! Your passwords don\'t match');
            }
            return result;
        }

        function submit() {
            vm.isLoading = true;
            PasswordResetService.updatePassword($stateParams.id,
                $stateParams.token, vm.desiredPassword).then(function() {
                CommonService.showToast('Success! Your password has been updated!');
                vm.isLoading = false;
            }, function() {
                vm.isLoading = false;
                CommonService.showToast('Opps! Please try again later');
            });
        }
    }
})(angular);
