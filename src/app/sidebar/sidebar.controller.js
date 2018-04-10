(function(angular) {
    'use strict';
    angular.module('app.sidebar')
        .controller('app.sidebar.SidebarController', SidebarController);
    SidebarController.$inject = [];

    function SidebarController() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'this is sidebar';
        }
    }
})(angular);
