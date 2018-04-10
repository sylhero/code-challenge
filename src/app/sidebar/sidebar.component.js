(function(angular) {
    'use strict';
    angular.module('app.sidebar').component('sidebar', {
        controller: 'app.sidebar.SidebarController',
        controllerAs: 'vm',
        templateUrl: 'app.sidebar.template.html'
    });
})(angular);
