(function(angular) {
    'use strict';

    angular.module('app').constant('app.StateConstant', {
        APP: 'APP',
        LOGIN: 'APP.APP_LOGIN',
        REGISTRATION: 'APP.REGISTRATION',
        ACCOUNT: 'APP.ACCOUNT',
        LEADS: 'APP.LEADS',
        ERROR_404: 'APP.ERROR_404',
        ERROR_401: 'APP.ERROR_401'
    });
})(angular);
