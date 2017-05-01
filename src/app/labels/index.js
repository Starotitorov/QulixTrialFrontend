import angular from 'angular';

import LabelsService from './services/labels.service';

export default angular.module('qulixTrialFrontend.labels', [])
    .service('labelsService', LabelsService)
    .name;
