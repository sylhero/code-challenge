describe('password-reset.factory.spec.js', function() {
    'use strict';

    var $httpBackend, PasswordResetFactory, CommonConstant, responseMock, headers;

    beforeEach(function() {
        module('app');
        angular.mock.inject([
            '$httpBackend',
            'app.account.password-reset.PasswordResetFactory',
            'app.common.CommonConstant',
            function(_$httpBackend_, _PasswordResetFactory_, _CommonConstant_) {
                $httpBackend = _$httpBackend_;
                PasswordResetFactory = _PasswordResetFactory_;
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
                    'Content-Type': 'application/json',
                    'X-Login-Token': 'token'
                };
            }
        ]);

    });

    describe('PasswordResetFactory', function() {

        it('should update password', function() {
            $httpBackend.whenPATCH(CommonConstant.BASE_URL +
                    '/clients/0/password')
                .respond(200, responseMock, headers);
            var response = PasswordResetFactory.updatePassword('token').update({
                id: 0,
                password: '12345678'
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
