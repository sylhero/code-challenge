describe('samrt-form.factory.spec.js', function() {
    'use strict';

    var $httpBackend, $rootScope, SmartFormFactory, CommonConstant, responseMock, headers;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$httpBackend',
            '$rootScope',
            'app.smart-form.SmartFormFactory',
            'app.common.CommonConstant',
            function(_$httpBackend_, _$rootScope_, _SmartFormFactory_, _CommonConstant_) {
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;
                SmartFormFactory = _SmartFormFactory_;
                CommonConstant = _CommonConstant_;

                responseMock = {
                    client_id: '0',
                    email: 'test@test.com',
                    full_name: 'test test',
                    phone: '111111111',
                    template: 'pink'
                };

                headers = {
                    'X-Api-Token': 'yulong-song',
                    'Content-Type': 'application/json'
                };
            }
        ]);

    });

    describe('SmartFormFactory', function() {

        it('should register', function() {
            $httpBackend.whenPOST(CommonConstant.BASE_URL +
                    '/clients')
                .respond(200, responseMock, headers);
            var response = SmartFormFactory.registration().register({});
            $httpBackend.flush();
            expect(response.client_id).toEqual(responseMock.client_id);
            expect(response.email).toEqual(responseMock.email);
            expect(response.full_name).toEqual(responseMock.full_name);
            expect(response.phone).toEqual(responseMock.phone);
            expect(response.template).toEqual(responseMock.template);
        });

        it('should updateInfo', function() {
            headers.token = 'token';
            $httpBackend.whenPUT(CommonConstant.BASE_URL +
                    '/clients/0')
                .respond(200, responseMock, headers);
            var response = SmartFormFactory.updateInfo('token').update({
                client_id: 0
            });
            $httpBackend.flush();
            expect(response.client_id).toEqual(responseMock.client_id);
            expect(response.email).toEqual(responseMock.email);
            expect(response.full_name).toEqual(responseMock.full_name);
            expect(response.phone).toEqual(responseMock.phone);
            expect(response.template).toEqual(responseMock.template);
        });

        it('should getUser', function() {
            headers.token = 'token';
            $httpBackend.whenGET(CommonConstant.BASE_URL +
                    '/clients/0')
                .respond(200, responseMock, headers);
            var response = SmartFormFactory.getUser('token').get({
                id: 0
            });
            $httpBackend.flush();
            expect(response.client_id).toEqual(responseMock.client_id);
            expect(response.email).toEqual(responseMock.email);
            expect(response.full_name).toEqual(responseMock.full_name);
            expect(response.phone).toEqual(responseMock.phone);
            expect(response.template).toEqual(responseMock.template);
        });

    });

});
