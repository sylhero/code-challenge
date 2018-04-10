(function(angular) {
    'use strict';
    angular.module('app.error404').component('error404', {
        controller: 'app.error404.Error404Controller',
        controllerAs: 'vm',
        templateUrl: 'app.error404.template.html'
    });
})(angular);
