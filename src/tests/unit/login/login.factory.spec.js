describe('login.factory.spec.js', function() {
    'use strict';

    var $httpBackend, $rootScope, LoginFactory, CommonConstant, responseMock, headers;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$httpBackend',
            '$rootScope',
            'app.login.LoginFactory',
            'app.common.CommonConstant',
            function(_$httpBackend_, _$rootScope_, _LoginFactory_, _CommonConstant_) {
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;
                LoginFactory = _LoginFactory_;
                CommonConstant = _CommonConstant_;

                responseMock = {
                    client_id: '0',
                    email: 'test@test.com',
                    full_name: 'test test',
                    phone: '111111111',
                    template: 'pink',
                    token: 'token'
                };
                headers = {
                    'X-Api-Token': 'yulong-song',
                    'Content-Type': 'application/json'
                };
            }
        ]);

    });

    describe('LoginFactory', function() {

        it('should update password', function() {
            $httpBackend.whenPOST(CommonConstant.BASE_URL +
                    '/clients/login')
                .respond(200, responseMock, headers);
            var response = LoginFactory.login().auth({});
            $httpBackend.flush();
            expect(response.client_id).toEqual(responseMock.client_id);
            expect(response.email).toEqual(responseMock.email);
            expect(response.full_name).toEqual(responseMock.full_name);
            expect(response.phone).toEqual(responseMock.phone);
            expect(response.template).toEqual(responseMock.template);
        });

    });

});
