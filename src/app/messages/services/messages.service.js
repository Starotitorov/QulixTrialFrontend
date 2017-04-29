export default class MessagesService {
    constructor(authHttpService, APP_CONFIG) {
        this._authHttpService = authHttpService;
        this._baseUrl = `${APP_CONFIG.apiPath}/users/me/messages`;
    }

    list(params) {
        return this._authHttpService.get(this._baseUrl, { params: params })
            .then(response => this._parse(response));
    }

    get(id) {
        return this._authHttpService.get(`${this._baseUrl}/${id}`)
            .then(response => this._parse(response));
    }

    delete(id) {
        return this._authHttpService.delete(`${this._baseUrl}/${id}`)
            .then(response => this._parse(response));
    }

    _parse(response) {
        return response.data;
    }
}

MessagesService.$inject = ['authHttpService', 'APP_CONFIG'];
