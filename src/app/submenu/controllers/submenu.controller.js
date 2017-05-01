export default class SubmenuController {
    constructor($scope, $state, accountService, labelsService) {
        this._state = $state;
        this._labelsService = labelsService;

        accountService.currentUser()
            .then((user) => {
                if (user) {
                    this._getListOfLabels();
                }
            });

        $scope.$on('account:change', () => this._getListOfLabels());
    }

    _getListOfLabels() {
        this._labelsService.list()
            .then(data => this.labels = data.labels);
    }
}

SubmenuController.$inject = ['$scope', '$state', 'accountService', 'labelsService']
