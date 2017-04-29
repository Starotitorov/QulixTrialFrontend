import template from './message.template.html';

class MessageController {
    constructor(messagesService) {
        this._messagesService = messagesService;
    }

    deleteMessage() {
        this._messagesService.delete(this.message.id)
            .then(() => this.remove(this.message));
    }
}

MessageController.$inject = ['messagesService'];

export default class Message {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            message: '=',
            remove: '&onRemove'
        };
        this.template = template;
        this.controller = MessageController,
        this.controllerAs = 'messageCtrl',
        this.bindToController = true;
    }

    static createInstance() {
        return new Message();
    }
}
