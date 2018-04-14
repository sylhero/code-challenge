describe('login.component.spec.js', function() {
    'use strict';
    var $componentController;
    var LoginService;
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
            'app.login.LoginService',
            '$q',
            '$rootScope',
            '$state',
            '$stateParams',
            'app.common.CommonService',
            'app.StateConstant',
            function(_$componentController_, _LoginService_,
                _$q_, _$rootscope_, _$state_, _$stateParams_, _CommonService_, _StateConstant_) {
                $componentController = _$componentController_;
                LoginService = _LoginService_;
                $q = _$q_;
                $scope = _$rootscope_.$new();
                $state = _$state_;
                $stateParams = _$stateParams_;
                CommonService = _CommonService_;
                StateConstant = _StateConstant_;
                deffered = _$q_.defer();
                spyOn(LoginService, 'login').and.callFake(function() {
                    return deffered.promise;
                });
            }
        ]);
    });

    describe('login component', function() {

        it('should init page title', function() {
            spyOn(CommonService, 'setPageTitle');
            var controller = $componentController('login', null, {});
            controller.$onInit();
            expect(CommonService.setPageTitle).toHaveBeenCalledWith('Login');
        });

        it('should submit', function() {
            var controller = $componentController('login', null, {});
            spyOn(CommonService, 'showToast');
            spyOn($state, 'go');
            controller.$onInit();
            controller.submit();
            expect(controller.isLoading).toEqual(true);
            var mockResponse = {
                theme: 'pink',
                token: 'b89720c634d64763b434f8efc3dbe4f2',
                id: 0
            }
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            expect($state.go).toHaveBeenCalledWith(StateConstant.LEADS, mockResponse);

        });
        it('should throw error when login failed', function() {
            var controller = $componentController('login', null, {});
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
