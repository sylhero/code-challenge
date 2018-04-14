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
                //TODO use the actual data when integrate with the backend
                $state.go(StateConstant.LEADS, {
                    theme: 'pink',
                    token: 'b89720c634d64763b434f8efc3dbe4f2',
                    id: 0
                });

            }, function() {
                vm.isLoading = false;
                CommonService.showToast('Opps! Please try again later');
            });
        }

    }
})(angular);
