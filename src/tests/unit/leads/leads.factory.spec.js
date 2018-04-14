describe('leads.factory.spec.js', function() {
    'use strict';

    var $httpBackend, $rootScope, LeadsFactory, CommonConstant, responseMock, headers;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$httpBackend',
            '$rootScope',
            'app.leads.LeadsFactory',
            'app.common.CommonConstant',
            function(_$httpBackend_, _$rootScope_, _LeadsFactory_, _CommonConstant_) {
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;
                LeadsFactory = _LeadsFactory_;
                CommonConstant = _CommonConstant_;

                responseMock = [{
                    lead_id: '0',
                    email: 'test@test.com',
                    full_name: 'test test',
                    phone: '111111111'
                }];
                headers = {
                    'X-Api-Token': 'yulong-song',
                    'Content-Type': 'application/json'
                };
            }
        ]);

    });

    describe('LeadsFactory', function() {

        it('should get leads', function() {
            $httpBackend.whenGET(CommonConstant.BASE_URL +
                    '/leads')
                .respond(200, responseMock, headers);
            var response = LeadsFactory.getLeads().leads();
            $httpBackend.flush();
            expect(response[0].lead_id).toEqual(responseMock[0].lead_id);
            expect(response[0].email).toEqual(responseMock[0].email);
            expect(response[0].full_name).toEqual(responseMock[0].full_name);
            expect(response[0].phone).toEqual(responseMock[0].phone);
        });

    });

});
