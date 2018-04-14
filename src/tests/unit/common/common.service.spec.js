describe('common.service.spec.js', function() {
    'use strict';
    var $window, $mdToast, CommonService;

    beforeEach(function() {
        module('app');
        angular.mock.inject(['$mdToast', '$window', 'app.common.CommonService',
            function(_$mdToast_, _$window_, _CommonService_) {
                $mdToast = _$mdToast_;
                $window = _$window_;
                CommonService = _CommonService_;
                spyOn($mdToast, 'show');
            }
        ]);
    });

    describe('common service', function() {

        it('should set page title', function() {
            CommonService.setPageTitle('test');
            expect($window.document.title).toEqual('test');
        });

        it('should make a toast', function() {
            CommonService.showToast('test');
            expect($mdToast.show).toHaveBeenCalled();
        });

    });
});
