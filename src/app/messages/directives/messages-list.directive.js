import template from './messages-list.template.html';

class MessagesListController {
    constructor($scope, $q, $state, $stateParams,
        messagesService, accountService) {
        this._init(
            $scope,
            $q,
            $state,
            $stateParams,
            messagesService,
            accountService
        );
    }

    _init($scope, $q, $state, $stateParams,
        messagesService, accountService) {
        $scope.query = $stateParams.q;

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
                labelIds: $stateParams.labelIds,
                maxResults: 10,
                q: $stateParams.q
            };
            if ($scope.nextPageToken) {
                params.pageToken = $scope.nextPageToken;
            }

            messagesService.list(params)
                .then(data => {
                    $scope.nextPageToken = data.nextPageToken;
                    if (!data.messages) {
                        if (!$scope.messages) {
                            $scope.messages = [];
                        }
                        $scope.loadingInProgress = false;
                        return;
                    }

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

        $scope.search = (query) => {
            $scope._goMainPage(query);
        }

        $scope.onNewMessage = () => {
            $scope._goMainPage();
        }

        $scope._goMainPage = (query) => {
            $state.go('main', { q: query }, { reload: true });
        }
    }
}

MessagesListController.$inject = [
    '$scope',
    '$q',
    '$state',
    '$stateParams',
    'messagesService',
    'accountService'
];

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
