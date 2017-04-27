export default class AccountService {
    constructor($q, $rootScope, authInfoStorageService) {
        this._q = $q;
        this._rootScope = $rootScope;
        this._authInfoStorageService = authInfoStorageService;
        this._currentUser = null;
    }

    setCurrentUser(user) {
        let authInfo = null;

        if (user) {
            const profile = user.getBasicProfile();
            this._currentUser = {
                id: profile.getId(),
                fullName: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl()
            };
            authInfo = user.getAuthResponse();
        } else {
            this._currentUser = null;
        }

        this._authInfoStorageService.setAuthInfo(authInfo);
        this._broadcast('change', this._currentUser);
    }

    currentUser() {
        return this._q.resolve(this._currentUser);
    }

    _broadcast(name, args) {
        this._rootScope.$broadcast(`account:${name}`, args);
    }
}

AccountService.$inject = ['$q', '$rootScope', 'authInfoStorageService'];
