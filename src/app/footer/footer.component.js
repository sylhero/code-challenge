(function(angular) {
    'use strict';
    angular.module('app.footer').component('footer', {
        controller: 'app.footer.FooterController',
        controllerAs: 'vm',
        templateUrl: 'app.footer.template.html'
    });
})(angular);
