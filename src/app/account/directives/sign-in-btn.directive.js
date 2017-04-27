import template from './sign-in-btn.template.html';

export default class SignInBtn {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {};
        this.template = template;
        this.controller = [
            '$scope',
            '$state',
            '$window',
            'accountService',
            function($scope, $state, $window, accountService) {
                $window.onAuthorize = user => $scope.$apply(() => {
                    accountService.setCurrentUser(user);
                    $state.go('main', {}, { reload: true });
                });
            }
        ];
    }

    static createInstance() {
        return new SignInBtn;
    }
}
