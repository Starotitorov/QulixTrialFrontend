import template from './search-input.template.html';

class SearchInputController {
    constructor() {
    }

    search() {
        this.onSearchBtnClick(this.query);
    }
}

export default class SearchInput {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            query: '@',
            onSearchBtnClick: '='
        };
        this.template = template;
        this.controller = SearchInputController,
        this.controllerAs = 'searchInputCtrl',
        this.bindToController = true;
    }

    static createInstance() {
        return new SearchInput();
    }
}
