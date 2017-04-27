const COOKIES_KEY = 'auth-info';

export default class AuthInfoStorageService {
    constructor($cookies) {
        this._cookies = $cookies;

        const authInfoJson = this._cookies.get(COOKIES_KEY);
        if (authInfoJson) {
            this._authInfo = JSON.parse(authInfoJson);
        }
    }

    getAuthInfo() {
        return this._authInfo;
    }

    setAuthInfo(value) {
        this._authInfo = value;

        this._cookies.put(COOKIES_KEY, JSON.stringify(value));
    }
}

AuthInfoStorageService.$inject = ['$cookies'];
