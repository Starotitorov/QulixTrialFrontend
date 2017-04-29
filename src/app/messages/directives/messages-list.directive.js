import template from './messages-list.template.html';

class MessagesListController {
    constructor(messagesService, accountService) {
        this._messagesService = messagesService;
        this._accountService = accountService;

        this._accountService.currentUser()
            .then(user => {
                if (user) {
                    this.getList();
                }
            });
    }

    getList() {
        this._messagesService.list()
            .then(data => {
                this.messages = [];

                data.messages.forEach(message => {
                    this._messagesService.get(message.id)
                        .then(message => {
                            this.messages.push(message)
                        });
                });
            });
    }
}

MessagesListController.$inject = ['messagesService', 'accountService'];

export default class MessagesList {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {};
        this.template = template;
        this.controller = MessagesListController,
        this.controllerAs = 'messagesListCtrl',
        this.bindToController = true;
    }

    static createInstance() {
        return new MessagesList();
    }
}
