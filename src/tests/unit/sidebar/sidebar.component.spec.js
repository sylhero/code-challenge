describe('sidebar.component.spec.js', function() {
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

    describe('sidebar component', function() {

        it('should init page theme', function() {
            $stateParams.theme = 'pink';
            var controller = $componentController('sidebar', null, {});
            controller.$onInit();
            expect(controller.theme).toEqual('pink');
        });

        it('should go to leads page', function() {
            spyOn($state, 'go');
            $stateParams.theme = 'pink';
            $stateParams.id = 0;
            $stateParams.token = 'token';
            var controller = $componentController('sidebar', null, {});
            controller.$onInit();
            controller.goToLeads();
            expect($state.go)
            .toHaveBeenCalledWith(StateConstant.LEADS, {
                theme: 'pink',
                id: $stateParams.id,
                token: $stateParams.token});
        });
        it('should go to account page', function() {
            spyOn($state, 'go');
            $stateParams.theme = 'pink';
            $stateParams.id = 0;
            $stateParams.token = 'token';
            var controller = $componentController('sidebar', null, {});
            controller.$onInit();
            controller.goToAccount();
            expect($state.go)
            .toHaveBeenCalledWith(StateConstant.ACCOUNT, {
                theme: $stateParams.theme,
                id: $stateParams.id,
                token: $stateParams.token});
        });
    });
});
