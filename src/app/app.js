import angular from 'angular';

import '../styles/app.less';

import account from './account';
import auth from './auth';
import header from './header';

import config from './app.config';

angular.module('qulixTrialFrontend', [
    account,
    auth,
    header
])
    .constant('APP_CONFIG', config);
