describe('smart-form.component.spec.js', function() {
    'use strict';
    var $componentController;
    var SmartFormService;
    var $q;
    var $scope;
    var CommonService;
    var deffered;
    var $state;
    var $stateParams;
    var StateConstant;


    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$componentController',
            'app.smart-form.SmartFormService',
            '$q',
            '$rootScope',
            '$state',
            '$stateParams',
            'app.common.CommonService',
            'app.StateConstant',
            function(_$componentController_, _SmartFormService_,
                _$q_, _$rootscope_, _$state_, _$stateParams_, _CommonService_, _StateConstant_) {
                $componentController = _$componentController_;
                SmartFormService = _SmartFormService_;
                $q = _$q_;
                $scope = _$rootscope_.$new();
                $state = _$state_;
                $stateParams = _$stateParams_;
                CommonService = _CommonService_;
                StateConstant = _StateConstant_;
                deffered = _$q_.defer();
                spyOn(CommonService, 'showToast');
                spyOn($state, 'go');
                spyOn(SmartFormService, 'getUser').and.callFake(function() {
                    return deffered.promise;
                });
                spyOn(SmartFormService, 'registration').and.callFake(function() {
                    return deffered.promise;
                });
                spyOn(SmartFormService, 'updateInfo').and.callFake(function() {
                    return deffered.promise;
                });
            }
        ]);
    });

    describe('login component', function() {

        it('should init as registration form', function() {

            var controller = $componentController('smartForm', null, {
                formType: 'registration'
            });
            controller.$onInit();
            expect(controller.submitLabel).toEqual('Create Account');
        });

        it('should init as update info form', function() {

            var controller = $componentController('smartForm', null, {
                formType: 'other'
            });
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve({
                    email: 'test@test.com',
                    phone: 12345678,
                    full_name: 'test',
                    template: 'pink'
                });
            });
            expect(controller.submitLabel).toEqual('Update Info');
            expect(controller.user.email).toEqual('test@test.com');
            expect(controller.user.phone).toEqual(12345678);
            expect(controller.user.theme).toEqual('pink');
            expect(controller.user.fullName).toEqual('test');
        });

        it('should fail to init as update info form', function() {

            var controller = $componentController('smartForm', null, {
                formType: 'other'
            });
            controller.$onInit();
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');
        });
        it('should submit registration form', function() {
            var controller = $componentController('smartForm', null, {
                formType: 'registration'
            });
            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.resolve({});
            });
            expect($state.go).toHaveBeenCalledWith(StateConstant.LOGIN);

        });
        it('should fail to submit registration form', function() {
            var controller = $componentController('smartForm', null, {
                formType: 'registration'
            });
            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(controller.isLoading).toEqual(false);
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');

        });

        it('should submit update info form', function() {
            var controller = $componentController('smartForm', null, {
                formType: 'other'
            });
            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.resolve({});
            });
            expect(controller.isLoading).toEqual(false);
            expect(CommonService.showToast).toHaveBeenCalledWith('Success! Your personal info has been updated!');
        });
        it('should fail to submit registration form', function() {
            var controller = $componentController('smartForm', null, {
                formType: 'other'
            });
            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(controller.isLoading).toEqual(false);
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');

        });
    });
});
