import template from './main/controllers/main.template.html';

export default function routing($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            template: template,
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        });

    $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$stateProvider', '$urlRouterProvider'];
