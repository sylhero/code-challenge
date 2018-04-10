(function(angular) {
    'use strict';
    angular.module('app.error404')
        .controller('app.error404.Error404Controller', Error404Controller);
    Error404Controller.$inject = [];

    function Error404Controller() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'this is error404';
        }
    }
})(angular);
