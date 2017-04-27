import angular from 'angular';
import ngCookies from 'angular-cookies';

import AuthHttpService from './services/auth-http.service';
import AuthInfoStorageService from './services/auth-info-storage.service';

export default angular.module('qulixTrialFrontend.auth', [
    'ngCookies'
])
    .service('authHttpService', AuthHttpService)
    .service('authInfoStorageService', AuthInfoStorageService)
    .name;
