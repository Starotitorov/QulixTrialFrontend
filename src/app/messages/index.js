import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngInfiniteScroll from 'ng-infinite-scroll';

import MessagesService from './services/messages.service';
import MessagesList from './directives/messages-list.directive';
import Message from './directives/message.directive';

export default angular.module('qulixTrialFrontend.messages', [
    ngSanitize,
    ngInfiniteScroll
])
    .service('messagesService', MessagesService)
    .directive('messagesList', MessagesList.createInstance)
    .directive('message', Message.createInstance)
    .name;
