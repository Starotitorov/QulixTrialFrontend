import angular from 'angular';

import SearchInput from './directives/search-input.directive';

export default angular.module('qulixTrialFrontend.commons', [])
    .directive('searchInput', SearchInput.createInstance)
    .name;
