import angular from 'angular';

import MessagesService from './services/messages.service';
import MessagesList from './directives/messages-list.directive';

export default angular.module('qulixTrialFrontend.messages', [])
    .service('messagesService', MessagesService)
    .directive('messagesList', MessagesList.createInstance)
    .name;
