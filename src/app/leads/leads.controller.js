(function(angular) {
    'use strict';
    angular.module('app.leads')
        .controller('app.leads.LeadsController', LeadsController);
    LeadsController.$inject = ['$stateParams', 'app.leads.LeadsService', 'app.common.CommonService'];

    function LeadsController($stateParams, LeadsService, CommonService) {
        var vm = this;
        vm.$onInit = init;
        vm.next = next;
        function init() {
            console.log($stateParams.theme);
            vm.theme = $stateParams.theme;
            vm.data = [];
            vm.tableConfig = {
                order: 'Name',
                limit: 5,
                page: 1
            };
            CommonService.setPageTitle('My Leads');
            LeadsService.getLeads().then(function(data) {
                vm.total = data.length;
                vm.data = data;
                vm.leads = data.slice(0,
                    vm.tableConfig.limit <= data.length ? vm.tableConfig.limit : data.length);
            }, function() {
                CommonService.showToast('Opps! Please try again later');
            });
        }

        function next(page, limit) {
            var start = page * limit - limit;
            var end = page * limit;

            vm.leads = vm.data.slice(start, end <= vm.data.length ? end : vm.data.length);
        }
    }
})(angular);
