import angular from 'angular';

import SearchInput from './directives/search-input.directive';
import capitalizeFilter from './filters/capitalize.filter';

export default angular.module('qulixTrialFrontend.common', [])
    .directive('searchInput', SearchInput.createInstance)
    .filter('capitalize', () => capitalizeFilter)
    .name;
