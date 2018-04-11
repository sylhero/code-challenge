(function(angular) {
    'use strict';
    angular.module('app.common')
        .service('app.common.CommonService', CommonService);
    CommonService.$inject = ['$mdToast', '$window'];

    function CommonService($mdToast, $window) {
        var svc = this;
        svc.showToast = showToast;
        svc.setPageTitle = setPageTitle;

        function showToast(content) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(content)
                .position('top right')
                .hideDelay(3000)
            );
        }

        function setPageTitle(title) {
            $window.document.title = title;
        }
    }
})(angular);
