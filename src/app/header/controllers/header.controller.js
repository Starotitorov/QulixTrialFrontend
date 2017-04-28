export default class HeaderController {
    constructor($scope, accountService) {
        accountService.currentUser()
            .then(user => this.currentUser = user);

        $scope.$on(
            'account:change',
            (e, user) => this.currentUser = user
        );
    }
}

HeaderController.$inject = ['$scope', 'accountService'];
