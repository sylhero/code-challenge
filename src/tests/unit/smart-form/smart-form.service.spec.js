describe('smart-form.service.spec.js', function() {
    'use strict';
    var SmartFormFactory, SmartFormService, deferred, $q, registrationRes, userRes, updateRes;

    beforeEach(function() {
        module('app');
        angular.mock.inject(['$q',
            'app.smart-form.SmartFormFactory',
            'app.smart-form.SmartFormService',
            function(_$q_, _SmartFormFactory_, _SmartFormService_) {
                $q = _$q_;
                SmartFormFactory = _SmartFormFactory_;
                SmartFormService = _SmartFormService_;

                deferred = $q.defer();
                registrationRes = {
                    register: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                userRes = {
                    get: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                updateRes = {
                    update: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
            }
        ]);
    });

    describe('smart form', function() {

        it('should register', function() {
            spyOn(SmartFormFactory, 'registration').and.returnValue(registrationRes);
            var response = SmartFormService.registration('fullName', 'test@test.com', 12345678, 'pink');
            expect(response).toBe(deferred.promise);
            expect(SmartFormFactory.registration).toHaveBeenCalled();
        });

        it('should get user', function() {
            spyOn(SmartFormFactory, 'getUser').and.returnValue(userRes);
            var response = SmartFormService.getUser(0, 'token');
            expect(response).toBe(deferred.promise);
            expect(SmartFormFactory.getUser).toHaveBeenCalled();
        });

        it('should update info', function() {
            spyOn(SmartFormFactory, 'updateInfo').and.returnValue(updateRes);
            var response = SmartFormService.updateInfo(0, 'fullName', 12345678, 'test@gmail.com', 'pink', 'token');
            expect(response).toBe(deferred.promise);
            expect(SmartFormFactory.updateInfo).toHaveBeenCalled();
        });

    });
});
