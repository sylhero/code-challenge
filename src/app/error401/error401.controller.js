(function(angular) {
    'use strict';
    angular.module('app.error401')
        .controller('app.error401.Error401Controller', Error401Controller);
    Error401Controller.$inject = [];

    function Error401Controller() {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.test = 'this is error401';
        }
    }
})(angular);
