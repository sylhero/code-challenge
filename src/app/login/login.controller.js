(function(angular) {
    'use strict';
    angular.module('app.login')
        .controller('app.login.LoginController', LoginController);
    LoginController.$inject = [
        '$state',
        'app.StateConstant',
        'app.login.LoginService',
        'app.common.CommonService'];

    function LoginController($state, StateConstant, LoginService, CommonService) {
        var vm = this;
        vm.$onInit = init;
        vm.submit = submit;
        function init() {
            vm.user = {
                email: '',
                password: ''
            };
            vm.isLoading = false;
            CommonService.setPageTitle('Login');
        }
        function submit() {
            vm.isLoading = true;
            LoginService.login(vm.user.email, vm.user.password).then(function() {
                $state.go(StateConstant.LEADS);
            }, function(error) {
                vm.isLoading = false;
                CommonService.showToast('Opps! Please try again later');
            });
        }

    }
})(angular);
