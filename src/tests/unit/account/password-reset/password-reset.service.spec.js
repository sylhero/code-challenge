describe('password-reset.PasswordResetService.spec.js', function() {
    'use strict';
    var PasswordResetFactory, PasswordResetService, deferred, $q, res, CommonConstant;

    beforeEach(function() {
        module('app');
        angular.mock.inject(['$q',
            'app.account.password-reset.PasswordResetFactory',
            'app.account.password-reset.PasswordResetService',
            function(_$q_, _PasswordResetFactory_, _PasswordResetService_) {
                $q = _$q_;
                PasswordResetFactory = _PasswordResetFactory_;
                PasswordResetService = _PasswordResetService_;

                deferred = $q.defer();
                res = {
                    update: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                res.put = res.update;
            }
        ]);
    });

    describe('updatePassword', function() {

        it('should update password', function() {
            spyOn(PasswordResetFactory, 'updatePassword').and.returnValue(res);
            var response = PasswordResetService.updatePassword(0, 'token', 12345678);
            expect(response).toBe(deferred.promise);
            expect(PasswordResetFactory.updatePassword).toHaveBeenCalled();
        });

    });
});
