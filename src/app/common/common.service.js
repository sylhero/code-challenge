(function(angular) {
    'use strict';
    angular.module('app.common')
        .service('app.common.CommonService', CommonService);
    CommonService.$inject = ['$mdToast'];

    function CommonService($mdToast) {
        var svc = this;
        svc.showToast = showToast;

        function showToast(content) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(content)
                .position('top right')
                .hideDelay(3000)
            );
        }
    }
})(angular);
