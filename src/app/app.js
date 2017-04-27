import angular from 'angular';

import '../styles/app.less';

import account from './account';
import auth from './auth';

angular.module('qulixTrialFrontend', [account, auth]);
