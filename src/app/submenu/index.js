import angular from 'angular';

import SubmenuController from './controllers/submenu.controller';

export default angular.module('qulixTrialFrontend.submenu', [])
    .controller('SubmenuController', SubmenuController)
    .name;
