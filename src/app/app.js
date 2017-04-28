import angular from 'angular';

import '../styles/app.less';

import account from './account';
import auth from './auth';

import config from './app.config';

angular.module('qulixTrialFrontend', [account, auth])
    .constant('APP_CONFIG', config);
