(function(angular) {
    'use strict';
    angular.module('app.smart-form')
        .controller('app.smart-form.SmartFormController', SmartFormController);
    SmartFormController.$inject = [
        '$state',
        '$stateParams',
        'app.StateConstant',
        'app.smart-form.SmartFormService',
        'app.common.CommonService'];

    function SmartFormController($state, $stateParams, StateConstant, SmartFormService, CommonService) {
        var vm = this;
        vm.$onInit = init;
        vm.submit = submit;
        function init() {
            vm.user = {
                fullName: '',
                phone: '',
                email: '',
                password: '',
                theme: $stateParams.theme || ''
            };
            if (vm.formType === 'registration') {
                vm.submitLabel = 'Create Account';
            }else {
                vm.submitLabel = 'Update Info';
                SmartFormService.getUser($stateParams.id, $stateParams.token).then(function(data) {
                    vm.user.email = data.email;
                    /*jshint camelcase: false */
                    vm.user.fullName = data.full_name;
                    vm.user.phone = data.phone;
                    vm.user.theme = data.template;
                }, function() {
                    CommonService.showToast('Opps! Please try again later');
                });
            }
            vm.isLoading = false;
        }
        function submit() {
            vm.isLoading = true;
            if (vm.formType === 'registration') {
                SmartFormService.registration(vm.user.fullName,
                    vm.user.email, vm.user.phone, vm.user.theme).then(function() {
                    $state.go(StateConstant.LOGIN);
                }, function() {
                    vm.isLoading = false;
                    CommonService.showToast('Opps! Please try again later');
                });
            } else {
                SmartFormService.updateInfo($stateParams.id, vm.user.fullName,
                    vm.user.phone, vm.user.email, vm.user.theme, $stateParams.token).then(function() {
                        vm.isLoading = false;
                        CommonService.showToast('Success! Your personal info has been updated!');
                    }, function() {
                        vm.isLoading = false;
                        CommonService.showToast('Opps! Please try again later');
                    });
            }

        }
    }
})(angular);
