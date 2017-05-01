export default class LabelsService {
    constructor(authHttpService, APP_CONFIG) {
        this._authHttpService = authHttpService;
        this._baseUrl = `${APP_CONFIG.apiPath}/users/me/labels`;
    }

    list() {
        return this._authHttpService.get(this._baseUrl)
            .then((response) => this._parse(response));
    }

    _parse(response) {
        return response.data;
    }
}

LabelsService.$inject = ['authHttpService', 'APP_CONFIG'];
