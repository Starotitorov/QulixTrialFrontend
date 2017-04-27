import angular from 'angular';

import SignInBtn from './directives/sign-in-btn.directive';
import AccountService from './services/account.service';

export default angular.module('qulixTrialFrontend.account', [])
    .directive('signInBtn', SignInBtn.createInstance)
    .service('accountService', AccountService)
    .name;
