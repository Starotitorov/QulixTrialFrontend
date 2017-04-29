import template from './messages-list.template.html';

class MessagesListController {
    constructor($scope, $q, messagesService, accountService) {
        this._init($scope, $q, messagesService, accountService);
    }

    _init($scope, $q, messagesService, accountService) {
        accountService.currentUser()
            .then(user => {
                if (user) {
                    $scope.getNextPage();
                }
            });

        $scope.getNextPage = () => {
            if ($scope.messages && !$scope.nextPageToken) {
                return;
            }
            
            $scope.loadingInProgress = true;
            let params = {
                labelIds: 'INBOX',
                maxResults: 10
            };
            if ($scope.nextPageToken) {
                params.pageToken = $scope.nextPageToken;
            }

            messagesService.list(params)
                .then(data => {
                    $scope.nextPageToken = data.nextPageToken;

                    $q.all(
                        data.messages.map(message => {
                            return messagesService.get(message.id)
                        })
                    )
                        .then(messages => {
                            if (!$scope.messages) {
                                $scope.messages = [];
                            }
                            Array.prototype.push.apply($scope.messages, messages);
                            $scope.loadingInProgress = false;
                        });
                });
        };

        $scope.removeMessage = (message) => {
            $scope.messages.splice($scope.messages.indexOf(message), 1);
        }
    }
}

MessagesListController.$inject = ['$scope', '$q', 'messagesService', 'accountService'];

export default class MessagesList {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {};
        this.template = template;
        this.controller = MessagesListController;
    }

    static createInstance() {
        return new MessagesList();
    }
}
