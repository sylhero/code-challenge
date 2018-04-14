describe('leads.component.spec.js', function() {
    'use strict';
    var $componentController;
    var LeadsService;
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
            'app.leads.LeadsService',
            '$q',
            '$rootScope',
            '$state',
            '$stateParams',
            'app.common.CommonService',
            'app.StateConstant',
            function(_$componentController_, _LeadsService_,
                _$q_, _$rootscope_, _$state_, _$stateParams_, _CommonService_, _StateConstant_) {
                $componentController = _$componentController_;
                LeadsService = _LeadsService_;
                $q = _$q_;
                $scope = _$rootscope_.$new();
                $state = _$state_;
                $stateParams = _$stateParams_;
                CommonService = _CommonService_;
                StateConstant = _StateConstant_;
                deffered = _$q_.defer();
                spyOn(LeadsService, 'getLeads').and.callFake(function() {
                    return deffered.promise;
                });
            }
        ]);
    });

    describe('leads component', function() {

        it('should init with leads less than limit', function() {
            $stateParams.theme = 'pink';
            spyOn(CommonService, 'setPageTitle');
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            expect(CommonService.setPageTitle).toHaveBeenCalledWith('My Leads');
            expect(controller.theme).toEqual('pink');
            expect(controller.leads.length).toEqual(1);
        });
        it('should init with leads more than limit', function() {
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}, {}, {}, {}, {}, {}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            expect(controller.leads.length).toEqual(5);

        });

        it('should init with leads equal limit', function() {
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}, {}, {}, {}, {}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            expect(controller.leads.length).toEqual(5);
        });

        it('should fail to get leads with error message', function() {
            spyOn(CommonService, 'showToast');
            var controller = $componentController('leads', null, {});
            controller.$onInit();
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');
        });

        it('should fail to get leads with error message', function() {
            spyOn(CommonService, 'showToast');
            var controller = $componentController('leads', null, {});
            controller.$onInit();
            $scope.$apply(function() {
                deffered.reject();
            });
            expect(CommonService.showToast).toHaveBeenCalledWith('Opps! Please try again later');
        });

        it('should go to first page with leads less then total', function() {
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}, {}, {}, {}, {}, {}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            controller.next(1, 5);
            expect(controller.leads.length).toEqual(5);
        });

        it('should go to second page with leads less then limit', function() {
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}, {}, {}, {}, {}, {}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            controller.next(2, 5);
            expect(controller.leads.length).toEqual(1);
        });
        it('should go to first page with leads equal to limit', function() {
            var controller = $componentController('leads', null, {});
            var mockResponse = [{}, {}, {}, {}, {}];
            controller.$onInit();
            $scope.$apply(function() {
                deffered.resolve(mockResponse);
            });
            controller.next(1, 5);
            expect(controller.leads.length).toEqual(5);
        });
    });
});
