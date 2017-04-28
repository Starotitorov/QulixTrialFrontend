import angular from 'angular';

import MainController from './controllers/main.controller';

export default angular.module('qulixTrialFrontend.main', [])
    .controller('MainController', MainController)
    .name;
