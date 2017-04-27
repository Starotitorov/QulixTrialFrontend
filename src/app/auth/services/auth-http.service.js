export default class AuthHttpService {
    constructor($http, AuthInfoStorageService) {
        this._http = $http;
        this._authInfoStorageService = AuthInfoStorageService;
    }

    get(url, options = {}) {
        this._appendAuthHeader(options);
        return this._http.get(url, options);
    }

    post(url, body, options = {}) {
        this._appendAuthHeader(options);
        return this._http.post(url, body, options);
    }

    delete(url, options = {}) {
        this._appendAuthHeader(options);
        return this._http.delete(url, options);
    }

    _appendAuthHeader(options) {
        const authInfo = this._authInfoStorageService.getAuthInfo();

        if (!options.headers) {
            options.headers = {};
        }
        options.headers['Authorization'] = `Bearer ${authInfo.access_token}`;
    }
}

AuthHttpService.$inject = ['$http', 'AuthInfoStorageService'];
