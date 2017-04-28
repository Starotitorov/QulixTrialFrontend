import angular from 'angular';

import HeaderController from './controllers/header.controller';

export default angular.module('qulixTrialFrontend.header', [])
    .controller('HeaderController', HeaderController)
    .name;
