(function(angular) {
    'use strict';
    angular.module('app.header').component('header', {
        controller: 'app.header.HeaderController',
        controllerAs: 'vm',
        templateUrl: 'app.header.template.html'
    });
})(angular);
