describe('LeadsService.spec.js', function() {
    'use strict';
    var LeadsFactory, LeadsService, deferred, $q, res;

    beforeEach(function() {
        module('app');
        angular.mock.inject(['$q',
            'app.leads.LeadsFactory',
            'app.leads.LeadsService',
            function(_$q_, _LeadsFactory_, _LeadsService_) {
                $q = _$q_;
                LeadsFactory = _LeadsFactory_;
                LeadsService = _LeadsService_;

                deferred = $q.defer();
                res = {
                    leads: function() {
                        return {
                            $promise: deferred.promise
                        };
                    }
                };
                res.get = res.leads;
            }
        ]);
    });

    describe('getLeads', function() {

        it('should get leads', function() {
            spyOn(LeadsFactory, 'getLeads').and.returnValue(res);
            var response = LeadsService.getLeads();
            expect(response).toBe(deferred.promise);
            expect(LeadsFactory.getLeads).toHaveBeenCalled();
        });

    });
});
