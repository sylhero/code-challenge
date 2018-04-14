(function(angular) {
    'use strict';
    angular.module('app.footer')
        .controller('app.footer.FooterController', FooterController);
    FooterController.$inject = ['$stateParams'];

    function FooterController($stateParams) {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.theme = $stateParams.theme;
        }
    }
})(angular);
