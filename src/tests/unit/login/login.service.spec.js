describe('login.service.spec.js', function() {
    'use strict';
    var LoginFactory, LoginService, deferred, $q, res;

    beforeEach(function() {
        module('app');
        angular.mock.inject(['$q',
            'app.login.LoginFactory',
            'app.login.LoginService',
            function(_$q_, _LoginFactory_, _LoginService_) {
                $q = _$q_;
                LoginFactory = _LoginFactory_;
                LoginService = _LoginService_;

                deferred = $q.defer();
                res = {
                    auth: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                res.post = res.auth;
            }
        ]);
    });

    describe('login', function() {

        it('should login', function() {
            spyOn(LoginFactory, 'login').and.returnValue(res);
            var response = LoginService.login('test@test.com', 12345678);
            expect(response).toBe(deferred.promise);
            expect(LoginFactory.login).toHaveBeenCalled();
        });

    });
});
