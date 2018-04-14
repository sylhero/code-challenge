describe('footer.component.spec.js', function() {
    'use strict';
    var $componentController;
    var $scope;
    var $stateParams;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$componentController',
            '$rootScope',
            '$stateParams',
            function(_$componentController_, _$rootscope_, _$stateParams_) {
                $componentController = _$componentController_;
                $scope = _$rootscope_.$new();
                $stateParams = _$stateParams_;
            }
        ]);
    });

    describe('footer component', function() {

        it('should init page theme', function() {
            $stateParams.theme = 'pink';
            var controller = $componentController('footer', null, {});
            controller.$onInit();
            expect(controller.theme).toEqual('pink');
        });
    });
});
