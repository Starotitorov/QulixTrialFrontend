import angular from 'angular';

import template from './write-message-btn.template.html';

class WriteMessageBtnController {
    constructor(messagesService) {
        this._messagesService = messagesService;
        this.message = {};
        this.sendBtnDisabled = false;
    }

    sendMessage() {
        this.sendBtnDisabled = true;
        this._messagesService.send(this.message)
            .then((message) => {
                this.sendBtnDisabled = false;
                this.message = {};

                // wait for bootstrap animation finish
                angular.element('.modal#modalNewMessage').one(
                    'hidden.bs.modal',
                    () => {
                        if (typeof this.onSave === 'function') {
                            this.onSave(message);
                        }
                    }
                );
                angular.element('.modal#modalNewMessage').modal('hide');
            });
    }
}

WriteMessageBtnController.$inject = ['messagesService'];

export default class WriteMessageBtn {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            onSave: '=' 
        };
        this.template = template;
        this.controller = WriteMessageBtnController,
        this.controllerAs = 'writeMessageBtnCtrl',
        this.bindToController = true;
    }

    static createInstance() {
        return new WriteMessageBtn();
    }
}
