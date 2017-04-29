import angular from 'angular';

import MessagesService from './services/messages.service';

export default angular.module('qulixTrialFrontend.messages', [])
    .service('messagesService', MessagesService)
    .name;
