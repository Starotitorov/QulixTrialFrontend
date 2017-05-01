import angular from 'angular';
import uirouter from 'angular-ui-router';

import '../styles/app.less';

import account from './account';
import auth from './auth';
import commons from './commons';
import header from './header';
import labels from './labels';
import main from './main';
import messages from './messages';
import submenu from './submenu';

import config from './app.config';
import routing from './app.routes';

angular.module('qulixTrialFrontend', [
    uirouter,

    account,
    auth,
    commons,
    header,
    labels,
    main,
    messages,
    submenu
])
    .constant('APP_CONFIG', config)
    .config(routing);
