describe('header.component.spec.js', function() {
    'use strict';
    var $componentController;
    var $scope;
    var $stateParams;
    var $state;
    var StateConstant;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$componentController',
            '$rootScope',
            '$stateParams',
            '$state',
            'app.StateConstant',
            function(_$componentController_, _$rootscope_, _$stateParams_, _$state_, _StateConstant_) {
                $componentController = _$componentController_;
                $scope = _$rootscope_.$new();
                $stateParams = _$stateParams_;
                $state = _$state_;
                StateConstant = _StateConstant_;
            }
        ]);
    });

    describe('header component', function() {

        it('should init page theme', function() {
            $stateParams.theme = 'pink';
            var controller = $componentController('header', null, {});
            controller.$onInit();
            expect(controller.theme).toEqual('pink');
        });

        it('should logout', function() {
            spyOn($state, 'go');
            var controller = $componentController('header', null, {});
            controller.$onInit();
            controller.logout();
            expect($state.go).toHaveBeenCalledWith(StateConstant.LOGIN);
        });
    });
});
