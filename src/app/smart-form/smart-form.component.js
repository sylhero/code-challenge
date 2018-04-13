(function(angular) {
    'use strict';
    angular.module('app.smart-form').component('smartForm', {
        bindings: {
            formType: '@'
        },
        controller: 'app.smart-form.SmartFormController',
        controllerAs: 'vm',
        templateUrl: 'app.smart-form.template.html',
        transclude: true
    });
})(angular);
