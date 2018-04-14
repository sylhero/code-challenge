describe('password-reset.component.spec.js', function() {
    'use strict';
    var $componentController;
    var PasswordResetService;
    var $q;
    var $scope;
    var CommonService;
    var deffered;
    var $stateParams;


    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$componentController',
            'app.account.password-reset.PasswordResetService',
            '$q',
            '$rootScope',
            '$stateParams',
            'app.common.CommonService',
            function(_$componentController_, _PasswordResetService_,
                _$q_, _$rootscope_, _$stateParams_, _CommonService_) {
                $componentController = _$componentController_;
                PasswordResetService = _PasswordResetService_;
                $q = _$q_;
                $scope = _$rootscope_.$new();
                $stateParams = _$stateParams_;
                CommonService = _CommonService_;
                deffered = _$q_.defer();
                spyOn(PasswordResetService, 'updatePassword').and.callFake(function() {
                    return deffered.promise;
                });
            }
        ]);
    });

    describe('password reset component', function() {

        it('should init controller with theme', function() {
            $stateParams.theme = 'pink';
            var controller = $componentController('passwordReset', null, {});
            controller.$onInit();
            expect(controller.theme).toEqual('pink');
            expect(controller.isLoading).toEqual(false);
        });

        it('should match two passwords', function() {
            var controller = $componentController('passwordReset', null, {});
            controller.$onInit();
            controller.desiredPassword = '12345678';
            controller.confirmedPassword = '12345678';
            var result = controller.match();
            expect(result).toEqual(true);
        });
        it('should make a toast if two passwords do not match', function() {
            var controller = $componentController('passwordReset', null, {});
            spyOn(CommonService, 'showToast');
            controller.$onInit();
            controller.desiredPassword = '12345678';
            controller.confirmedPassword = '12345679';
            var result = controller.match();
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Your passwords don\'t match');
            expect(result).toEqual(false);

        });

        it('should submit', function() {
            var controller = $componentController('passwordReset', null, {});
            spyOn(CommonService, 'showToast');

            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.resolve({});
            });
            expect(CommonService.showToast).toHaveBeenCalledWith('Success! Your password has been updated!');
            expect(controller.isLoading).toEqual(false);

        });
        it('should throw error', function() {
            var controller = $componentController('passwordReset', null, {});
            spyOn(CommonService, 'showToast');

            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');
            expect(controller.isLoading).toEqual(false);

        });
    });
});
